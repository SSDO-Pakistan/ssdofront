import React, { useState, useCallback,useEffect } from "react";
import ReactPaginate from "react-paginate";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
function Photos() {

  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);
  let limit = 20;

  useEffect(() => {
    const getMedia = async () => {
      const res = await fetch(
        `https://strapi-production-9f68.up.railway.app/api/media-clipings?populate=*&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=${limit}`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      console.log(data)
      const total = data.meta.pagination.total;
      let mydata = new Array;
      data.data?.map((clip) => {
                  mydata.push( {"src":clip.attributes.image.data.attributes.url,
                 "srcSet": clip.attributes.image.data.attributes.formats.small.url
                   ,
                  "sizes": ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
                  "width":clip.attributes.image.data.attributes.width,
                  "height":clip.attributes.image.data.attributes.height});
              });
   
      setpageCount(Math.ceil(total / limit));
   
      setItems(mydata);
    };

     getMedia();
  }, [limit]);
  


  const fetchMedia = async (currentPage) => {
    const res = await fetch(
      //`http://localhost:3004/comments?_page=${currentPage}&_limit=${limit}`
      `https://strapi-production-9f68.up.railway.app/api/media-clipings?populate=*&sort=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
    );
    const data = await res.json();
    let mydata = new Array;
    data.data?.map((clip) => {
                mydata.push( {"src":clip.attributes.image.data.attributes.url,
                 "srcSet": clip.attributes.image.data.attributes.formats.small.url,        
                 "sizes": ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
                "width":clip.attributes.image.data.attributes.width,
                "height":clip.attributes.image.data.attributes.height});
            });
      return mydata;
  };
  const handlePageClick = async (data) => {
    

    let currentPage = data.selected + 1;
    console.log(currentPage);
    const mediaClips = await fetchMedia(currentPage);

    setItems(mediaClips);
    // scroll to the top
    //window.scrollTo(0, 0)
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div className="row p-4 mt-20">
    <div className="col-sm-12">
      <div className="block-title-6 text-center">
        <h4 className="h5 border-primary">
          <span className="bg-primary text-white">Media Clippings</span>
        </h4>
      </div>
      <Gallery photos={items} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={items.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
              <br></br>
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
    </div>

  );
}
export default Photos
// export async function getStaticProps() {
//     const res = await
// fetch('https://strapi-production-9f68.up.railway.app/api/media-clipings?populate=*&sort=createdAt:desc&pagination[start]=1&pagination[limit]=10')

//     const photos = await res.json()
//     const total = photos.meta.pagination.total;
//     let mydata = new Array;
//     photos.data?.map((clip) => {
//                 mydata.push( {"src":clip.attributes.image.data.attributes.url,
//                 "width":clip.attributes.image.data.attributes.width,
//                 "height":clip.attributes.image.data.attributes.height});
//             });
//     return {
//       props: {
//         mydata,
//         total
//       },
//       // Next.js will attempt to re-generate the page:
//       // - When a request comes in
//       // - At most once every 10 seconds
//       revalidate: 10, // In seconds
//     }
//   }