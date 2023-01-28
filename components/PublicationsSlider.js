import React from "react";
import PublicationModal from "./PublicationModal";
import { useState } from "react";
import { API_URL } from "./../config/index";
import Image from 'next/image'
import Link from "next/link";

const PublicationsSlider = ({ Publications }) => {
  const [modalShow, setmodalShow] = useState(false);
  return (
    <div className="col-12 mb-4  ">
      <div className="block-area p-4 border bg-light-black">
        <div className="block-title-13">
          <h4 className="h5 title-box-dot">
            <span>
              <strong>Latest Reports</strong>
            </span>
          </h4>
          <div className="dot-line"></div>
        </div>
        <div
          className="nav-slider-hover nav-dots-top-right light-dots"
          data-flickity='{ "cellAlign": "left", "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'
        >
          {Publications &&
            Publications.data.map((publication) => {
              console.log(publication);
              return (
                <article
                  className="col-12 col-sm-6 col-lg-4 me-2" key={publication.id}
                  onClick={() => {
                    setmodalShow(true);
                  }}
                >
                  <div className="col-12 mb-4">
                    <div className="card card-full hover-a">
                      <div className="ratio_327-278 image-wrapper">
                        <a href="#">
                          <Image
                          width = {400}
                          height={340}
                            src={
                           
                              publication.attributes.cover.data.attributes.url
                            }
                            data-src="../../assets/img/400x340/img1.jpg"
                            alt="Image description"
                          />
                        </a>

                        <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                          <h4 className="h3 h4-sm h3-md card-title"></h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

          <PublicationModal
            show={modalShow}
            onHide={() => setmodalShow(false)}
            data={Publications}
          />
        </div>

        <p
          style={{
            textAlign: "right",
            color: "blue",
            cursor: "pointer",
          }}
        >
          <Link href="/publications">view more</Link>
        </p>
      </div>
    </div>
  );
};

export default PublicationsSlider;
