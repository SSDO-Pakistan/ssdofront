import React from "react";
import Link from "next/link";
function MainNav(props){
    return (
<div
id="showbacktop"
className="showbacktop full-nav bg-white border-none border-lg-1 border-bottom shadow-b-sm py-0"
>
<div className="container">
  <nav
    id="main-menu"
    className="main-menu navbar navbar-expand-lg navbar-light px-2 px-lg-0 py-0"
  >
    <div
      id="navbarTogglerDemo1"
      className="collapse navbar-collapse hover-mode"
    >
      <div className="logo-showbacktop">
        <a href="index.html">
          <img
            className="img-fluid"
            src="../../assets/img/logo/default-logo.png"
            alt="Logo site"
          />
        </a>
      </div>

      <ul
        id="start-main"
        className="navbar-nav main-nav navbar-uppercase first-start-lg-0"
      >
        <li className="nav-item dropdown">
          <a
            id="navbarhome"
            className="nav-link active dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="#"
          >
            Home
          </a>

          <ul className="dropdown-menu" aria-labelledby="navbarhome">
            <li>
              <a className="dropdown-item active" href="index.html">
                Homepage - Default
              </a>
            </li>

            {/* <li className="dropdown-submenu">
              <a
                id="hom1"
                className="dropdown-item dropdown-toggle"
                href="#"
              >
                Homepage - New
              </a>

              <ul
                className="submenu dropdown-menu"
                aria-labelledby="hom1"
              >
                <li>
                  <Link href="/albums" className="dropdown-item">
                    Albums
                  </Link>
                </li>

                <li>
                  <a className="dropdown-item" href="flatter.html">
                    Flatter
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="food.html">
                    Food
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="football.html">
                    Football
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="home-design.html"
                  >
                    Home design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="lifestyle.html">
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="personal-blog.html"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pet-blog.html">
                    Pet blog
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="travel-blog.html"
                  >
                    Travel blog
                  </a>
                </li>
              </ul>
            </li> */}
            <li>
              <a className="dropdown-item" href="index-boxed.html">
                Homepage - Boxed
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="index-big-grid.html">
                Homepage - Big Grid
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="index-colorfull.html"
              >
                Homepage - Colorfull
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="index-blogging.html">
                Homepage - Blogging
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="index-two.html">
                Homepage - Layout Two
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="index-three.html">
                Homepage - Layout Three
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="index-four.html">
                Homepage - Layout Four
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="index-five.html">
                Homepage - Layout Five
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="index-video.html">
                Homepage - Video
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="../rtl/index.html">
                Homepage - RTL Arabic
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link href="/albums" className="nav-link">
            Albums
          </Link>
        </li>

        <li className="nav-item mega-dropdown dropdown">
          <a
            id="navbarmega2"
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="#"
          >
            Mega
          </a>
          <div
            id="vertical-tabs"
            className="dropdown-menu mega w-100 px-3 py-0"
            aria-labelledby="navbarmega2"
          >
            <div className="row mega-hovers">
              <div className="col-sm-3 col-md-2 vertical-tabs hover-tabs px-0 border-end-sm">
                <ul
                  className="nav nav-tabs text-center py-4 border-start-0 border-end-0 w-100"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      id="nav-one"
                      className="nav-link fw-normal active"
                      href="#mega-one"
                      role="tab"
                      data-bs-toggle="tab"
                      aria-controls="mega-one"
                      aria-selected="true"
                    >
                      Business
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="nav-two"
                      className="nav-link fw-normal"
                      href="#mega-two"
                      role="tab"
                      data-bs-toggle="tab"
                      aria-controls="mega-two"
                      aria-selected="false"
                    >
                      Travel
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="nav-three"
                      className="nav-link fw-normal"
                      href="#mega-three"
                      role="tab"
                      data-bs-toggle="tab"
                      aria-controls="mega-three"
                      aria-selected="false"
                    >
                      Sports
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="nav-four"
                      className="nav-link fw-normal"
                      href="#mega-four"
                      role="tab"
                      data-bs-toggle="tab"
                      aria-controls="mega-three"
                      aria-selected="false"
                    >
                      Fashion
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-9 col-md-10 p-4">
                <div id="mega-tabs" className="tab-content">
                  <div
                    id="mega-one"
                    className="tab-pane active show"
                    role="tabpanel"
                    aria-labelledby="nav-one"
                  >
                    <div className="row">
                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img1.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                Apple's stock rout starts and ends
                                with the iPhone
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img2.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                Want the best Black Friday deals? Head
                                to a store
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img3.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                Dubai launches pilot for Middle East
                                'Shark Tank'
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img4.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                European markets fight back to close
                                higher; oil in focus
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>

                  <div
                    id="mega-two"
                    className="tab-pane"
                    role="tabpanel"
                    aria-labelledby="nav-two"
                  >
                    <div className="row">
                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img5.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                Meet New Orleans’s All-Female Biker
                                Club
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img6.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                Nascar’s Future Depends on These
                                5-Year-Olds
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img7.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                A Village in India Where Clean Living
                                Became a Attraction
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img8.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                The N.Y.C. Parks Commissioner on the
                                Experience of Place
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>

                  <div
                    id="mega-three"
                    className="tab-pane"
                    role="tabpanel"
                    aria-labelledby="nav-three"
                  >
                    <div className="row">
                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img9.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                World and Olympic champion Vonn
                                retires saying 'body is broken'
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img10.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                Barcelona to play Real in Copa del Rey
                                semi-final
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img11.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                GB's Bankes wins snowboard cross
                                silver at World Champs
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img12.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                Laugher & Goodfellow secure gold in
                                first competition as a pair
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>

                  <div
                    id="mega-four"
                    className="tab-pane"
                    role="tabpanel"
                    aria-labelledby="nav-four"
                  >
                    <div className="row">
                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img13.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                If Only Her Voice Could Change the Way
                                the Mets Play
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img14.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                Finding Empowerment in Two Wheels and
                                a Helmet
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img15.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                Fans celebrate in Paris after side
                                reaches World Cup final
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="col-6 col-lg-3">
                        <div className="card card-full hover-a mb-4">
                          <div className="ratio_203-114 image-wrapper">
                            <a href="../post/single1.html">
                              <img
                                className="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/203x114/img16.jpg"
                                alt="Image description"
                              />
                            </a>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title h6">
                              <a href="../post/single1.html">
                                Why Is MoviePass Losing So Much Money?
                              </a>
                            </h3>
                            <div className="card-text text-muted small">
                              <time dateTime="2019-10-22">
                                Oct 22, 2019
                              </time>
                              <span
                                title="12 comment"
                                className="float-end"
                              >
                                <span className="icon-comments"></span>{" "}
                                12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="nav-item mega-dropdown dropdown">
          <a
            id="navbarmega3"
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="#"
          >
            Video
          </a>
          <div
            className="dropdown-menu mega w-100 p-4"
            aria-labelledby="navbarmega3"
          >
            <div className="row">
              <article className="col-6 col-lg-3">
                <div className="card card-full hover-a mb-4">
                  <div className="ratio_251-141 image-wrapper">
                    <a href="../post/single6.html">
                      <img
                        className="img-fluid lazy"
                        src="../../assets/img/assets/lazy-empty.png"
                        data-src="../../assets/img/251x141/img1.jpg"
                        alt="Image description"
                      />
                      <div className="post-type-icon">
                        <span className="fa-stack-sea text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-play-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                          </svg>
                        </span>
                      </div>
                    </a>
                    <a
                      className="position-absolute m-2 t-0 p-1 badge bg-primary text-white"
                      href="../category/category.html"
                    >
                      Fashion
                    </a>
                  </div>

                  <div className="card-body">
                    <h3 className="card-title h6">
                      <a href="../post/single6.html">
                        Why Sitting May Be Bad for Your Brain Health
                      </a>
                    </h3>
                    <div className="card-text text-muted small">
                      <time dateTime="2019-10-22">Oct 22, 2019</time>
                      <span title="12 comment" className="float-end">
                        <span className="icon-comments"></span> 12
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="col-6 col-lg-3">
                <div className="card card-full hover-a mb-4">
                  <div className="ratio_360-202 image-wrapper">
                    <a href="../post/single6.html">
                      <img
                        className="img-fluid lazy"
                        src="../../assets/img/assets/lazy-empty.png"
                        data-src="../../assets/img/251x141/img2.jpg"
                        alt="Image description"
                      />
                      <div className="post-type-icon">
                        <span className="fa-stack-sea text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-play-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                          </svg>
                        </span>
                      </div>
                    </a>
                    <a
                      className="position-absolute m-2 t-0 p-1 badge bg-primary text-white"
                      href="../category/category.html"
                    >
                      Life style
                    </a>
                  </div>

                  <div className="card-body">
                    <h3 className="card-title h6">
                      <a href="../post/single6.html">
                        Underappreciated Key to College Success: Sleep
                      </a>
                    </h3>
                    <div className="card-text text-muted small">
                      <time dateTime="2019-10-21">Oct 21, 2019</time>
                      <span title="17 comment" className="float-end">
                        <span className="icon-comments"></span> 17
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="col-6 col-lg-3">
                <div className="card card-full hover-a mb-4">
                  <div className="ratio_360-202 image-wrapper">
                    <a href="../post/single6.html">
                      <img
                        className="img-fluid lazy"
                        src="../../assets/img/assets/lazy-empty.png"
                        data-src="../../assets/img/251x141/img3.jpg"
                        alt="Image description"
                      />
                      <div className="post-type-icon">
                        <span className="fa-stack-sea text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-play-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                          </svg>
                        </span>
                      </div>
                    </a>
                    <a
                      className="position-absolute m-2 t-0 p-1 badge bg-primary text-white"
                      href="../category/category.html"
                    >
                      Fashion
                    </a>
                  </div>

                  <div className="card-body">
                    <h3 className="card-title h6">
                      <a href="../post/single6.html">
                        5 Simple Tips to Help Vegetarian or Vegan
                        Travelers Eat Well, Anywhere
                      </a>
                    </h3>
                    <div className="card-text text-muted small">
                      <time dateTime="2019-10-20">Oct 20, 2019</time>
                      <span title="8 comment" className="float-end">
                        <span className="icon-comments"></span> 8
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="col-6 col-lg-3">
                <div className="card card-full hover-a mb-4">
                  <div className="ratio_360-202 image-wrapper">
                    <a href="../post/single6.html">
                      <img
                        className="img-fluid lazy"
                        src="../../assets/img/assets/lazy-empty.png"
                        data-src="../../assets/img/251x141/img4.jpg"
                        alt="Image description"
                      />
                      <div className="post-type-icon">
                        <span className="fa-stack-sea text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-play-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                          </svg>
                        </span>
                      </div>
                    </a>
                    <a
                      className="position-absolute m-2 t-0 p-1 badge bg-primary text-white"
                      href="../category/category.html"
                    >
                      Jewellery
                    </a>
                  </div>

                  <div className="card-body">
                    <h3 className="card-title h6">
                      <a href="../post/single6.html">
                        Many Voters Tend to Believe Christine Blasey
                        Ford
                      </a>
                    </h3>
                    <div className="card-text text-muted small">
                      <time dateTime="2019-10-19">Oct 19, 2019</time>
                      <span title="13 comment" className="float-end">
                        <span className="icon-comments"></span> 13
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            id="navbarDropdown"
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="#"
          >
            Features
          </a>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdown"
          >
            <li className="dropdown-submenu">
              <a
                id="sub1"
                className="dropdown-item dropdown-toggle"
                href="#"
              >
                Post templates
              </a>

              <ul
                className="submenu dropdown-menu"
                aria-labelledby="sub1"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="../post/single1.html"
                  >
                    Post style 1
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../post/single2.html"
                  >
                    Post style 2
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../post/single3.html"
                  >
                    Post style 3
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../post/single4.html"
                  >
                    Post style 4
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../post/single5.html"
                  >
                    Post style 5
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../post/single6.html"
                  >
                    Post style 6
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../post/single7.html"
                  >
                    Post style 7
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <a
                id="sub2"
                className="dropdown-item dropdown-toggle"
                href="#"
              >
                Category
              </a>

              <ul
                className="submenu dropdown-menu"
                aria-labelledby="sub2"
              >
                <li className="dropdown-submenu">
                  <a
                    id="sub350"
                    className="dropdown-item dropdown-toggle"
                    href="#"
                  >
                    Category module
                  </a>

                  <ul
                    className="submenu dropdown-menu"
                    aria-labelledby="sub350"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="../category/category.html"
                      >
                        Category Style 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../category/category2.html"
                      >
                        Category Style 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../category/category3.html"
                      >
                        Category Style 3
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../category/category4.html"
                      >
                        Category Style 4
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../category/category5.html"
                      >
                        Category Style 5
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../category/category6.html"
                      >
                        Category Style 6
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../category/category7.html"
                      >
                        Category Style 7
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../category/search.html"
                  >
                    Search result
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../category/search-none.html"
                  >
                    Search none
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../category/tags.html"
                  >
                    Tags
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../category/author.html"
                  >
                    Author
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../category/archive.html"
                  >
                    Archive
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <a
                id="sub3"
                className="dropdown-item dropdown-toggle"
                href="#"
              >
                Content Block
              </a>

              <ul
                className="submenu dropdown-menu"
                aria-labelledby="sub3"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/block/block-title.html"
                  >
                    15 Block title
                  </a>
                </li>
                <li className="dropdown-submenu">
                  <a
                    id="sub35"
                    className="dropdown-item dropdown-toggle"
                    href="#"
                  >
                    Big Grid
                  </a>

                  <ul
                    className="submenu dropdown-menu"
                    aria-labelledby="sub35"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="../../snippets/block/big-grid-cover.html"
                      >
                        10 Big Grid
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../../snippets/block/big-grid-slider.html"
                      >
                        6 Big Grid Slider
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/block/news-ticker.html"
                  >
                    News Ticker
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/block/tabs-news.html"
                  >
                    Tabs News
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <a
                id="sub4"
                className="dropdown-item dropdown-toggle"
                href="#"
              >
                Features
              </a>

              <ul
                className="submenu dropdown-menu"
                aria-labelledby="sub4"
              >
                <li className="dropdown-submenu">
                  <a
                    id="sub41"
                    className="dropdown-item dropdown-toggle"
                    href="#"
                  >
                    Review Post
                  </a>

                  <ul
                    className="submenu dropdown-menu"
                    aria-labelledby="sub41"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="../../snippets/review/point-review.html#review"
                      >
                        Point Review
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../../snippets/review/percent-review.html#review"
                      >
                        Percent Review
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../../snippets/review/star-review.html#review"
                      >
                        Star Review
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a
                    id="sub42"
                    className="dropdown-item dropdown-toggle"
                    href="#"
                  >
                    Widget
                  </a>

                  <ul
                    className="submenu dropdown-menu"
                    aria-labelledby="sub42"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="../../snippets/widget/social.html"
                      >
                        Social icon
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../../snippets/widget/address.html"
                      >
                        Address info
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../../snippets/widget/profile.html"
                      >
                        Author profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../../snippets/widget/subcribe.html"
                      >
                        Subcribe form
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../../snippets/widget/instagram.html"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../../snippets/widget/weather.html"
                      >
                        Weather
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../../snippets/widget/timeline.html"
                      >
                        Timeline post
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../../snippets/widget/more.html"
                      >
                        More widget
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/features/video-background.html"
                  >
                    Video Background
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/features/youtube-playlist.html"
                  >
                    Youtube Playlist
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/features/sticky.html"
                  >
                    Sticky
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <a
                id="sub5"
                className="dropdown-item dropdown-toggle"
                href="#"
              >
                Pages
              </a>

              <ul
                className="submenu dropdown-menu"
                aria-labelledby="sub5"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="../pages/404.html"
                  >
                    404
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../pages/about-us.html"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../pages/advertisement.html"
                  >
                    Advertisement
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../pages/contact-us.html"
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../pages/term-of-use.html"
                  >
                    Term of use
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../pages/privacy-policy.html"
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <a
                id="sub6"
                className="dropdown-item dropdown-toggle"
                href="#"
              >
                User
              </a>

              <ul
                className="submenu dropdown-menu shadow-lrb-lg"
                aria-labelledby="sub6"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="../user/login.html"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../user/register.html"
                  >
                    Register
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../user/forgot-password.html"
                  >
                    Forgot password
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../user/dashboard.html"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../user/messages2.html"
                  >
                    Messages
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../user/profile.html"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../user/post.html"
                  >
                    Post list
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../user/favorite.html"
                  >
                    Favorite
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../user/setting.html"
                  >
                    Edit profile
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <a
                id="sub7"
                className="dropdown-item dropdown-toggle"
                href="#"
              >
                Header style
              </a>

              <ul
                className="submenu dropdown-menu"
                aria-labelledby="sub7"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/header/header-1.html"
                  >
                    Header 1
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/header/header-2.html"
                  >
                    Header 2
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/header/header-3.html"
                  >
                    Header 3
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/header/header-4.html"
                  >
                    Header 4
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/header/header-5.html"
                  >
                    Header 5
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/header/header-6.html"
                  >
                    Header 6
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/header/header-7.html"
                  >
                    Header 7
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/header/header-8.html"
                  >
                    Header 8
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <a
                id="sub8"
                className="dropdown-item dropdown-toggle"
                href="#"
              >
                Footer style
              </a>

              <ul
                className="submenu dropdown-menu"
                aria-labelledby="sub8"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/footer/footer-1.html#footer"
                  >
                    Footer 1
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/footer/footer-2.html#footer"
                  >
                    Footer 2
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/footer/footer-3.html#footer"
                  >
                    Footer 3
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/footer/footer-4.html#footer"
                  >
                    Footer 4
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/footer/footer-5.html#footer"
                  >
                    Footer 5
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/footer/footer-6.html#footer"
                  >
                    Footer 6
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <a
                id="sub85"
                className="dropdown-item dropdown-toggle"
                href="#"
              >
                Sidebar
              </a>

              <ul
                className="submenu dropdown-menu"
                aria-labelledby="sub85"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="../post/left-sidebar.html"
                  >
                    Left Sidebar
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../post/no-sidebar.html"
                  >
                    No Sidebar
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../post/single1.html"
                  >
                    Right Sidebar
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <a
                id="sub9"
                className="dropdown-item dropdown-toggle"
                href="#"
              >
                Shortcodes
              </a>

              <ul
                className="submenu dropdown-menu"
                aria-labelledby="sub9"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/post/blockquote.html"
                  >
                    Blockquote
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/post/dropcaps.html"
                  >
                    Dropcaps
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/post/typology.html"
                  >
                    Typology
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="../../snippets/post/list.html"
                  >
                    List
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <a
                id="sub10"
                className="dropdown-item dropdown-toggle"
                href="#"
              >
                Submenu
              </a>
              <ul
                className="submenu dropdown-menu"
                aria-labelledby="sub10"
              >
                <li className="dropdown-submenu">
                  <a
                    id="sub10a"
                    className="dropdown-item dropdown-toggle"
                    href="#"
                  >
                    Child Submenu
                  </a>
                  <ul
                    className="submenu dropdown-menu"
                    aria-labelledby="sub10a"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Child Submenu
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Child Submenu
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Child Submenu
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Child Submenu
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Child Submenu
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="nav-item mega-dropdown dropdown">
          <a
            id="navbarmega4"
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="#"
          >
            News Block
          </a>

          <div
            className="dropdown-menu mega w-100 px-3 py-0 fw-normal"
            aria-labelledby="navbarmega4"
          >
            <ul className="row list-unstyled border-end-last-lg-0">
              <li className="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                <h5 className="title-nav">
                  <strong>News Block A</strong>
                </h5>

                <ul className="list-unstyled mega-link">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-1.html"
                    >
                      Block - Layout 1
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-2.html"
                    >
                      Block - Layout 2
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-3.html"
                    >
                      Block - Layout 3
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-4.html"
                    >
                      Block - Layout 4
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-5.html"
                    >
                      Block - Layout 5
                    </a>
                  </li>
                </ul>
              </li>

              <li className="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                <h5 className="title-nav">
                  <strong>News Block B</strong>
                </h5>

                <ul className="list-unstyled mega-link">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-6.html"
                    >
                      Block - Layout 6
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-7.html"
                    >
                      Block - Layout 7
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-8.html"
                    >
                      Block - Layout 8
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-9.html"
                    >
                      Block - Layout 9
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-10.html"
                    >
                      Block - Layout 10
                    </a>
                  </li>
                </ul>
              </li>

              <li className="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                <h5 className="title-nav">
                  <strong>News Block C</strong>
                </h5>

                <ul className="list-unstyled mega-link">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-11.html"
                    >
                      Block - Layout 11
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-12.html"
                    >
                      Block - Layout 12
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-13.html"
                    >
                      Block - Layout 13
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-14.html"
                    >
                      Block - Layout 14
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-15.html"
                    >
                      Block - Layout 15
                    </a>
                  </li>
                </ul>
              </li>

              <li className="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                <h5 className="title-nav">
                  <strong>News Block D</strong>
                </h5>

                <ul className="list-unstyled mega-link">
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-16.html"
                    >
                      Block - Layout 16
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-17.html"
                    >
                      Block - Layout 17
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-18.html"
                    >
                      Block - Layout 18
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-19.html"
                    >
                      Block - Layout 19
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../../snippets/block/block-20.html"
                    >
                      Block - Layout 20
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            id="navbarDropdown1"
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="#"
          >
            More
          </a>

          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdown1"
          >
            <li>
              <a
                className="dropdown-item"
                href="../../docs/index.html"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="../../docs/components/alerts.html"
              >
                Components
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="../../docs/index-wordpress.html"
              >
                Wordpress Version
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="navbar-nav ms-auto d-none d-lg-block">
        <div className="search-box">
          <div className="search-menu no-shadow border-0 py-0">
            <form
              className="form-src form-inline"
              action="../category/search.html"
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control end-0"
                  name="keywords"
                  placeholder="Search..."
                  aria-label="search"
                />
                <span className="icones">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ms-n4"
                    width="1rem"
                    height="1rem"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeMiterLimit: "10",
                        strokeWidth: "32px",
                      }}
                    />
                    <line
                      x1="338.29"
                      y1="338.29"
                      x2="448"
                      y2="448"
                      style={{
                        fill: "none",
                        stroke: "currentColor",
                        strokeMiterLimit: "10",
                        strokeWidth: "32px",
                        strokeLinecap: "round",
                      }}
                    />
                  </svg>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
</div>
    )}
    
export default MainNav;