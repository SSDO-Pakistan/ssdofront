import React, { useState, useEffect } from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
import AlbumModal from "./../components/AlbumModal";
import ReactPaginate from "react-paginate";
import Image from 'next/image'
import moment from "moment";
const Albums = ({ data }) => {
  const [modalShow, setmodalShow] = useState(false);
  const [showGallery, setshowGallery] = useState({});

  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 10;
  useEffect(() => {
    const getPublications = async () => {
      const res = await fetch(
        `${API_URL}/api/galleries?populate=*&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=${limit}`
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
      `${API_URL}/api/galleries?populate=*&sort=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
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
    <div className="row mt-3 p-3 ">
      <div className="col-md-8">
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Albums</span>
          </h4>
        </div>
        <div className="d-flex flex-row flex-wrap gap-2 h-auto">
          {items &&
            items.data?.map((gallery) => {
              return (
                <article className="card card-full hover-a mb-4"
                
                  onClick={() => {
                    setshowGallery(gallery);
                    setmodalShow(true);
                  }}
                  key={gallery.attributes.id}>
                  <div className="mb-2">
                  <Image
                     width={380}
                     height={210}
                      src={  
                        gallery.attributes.images.data[0].attributes.formats.thumbnail.url
                      }
                      alt=""
                    /> 
                  </div>
                  <div>
                    <h6 >
                      {gallery.attributes.title}
                    </h6>
                    <p class="card-text">{gallery.attributes.description}</p>
                    <p><small>Images : {gallery.attributes.images.data.length}</small></p>
                   
                  </div>
                </article>
              );
            })}
        </div>
      </div>
      <div className="col-md-4   ">
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Thematic Areas</span>
          </h4>
        </div>
        <div className="d-flex flex-column gap-3  " style={{ height: "100vh" }}>
          {data.Categories.data.map((category) => {
            return (
              <Link href={`/thematicarea/` + category.attributes.slug} key={category.attributes.id}>
                <div
                  className=" d-flex justify-content-left "
                
                >
                  <h6 className="align-self-center text-dark">
                    {category.attributes.title}
                  </h6>
                </div>
              </Link>
            );
          })}
        </div>
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
      <AlbumModal
        show={modalShow}
        onHide={() => setmodalShow(false)}
        data={showGallery}
      />
    </div>
  );
};

export async function getServerSideProps() {
  //fetching Gallery
  // const galleriesres = await fetch(
  //   `${API_URL}/api/galleries?populate=*&sort=createdAt:desc`
  // );
  // const Galleries = await galleriesres.json();

  //fetching GalleryCategories
  const categoriesres = await fetch(
    `${API_URL}/api/categories?populate=*&sort=createdAt:desc`
  );
  const Categories = await categoriesres.json();
  console.log("cat", Categories);
  return {
    props: {
      data: {
        Categories,
      },
    },
  };
}
export default Albums;






{/* */}