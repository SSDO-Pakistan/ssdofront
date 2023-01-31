import React, { useState, useEffect } from "react";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import Link from "next/link";

const Reports = () => {
  const router = useRouter();

  const { reports } = router.query;
  console.log("reports", reports);
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 10;
  useEffect(() => {
    const getPublications = async () => {
      const res = await fetch(
        `${API_URL}/api/publications?filters[navType][$eq]=${reports}&populate=*&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=${limit}`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      console.log("pub", data);
      const total = data.meta.pagination.total;
      setpageCount(Math.ceil(total / limit));
      // console.log(Math.ceil(total/12));
      setItems(data);
    };

    getPublications();
  }, [reports]);
  console.log("items", items);
  const fetchPublications = async (currentPage) => {
    const res = await fetch(
      `${API_URL}/api/publications?filters[navType][$eq]=${reports}&populate=*&sort=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
      // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };
  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const publicationFromServer = await fetchPublications(currentPage);

    setItems(publicationFromServer);
  };

  return (
    <main className="d-flex flex-row mt-3 p-3  mb-3">
      <div className="col-md-12 h-auto ">
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Publications</span>
          </h4>
        </div>
        <div className="d-flex justify-space-between flex-row flex-wrap gap-3 h-auto mt-5 mb-3">
          {items &&
            items.data?.map((publication) => {
              return (
                <Link
                  href={`${
                    API_URL + publication.attributes.File?.data?.attributes.url
                  } `}
                key={publication.attributes.id}>
                   <article className="card shadow-sm">      
                      <Image  className="card-img-top"
                        width={450}
                        height={350}
                        src={ 
                          publication.attributes.cover.data.attributes.url
                        }
                        alt=""
                      />
                     <div class="card-body">
                          <h4 class="card-title">
                            {publication.attributes.title}
                          </h4>
                          <p class="card-text">
                            {publication.attributes.description}
                          </p>
                          <p className="small text-dark ">
                              {publication.attributes.type}
                          </p>
                      </div> 
                  </article>
                </Link>
              );
            })}
        </div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </main>
  );
};

export default Reports;
