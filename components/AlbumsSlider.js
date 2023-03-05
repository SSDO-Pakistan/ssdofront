import React, { useState } from "react";
import { API_URL } from "@/config/index";
import AlbumModal from "./AlbumModal";
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
const AlbumsSlider = ({ Galleries }) => {
  const responsive={
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }
  const [showGallery, setshowGallery] = useState({});
  const [modalShow, setmodalShow] = useState(false);
  return (
    <div className="col-12 mb-4 ">
      <div className="block-area p-4 border bg-light-black">
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Albums</span>
          </h4>
        </div>
        <Carousel
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
         
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {Galleries.data.map((gallery) => {
            return (
              <div className="card" 
                onClick={() => {
                  setshowGallery(gallery);
                  setmodalShow(true);
                }}
                key={gallery.id}
              >
                <Image
                  width={400}
                  height={300} 
                  src={
                    gallery.attributes.images.data[0].attributes.url
                  }
                  data-src="../../assets/img/400x340/img1.jpg"
                  alt="Image description"
                />
              </div>
            );
          })}
        </Carousel>
        <AlbumModal
          show={modalShow}
          onHide={() => setmodalShow(false)}
          data={showGallery}
        />
      </div>
      <p
        style={{
          textAlign: "right",
          color: "blue",
          cursor: "pointer",
        }}
      >
        <Link href="/gallery">view more</Link>
      </p>
    </div>

  );
};

export default AlbumsSlider;
