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
    <>
    <div className="row mt-3 p-3 ">
      <div className="col-md-12">
        <div className="block-title-6  text-center">
          <h4 className="h5 border-primary  mb-5">
            <span className="bg-primary text-white fw-bolder ">Albums</span>
          </h4>
        </div>
        <div className="d-flex flex-row flex-wrap gap-3 h-auto">
          {items &&
            items.data?.map((gallery) => {
              return (
                <div className="card shadow-sm hover-a mb-5 " style={{width: "15rem"}}
                
                  onClick={() => {
                    setshowGallery(gallery);
                    setmodalShow(true);
                  }}
                  key={gallery.attributes.id}>
                  <div className="card-body">
                  <Image
                     width={208}   
                     height={155}
                      src={  
                        gallery.attributes.images.data[0].attributes.formats.thumbnail.url
                      }
                      alt=""
                   
                    /> 
                    <h6 className=" mt-1">
                      {gallery.attributes.title}
                    </h6>
                    <p><small>Images : {gallery.attributes.images.data.length}</small></p>
                   
                  </div>
                </div>
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
     
    </div>
     <AlbumModal
     show={modalShow}
     onHide={() => setmodalShow(false)}
     data={showGallery}
   />
   </>
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