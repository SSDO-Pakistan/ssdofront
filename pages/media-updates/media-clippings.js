import React, { useState, useEffect } from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
import ReactPaginate from "react-paginate";

const MediaClippings = () => {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 10;
  useEffect(() => {
    const getPublications = async () => {
      const res = await fetch(
        `${API_URL}/api/media-clipings?populate=*&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=${limit}`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      // console.log("pub", data);
      const total = data.meta.pagination.total;
      setpageCount(Math.ceil(total / limit));
      // console.log(Math.ceil(total/12));
      setItems(data);
    };

    getPublications();
  }, [limit]);
  console.log("items", items);
  const fetchPublications = async (currentPage) => {
    const res = await fetch(
      `${API_URL}/api/media-clipings?populate=*&sort=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
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
    <div class="container p-4 mt-20">
      <div className="block-title-6">
        <h4 className="h5 border-primary">
          <span className="bg-primary text-white">Media Clippings</span>
        </h4>
      </div>

      <div className="d-flex flex-wrap">
        {items &&
          items.data?.map((clip) => {
            return (
              <Link
                href={
                  API_URL +
                  clip.attributes.image.data.attributes.formats?.thumbnail.url
                }
                target="_blank"
               key={clip.attributes.id}>
                <div
                  style={{
                    margin: "5px",
                    width: "auto",
                    display: "inline-block",
                  }}
                >
                  <img
                    src={API_URL + clip.attributes.image.data.attributes.url}
                    alt=""
                  />
                </div>
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
  );
};

export default MediaClippings;
