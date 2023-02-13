
import Gallery from "react-photo-gallery";
import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
function Photos(props) {

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
    <div>
     <div>
      <Gallery photos={props.mydata} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={props.mydata.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div> 
    </div>
  );
}
export default Photos
export async function getStaticProps() {
    const res = await fetch('https://strapi-production-9f68.up.railway.app/api/media-clipings?populate=*&sort=createdAt:desc')
    const photos = await res.json()
    let mydata = new Array;
    photos.data?.map((clip,index) => {      
                mydata.push( {"src": clip.attributes.image.data.attributes.url,
                "width":clip.attributes.image.data.attributes.formats?.thumbnail.width,
                "height":clip.attributes.image.data.attributes.formats?.thumbnail.height});
               
            });      
    return {
      props: {
      mydata
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    }
  }