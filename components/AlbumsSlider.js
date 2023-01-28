import React, { useState } from "react";
import { API_URL } from "@/config/index";
import AlbumModal from "./AlbumModal";
import Link from "next/link";
import Image from "next/image";
const AlbumsSlider = ({ Galleries }) => {
  console.log("Galleries", Galleries);
  const [showGallery, setshowGallery] = useState({});
  console.log(showGallery);
  const [modalShow, setmodalShow] = useState(false);
  return (
    <div className="col-12 mb-4 ">
      <div className="block-area p-4 border bg-light-black">
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Albums</span>
          </h4>
        </div>

        <div
          className="nav-slider-hover nav-dots-top-right light-dots"
          data-flickity='{ "cellAlign": "left", "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'
        >
          {Galleries.data.map((gallery) => {
            return (
              <article
                className="col-12 col-sm-6 col-lg-4 me-2 "
                onClick={() => {
                  setshowGallery(gallery);
                  setmodalShow(true);
                }}
                key={gallery.id}
              >
                <div className="col-12 mb-4 ">
                  <div className="card card-full hover-a ">
                    <div className="ratio_327-278 image-wrapper">
                      <Image
                        width= {400}
                        height ={340}
                        className="img-fluid "
                        src={
                        
                          gallery.attributes.images.data[0].attributes.url
                        }
                        data-src="../../assets/img/400x340/img1.jpg"
                        alt="Image description"
                      />

                      <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                        <h4 className="h3 h4-sm h3-md card-title text-white">
                          {gallery.attributes.title}
                        </h4>
                        {gallery.attributes.category && (
                          <div className="small text-white position-absolute bottom-0 start-2">
                            <p className="mb-0" style={{ color: "black" }}>
                              {
                                gallery.attributes.category.data.attributes
                                  .title
                              }
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
          <AlbumModal
            show={modalShow}
            onHide={() => setmodalShow(false)}
            data={showGallery}
          />
          {/* <article className="col-12 col-sm-6 col-lg-4 me-2">
            <div className="col-12 mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid "
                      src="https://static.wixstatic.com/media/5668b5_2995db9abd2a44818a11d14300fda904~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_2995db9abd2a44818a11d14300fda904~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfMjk5NWRiOWFiZDJhNDQ4MThhMTFkMTQzMDBmZGE5MDR-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.S51z-LLdU_U1CbCuyCXpcFyE_qdd1NyJCrJgjQouFIc"
                      data-src="../uploads/slider_1.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                    <h4 className="h3 h4-sm h3-md card-title">
                      <a className="text-white" href="#">
                        Formation of Youth Network of
                      </a>
                    </h4>
                    <div className="small text-light">
                      <time dateTime="2019-10-18">Oct 18, 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="col-12 col-sm-6 col-lg-4 me-2">
            <div className="col-12 mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid "
                      src="https://static.wixstatic.com/media/5668b5_084f1d4954694ade9879bf5f6c0dd39a~mv2.jpg/v1/fill/w_500,h_317,al_c,q_80,usm_0.66_1.00_0.01/5668b5_084f1d4954694ade9879bf5f6c0dd39a~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfMDg0ZjFkNDk1NDY5NGFkZTk4NzliZjVmNmMwZGQzOWF-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.jO7zm0CDZYIOKgPSBPnrBW_nJGDK3_Gt_irnxvFZUv4"
                      data-src="../../assets/img/400x340/img3.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                    <h4 className="h3 h4-sm h3-md card-title">
                      <a className="text-white" href="#">
                        Monthly Planning and Review Meeting
                      </a>
                    </h4>
                    <div className="small text-light">
                      <time dateTime="2019-10-18">Oct 18, 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="col-12 col-sm-6 col-lg-4 me-2">
            <div className="col-12 mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid "
                      src="https://static.wixstatic.com/media/5668b5_673fbb2a33f24e0aac2e4e9a44255cf0~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_673fbb2a33f24e0aac2e4e9a44255cf0~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfNjczZmJiMmEzM2YyNGUwYWFjMmU0ZTlhNDQyNTVjZjB-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.cBknKLIKY-A2E5OzB5QxzuYhcZxmmoiyi8MOfIQyE3I"
                      data-src="../../assets/img/400x340/img4.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                    <h4 className="h3 h4-sm h3-md card-title">
                      <a className="text-white" href="#">
                        Youth Network Meeting Multan
                      </a>
                    </h4>
                    <div className="small text-light">
                      <time dateTime="2019-10-18">Oct 18, 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="col-12 col-sm-6 col-lg-4 me-2">
            <div className="col-12 mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid "
                      src="https://static.wixstatic.com/media/5668b5_20c17785ecfb4d31943f1f0b3bf72527~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_20c17785ecfb4d31943f1f0b3bf72527~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfMjBjMTc3ODVlY2ZiNGQzMTk0M2YxZjBiM2JmNzI1Mjd-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.sYREzcOQmJKZokDk_37AseItoOrZ5PFFWwdHwvYkTq4"
                      data-src="../../assets/img/400x340/img5.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                    <h4 className="h3 h4-sm h3-md card-title">
                      <a className="text-white" href="#">
                        Youth Network Meeting Khanewal
                      </a>
                    </h4>
                    <div className="small text-light">
                      <time dateTime="2019-10-18">Oct 18, 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article> */}
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
    </div>
  );
};

export default AlbumsSlider;
