import React, { useState, useEffect } from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import Card from "react-bootstrap/Card";
const Blogs = () => {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 10;
  useEffect(() => {
    const getPublications = async () => {
      const res = await fetch(
        `${API_URL}/api/posts?filters[type][$eq]=Blog&filters[slider][$eq]=false&populate=*&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=${limit}`
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
      `${API_URL}/api/posts?filters[type][$eq]=Blog&filters[slider][$eq]=false&populate=*&sort=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`

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
    <div className="container p-4 mt-20">
      <div className="block-title-6 text-center">
        <h4 className="h5 border-primary">
          <span className="bg-primary text-white">Blogs</span>
        </h4>
      </div>
      <div className="d-flex flex-wrap">
        {items &&
          items.data?.map((blog) => {
            return (
              <Card style={{ width: "30rem", margin: "20px" }} key={blog.attributes.id}>
                <Card.Body>
                  <Card.Title style={{ cursor: "pointer" }}>
                    {blog.attributes.title}
                  </Card.Title>
                  <Card.Text>
                    {blog.attributes.description.substring(0, 50).concat("...")}
                  </Card.Text>

                  <Card.Link href={`/blog/${blog.attributes.slug}`}>
                    View blog
                  </Card.Link>
                </Card.Body>
              </Card>
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

export default Blogs;
