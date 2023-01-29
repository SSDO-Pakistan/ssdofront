import React from "react";
import { API_URL } from "./../config/index";
import moment from "moment";
import Image from 'next/image'
import Link from "next/link";
const Highlights = ({ Highlights }) => {
  console.log("Highlights", Highlights);
  return (
    <div className="col-md-8">
      <div className="block-area">
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Highligths</span>
          </h4>
        </div>
        <div className="border-bottom-last-0 first-pt-0">
          {Highlights.data.map((highlight) => {
            return (
              <article className="card card-full hover-a py-4" key={highlight.id}>
                <div className="row">
                  <div className="col-sm-6 col-md-12 col-lg-6">
                    <div className="">
                      <Image
                       width={360}
                       height={202}
                        className="img-fluid"
                        src={ highlight.attributes.image.data.url}
                        data-src="../../assets/img/360x202/img17.jpg"
                        alt="Image description"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-12 col-lg-6">
                    <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                      <h3 className="card-title h2 h3-sm h2-md">
                        {highlight.attributes.title}
                      </h3>
                      <div className="card-text mb-2 text-muted small">
                        {/* <span className="d-none d-sm-inline me-1">
                              <a className="fw-bold" href="#">
                                John Doe
                              </a>
                            </span> */}
                        <time dateTime="2019-10-21">
                          {moment(highlight.attributes.createdAt).format(
                            "Do MMMM YYYY"
                          )}
                        </time>
                      </div>
                      <p className="card-text">
                        {highlight.attributes.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
          {/* <article className="card card-full hover-a py-4">
            <div className="row">
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div className="ratio_360-202 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="https://static.wixstatic.com/media/5668b5_8acff813ba7a4beba43b1383ae8b5ab9~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_8acff813ba7a4beba43b1383ae8b5ab9~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfOGFjZmY4MTNiYTdhNGJlYmE0M2IxMzgzYWU4YjVhYjl-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.sKV6WLzLotopxSEIB52JVS1mCW_gxzOrPW3xchODKa4"
                      data-src="../../assets/img/360x202/img17.jpg"
                      alt="Image description"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                  <h3 className="card-title h2 h3-sm h2-md">
                    <a href="#">
                      Apple's stock rout starts and ends with the iPhone
                    </a>
                  </h3>
                  <div className="card-text mb-2 text-muted small">
                    <span className="d-none d-sm-inline me-1">
                      <a className="fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time dateTime="2019-10-21">Oct 21, 2019</time>
                  </div>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. A small river flows by their
                    place and ...
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="card card-full hover-a py-4">
            <div className="row">
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div className="ratio_360-202 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid "
                      src="https://static.wixstatic.com/media/5668b5_99a168225fb24e178334d09cba608386~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_99a168225fb24e178334d09cba608386~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfOTlhMTY4MjI1ZmIyNGUxNzgzMzRkMDljYmE2MDgzODZ-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.O1JL8tuNp_PCrxvwx7PywP0LSAbD8Y-pxmYyxzexNnU"
                      data-src="../../assets/img/360x202/img18.jpg"
                      alt="Image description"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                  <h3 className="card-title h2 h3-sm h2-md">
                    <a href="#">
                      Want the best Black Friday deals? Head to a department
                      store
                    </a>
                  </h3>
                  <div className="card-text mb-2 text-muted small">
                    <span className="d-none d-sm-inline me-1">
                      <a className="fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time dateTime="2019-10-21">Oct 21, 2019</time>
                  </div>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. A small river flows by their
                    place and ...
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="card card-full hover-a py-4">
            <div className="row">
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div className="ratio_360-202 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid "
                      src="https://static.wixstatic.com/media/5668b5_97d34f596b2c4048b2f169a664644120~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_97d34f596b2c4048b2f169a664644120~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfOTdkMzRmNTk2YjJjNDA0OGIyZjE2OWE2NjQ2NDQxMjB-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.fXDGj7iGgUAbgnOOA0bSXerjS6oNUyDJmJlO8F_OL0M"
                      data-src="../../assets/img/360x202/img14.jpg"
                      alt="Image description"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                  <h3 className="card-title h2 h3-sm h2-md">
                    <a href="#">
                      5 Tips to Save Money Booking Your Next Hotel Room
                    </a>
                  </h3>
                  <div className="card-text mb-2 text-muted small">
                    <span className="d-none d-sm-inline me-1">
                      <a className="fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time dateTime="2019-10-21">Oct 21, 2019</time>
                  </div>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. A small river flows by their
                    place and ...
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="card card-full hover-a py-4">
            <div className="row">
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div className="ratio_360-202 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid "
                      src="https://static.wixstatic.com/media/5668b5_4f50b54eccf54ad6acda320e744bf855~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_4f50b54eccf54ad6acda320e744bf855~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfNGY1MGI1NGVjY2Y1NGFkNmFjZGEzMjBlNzQ0YmY4NTV-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.bFy9LgVyWr0QdNqDY21qVKgbfzf61blQnyJecHfVzb0"
                      data-src="../../assets/img/360x202/img15.jpg"
                      alt="Image description"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                  <h3 className="card-title h2 h3-sm h2-md">
                    <a href="#">
                      Dubai launches pilot for Middle East 'Shark Tank'
                    </a>
                  </h3>
                  <div className="card-text mb-2 text-muted small">
                    <span className="d-none d-sm-inline me-1">
                      <a className="fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time dateTime="2019-10-21">Oct 21, 2019</time>
                  </div>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. A small river flows by their
                    place and ...
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="card card-full hover-a py-4">
            <div className="row">
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div className="ratio_360-202 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid "
                      src="https://static.wixstatic.com/media/5668b5_18d863a44ce8411b898d88614675367c~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_18d863a44ce8411b898d88614675367c~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfMThkODYzYTQ0Y2U4NDExYjg5OGQ4ODYxNDY3NTM2N2N-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.UvGzIAkT9Yg44OQrCBvIeChBD9_R046yWNBu-qj-jFY"
                      data-src="../../assets/img/360x202/img16.jpg"
                      alt="Image description"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                  <h3 className="card-title h2 h3-sm h2-md">
                    <a href="#">
                      The pioneering and popular compact Range Rover Evoque gets
                      a major makeover
                    </a>
                  </h3>
                  <div className="card-text mb-2 text-muted small">
                    <span className="d-none d-sm-inline me-1">
                      <a className="fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time dateTime="2019-10-21">Oct 21, 2019</time>
                  </div>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. A small river flows by their
                    place and ...
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="card card-full hover-a py-4">
            <div className="row">
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div className="ratio_360-202 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid "
                      src="https://static.wixstatic.com/media/5668b5_84bdf32bae754f88b229be2667d6f812~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_84bdf32bae754f88b229be2667d6f812~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfODRiZGYzMmJhZTc1NGY4OGIyMjliZTI2NjdkNmY4MTJ-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.WLcAOlx2nCvs1dX88VBCUWeXKcgUNrDk5ZCdVrLlrhk"
                      data-src="../../assets/img/360x202/img19.jpg"
                      alt="Image description"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                  <h3 className="card-title h2 h3-sm h2-md">
                    <a href="#">
                      European markets fight back to close higher; oil in focus
                    </a>
                  </h3>
                  <div className="card-text mb-2 text-muted small">
                    <span className="d-none d-sm-inline me-1">
                      <a className="fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time dateTime="2019-10-21">Oct 21, 2019</time>
                  </div>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. A small river flows by their
                    place and ...
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="card card-full hover-a py-4">
            <div className="row">
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div className="ratio_360-202 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid "
                      src="https://static.wixstatic.com/media/5668b5_df125aefa8814f6aae4de3026dd1c64e~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_df125aefa8814f6aae4de3026dd1c64e~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfZGYxMjVhZWZhODgxNGY2YWFlNGRlMzAyNmRkMWM2NGV-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.-Nc6x4k-vEzY6d1LkJPjQwWdVWaOWREAqyQ-YnVFFyk"
                      data-src="../../assets/img/360x202/img5.jpg"
                      alt="Image description"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                  <h3 className="card-title h2 h3-sm h2-md">
                    <a href="#">MotoGP: Which team needs what in 2019?</a>
                  </h3>
                  <div className="card-text mb-2 text-muted small">
                    <span className="d-none d-sm-inline me-1">
                      <a className="fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time dateTime="2019-10-21">Oct 21, 2019</time>
                  </div>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. A small river flows by their
                    place and ...
                  </p>
                </div>
              </div>
            </div>
          </article> */}
        </div>
        <Link href="/highlights">
          <p
            style={{
              textAlign: "right",
              color: "blue",
              cursor: "pointer",
            }}
          >
            view more
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Highlights;
