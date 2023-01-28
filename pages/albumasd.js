import React from "react";

const albums = () => {
  return (
    <div>
      {/* header */}
      <header class="header">
        <div class="top-menu bg-white">
          <div class="container">
            <nav class="navbar navbar-expand d-lg-none navbar-light px-0">
              <div
                id="navbar-mobile"
                class="collapse navbar-collapse nav-top-mobile"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="../pages/about-us.html">
                      About Us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../pages/contact-us.html">
                      Contact Us
                    </a>
                  </li>
                </ul>

                <ul class="navbar-nav ms-auto text-center">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        class="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        class="bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="youtube"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        class="bi bi-youtube"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                      </svg>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                        <path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                        <path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                      </svg>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://vimeo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="vimeo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M476.9,114c-5-23.39-17.51-38.78-40.61-46.27s-64.92-4.5-94.12,16.79c-26.79,19.51-46.26,54.42-54,78.28a4,4,0,0,0,5.13,5c10.77-3.8,21.72-7.1,34-6.45,15,.8,24.51,12,24.91,25.29.3,9.79-.2,18.69-3.6,27.68C337.87,243,321,270.78,301.06,295.07a72.49,72.49,0,0,1-10,9.89c-10.21,8.29-18.81,6.1-25.41-5.2-5.4-9.29-9-18.88-12.2-29.08-12.4-39.67-16.81-80.84-23.81-121.52-3.3-19.48-7-39.77-18-56.86-11.6-17.79-28.61-24.58-50-22-14.7,1.8-36.91,17.49-47.81,26.39,0,0-56,46.87-81.82,71.35l21.2,27s17.91-12.49,27.51-18.29c5.7-3.39,12.4-4.09,17.2.2,4.51,3.9,9.61,9,12.31,14.1,5.7,10.69,11.2,21.88,14.7,33.37,13.2,44.27,25.51,88.64,37.81,133.22,6.3,22.78,13.9,44.17,28,63.55,19.31,26.59,39.61,32.68,70.92,21.49,25.41-9.09,46.61-26.18,66-43.87,33.11-30.18,59.12-65.36,85.52-101.14C433.59,270,450.49,242,464.59,210.72,478.5,179.74,484,147.26,476.9,114Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div class="mobile-sticky fs-6 bg-black">
          <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark px-0 py-0">
              <a
                id="showStartPush"
                aria-label="sidebar menu"
                class="navbar-toggler sidebar-menu-trigger side-hamburger border-0 px-0"
                href="javascript:;"
              >
                <span class="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>

              <a href="index.html">
                <img
                  class="mobile-logo img-fluid d-lg-none mx-auto"
                  src="../../assets/img/logo/logo-mobile.png"
                  alt="Logo site"
                />
              </a>

              <button
                class="navbar-toggler px-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo2"
                aria-controls="navbarTogglerDemo2"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
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
              </button>

              <div id="navbarTogglerDemo" class="collapse navbar-collapse">
                <div class="date-area d-none d-lg-block">
                  <time class="navbar-text me-2" datetime="2019-10-28">
                    Monday, Oct 28, 2019
                  </time>
                </div>

                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../pages/about-us.html">
                      About Us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../pages/contact-us.html">
                      Contact Us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                      Buy Now
                    </a>
                  </li>
                </ul>

                <ul class="navbar-nav ms-auto text-center">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        class="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        class="bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="youtube"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        class="bi bi-youtube"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                      </svg>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                        <path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                        <path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                      </svg>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="https://vimeo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="vimeo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M476.9,114c-5-23.39-17.51-38.78-40.61-46.27s-64.92-4.5-94.12,16.79c-26.79,19.51-46.26,54.42-54,78.28a4,4,0,0,0,5.13,5c10.77-3.8,21.72-7.1,34-6.45,15,.8,24.51,12,24.91,25.29.3,9.79-.2,18.69-3.6,27.68C337.87,243,321,270.78,301.06,295.07a72.49,72.49,0,0,1-10,9.89c-10.21,8.29-18.81,6.1-25.41-5.2-5.4-9.29-9-18.88-12.2-29.08-12.4-39.67-16.81-80.84-23.81-121.52-3.3-19.48-7-39.77-18-56.86-11.6-17.79-28.61-24.58-50-22-14.7,1.8-36.91,17.49-47.81,26.39,0,0-56,46.87-81.82,71.35l21.2,27s17.91-12.49,27.51-18.29c5.7-3.39,12.4-4.09,17.2.2,4.51,3.9,9.61,9,12.31,14.1,5.7,10.69,11.2,21.88,14.7,33.37,13.2,44.27,25.51,88.64,37.81,133.22,6.3,22.78,13.9,44.17,28,63.55,19.31,26.59,39.61,32.68,70.92,21.49,25.41-9.09,46.61-26.18,66-43.87,33.11-30.18,59.12-65.36,85.52-101.14C433.59,270,450.49,242,464.59,210.72,478.5,179.74,484,147.26,476.9,114Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div
              class="collapse navbar-collapse col-12 py-2"
              id="navbarTogglerDemo2"
            >
              <form class="form-inline" action="../category/search.html">
                <div class="input-group w-100">
                  <input
                    type="text"
                    class="form-control border border-end-0"
                    placeholder="Search..."
                    aria-label="search"
                  />
                  <button class="btn btn-primary" type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
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
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="second-header">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div
                  id="main-logo"
                  class="main-logo my-2 my-lg-4 d-none d-lg-block"
                >
                  <a class="navbar-brand" href="index.html">
                    <img
                      class="img-fluid"
                      src="../uploads/SSDO_Logo.png"
                      alt="Logo site"
                    />
                  </a>
                </div>
              </div>

              <div class="col-lg-8">
                <div class="my-2 my-md-3 my-lg-4 d-none d-md-block text-center">
                  <a href="#" target="_blank">
                    <img
                      class="img-fluid bg-light"
                      src="../../assets/img/ads/728-demo.png"
                      alt="Advertiser space"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* main menu */}

      <div
        id="showbacktop"
        class="showbacktop full-nav bg-white border-none border-lg-1 border-bottom shadow-b-sm py-0"
      >
        <div class="container">
          <nav
            id="main-menu"
            class="main-menu navbar navbar-expand-lg navbar-light px-2 px-lg-0 py-0"
          >
            <div
              id="navbarTogglerDemo1"
              class="collapse navbar-collapse hover-mode"
            >
              <div class="logo-showbacktop">
                <a href="index.html">
                  <img
                    class="img-fluid"
                    src="../../assets/img/logo/default-logo.png"
                    alt="Logo site"
                  />
                </a>
              </div>

              <ul
                id="start-main"
                class="navbar-nav main-nav navbar-uppercase first-start-lg-0"
              >
                <li class="nav-item dropdown">
                  <a
                    id="navbarhome"
                    class="nav-link active dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                  >
                    Home
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="navbarhome">
                    <li>
                      <a class="dropdown-item active" href="index.html">
                        Homepage - Default
                      </a>
                    </li>

                    <li class="dropdown-submenu">
                      <a
                        id="hom1"
                        class="dropdown-item dropdown-toggle"
                        href="#"
                      >
                        Homepage - New
                      </a>

                      <ul class="submenu dropdown-menu" aria-labelledby="hom1">
                        <li>
                          <a class="dropdown-item" href="business.html">
                            Albums
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="flatter.html">
                            Flatter
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="food.html">
                            Food
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="football.html">
                            Football
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="home-design.html">
                            Home design
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="lifestyle.html">
                            Lifestyle
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="personal-blog.html">
                            Personal
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="pet-blog.html">
                            Pet blog
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="travel-blog.html">
                            Travel blog
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="dropdown-item" href="index-boxed.html">
                        Homepage - Boxed
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="index-big-grid.html">
                        Homepage - Big Grid
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="index-colorfull.html">
                        Homepage - Colorfull
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="index-blogging.html">
                        Homepage - Blogging
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="index-two.html">
                        Homepage - Layout Two
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="index-three.html">
                        Homepage - Layout Three
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="index-four.html">
                        Homepage - Layout Four
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="index-five.html">
                        Homepage - Layout Five
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="index-video.html">
                        Homepage - Video
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="../rtl/index.html">
                        Homepage - RTL Arabic
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="../category/category.html">
                    Business
                  </a>
                </li>

                <li class="nav-item mega-dropdown dropdown">
                  <a
                    id="navbarmega2"
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                  >
                    Mega
                  </a>
                  <div
                    id="vertical-tabs"
                    class="dropdown-menu mega w-100 px-3 py-0"
                    aria-labelledby="navbarmega2"
                  >
                    <div class="row mega-hovers">
                      <div class="col-sm-3 col-md-2 vertical-tabs hover-tabs px-0 border-end-sm">
                        <ul
                          class="nav nav-tabs text-center py-4 border-start-0 border-end-0 w-100"
                          role="tablist"
                        >
                          <li class="nav-item">
                            <a
                              id="nav-one"
                              class="nav-link fw-normal active"
                              href="#mega-one"
                              role="tab"
                              data-bs-toggle="tab"
                              aria-controls="mega-one"
                              aria-selected="true"
                            >
                              Business
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              id="nav-two"
                              class="nav-link fw-normal"
                              href="#mega-two"
                              role="tab"
                              data-bs-toggle="tab"
                              aria-controls="mega-two"
                              aria-selected="false"
                            >
                              Travel
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              id="nav-three"
                              class="nav-link fw-normal"
                              href="#mega-three"
                              role="tab"
                              data-bs-toggle="tab"
                              aria-controls="mega-three"
                              aria-selected="false"
                            >
                              Sports
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              id="nav-four"
                              class="nav-link fw-normal"
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
                      <div class="col-sm-9 col-md-10 p-4">
                        <div id="mega-tabs" class="tab-content">
                          <div
                            id="mega-one"
                            class="tab-pane active show"
                            role="tabpanel"
                            aria-labelledby="nav-one"
                          >
                            <div class="row">
                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img1.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        Apple's stock rout starts and ends with
                                        the iPhone
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>

                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img2.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        Want the best Black Friday deals? Head
                                        to a store
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>

                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img3.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        Dubai launches pilot for Middle East
                                        'Shark Tank'
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>

                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img4.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        European markets fight back to close
                                        higher; oil in focus
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>

                          <div
                            id="mega-two"
                            class="tab-pane"
                            role="tabpanel"
                            aria-labelledby="nav-two"
                          >
                            <div class="row">
                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img5.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        Meet New Orleans’s All-Female Biker Club
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>

                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img6.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        Nascar’s Future Depends on These
                                        5-Year-Olds
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>

                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img7.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        A Village in India Where Clean Living
                                        Became a Attraction
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>

                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img8.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        The N.Y.C. Parks Commissioner on the
                                        Experience of Place
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>

                          <div
                            id="mega-three"
                            class="tab-pane"
                            role="tabpanel"
                            aria-labelledby="nav-three"
                          >
                            <div class="row">
                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img9.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        World and Olympic champion Vonn retires
                                        saying 'body is broken'
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>

                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img10.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        Barcelona to play Real in Copa del Rey
                                        semi-final
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>

                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img11.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        GB's Bankes wins snowboard cross silver
                                        at World Champs
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>

                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img12.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        Laugher & Goodfellow secure gold in
                                        first competition as a pair
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>

                          <div
                            id="mega-four"
                            class="tab-pane"
                            role="tabpanel"
                            aria-labelledby="nav-four"
                          >
                            <div class="row">
                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img13.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        If Only Her Voice Could Change the Way
                                        the Mets Play
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>

                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img14.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        Finding Empowerment in Two Wheels and a
                                        Helmet
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>

                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img15.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        Fans celebrate in Paris after side
                                        reaches World Cup final
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </article>

                              <article class="col-6 col-lg-3">
                                <div class="card card-full hover-a mb-4">
                                  <div class="ratio_203-114 image-wrapper">
                                    <a href="../post/single1.html">
                                      <img
                                        class="img-fluid lazy"
                                        src="../../assets/img/assets/lazy-empty.png"
                                        data-src="../../assets/img/203x114/img16.jpg"
                                        alt="Image description"
                                      />
                                    </a>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title h6">
                                      <a href="../post/single1.html">
                                        Why Is MoviePass Losing So Much Money?
                                      </a>
                                    </h3>
                                    <div class="card-text text-muted small">
                                      <time datetime="2019-10-22">
                                        Oct 22, 2019
                                      </time>
                                      <span
                                        title="12 comment"
                                        class="float-end"
                                      >
                                        <span class="icon-comments"></span> 12
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

                <li class="nav-item mega-dropdown dropdown">
                  <a
                    id="navbarmega3"
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                  >
                    Video
                  </a>
                  <div
                    class="dropdown-menu mega w-100 p-4"
                    aria-labelledby="navbarmega3"
                  >
                    <div class="row">
                      <article class="col-6 col-lg-3">
                        <div class="card card-full hover-a mb-4">
                          <div class="ratio_251-141 image-wrapper">
                            <a href="../post/single6.html">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/251x141/img1.jpg"
                                alt="Image description"
                              />
                              <div class="post-type-icon">
                                <span class="fa-stack-sea text-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                  </svg>
                                </span>
                              </div>
                            </a>
                            <a
                              class="position-absolute m-2 t-0 p-1 badge bg-primary text-white"
                              href="../category/category.html"
                            >
                              Fashion
                            </a>
                          </div>

                          <div class="card-body">
                            <h3 class="card-title h6">
                              <a href="../post/single6.html">
                                Why Sitting May Be Bad for Your Brain Health
                              </a>
                            </h3>
                            <div class="card-text text-muted small">
                              <time datetime="2019-10-22">Oct 22, 2019</time>
                              <span title="12 comment" class="float-end">
                                <span class="icon-comments"></span> 12
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article class="col-6 col-lg-3">
                        <div class="card card-full hover-a mb-4">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="../post/single6.html">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/251x141/img2.jpg"
                                alt="Image description"
                              />
                              <div class="post-type-icon">
                                <span class="fa-stack-sea text-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                  </svg>
                                </span>
                              </div>
                            </a>
                            <a
                              class="position-absolute m-2 t-0 p-1 badge bg-primary text-white"
                              href="../category/category.html"
                            >
                              Life style
                            </a>
                          </div>

                          <div class="card-body">
                            <h3 class="card-title h6">
                              <a href="../post/single6.html">
                                Underappreciated Key to College Success: Sleep
                              </a>
                            </h3>
                            <div class="card-text text-muted small">
                              <time datetime="2019-10-21">Oct 21, 2019</time>
                              <span title="17 comment" class="float-end">
                                <span class="icon-comments"></span> 17
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article class="col-6 col-lg-3">
                        <div class="card card-full hover-a mb-4">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="../post/single6.html">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/251x141/img3.jpg"
                                alt="Image description"
                              />
                              <div class="post-type-icon">
                                <span class="fa-stack-sea text-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                  </svg>
                                </span>
                              </div>
                            </a>
                            <a
                              class="position-absolute m-2 t-0 p-1 badge bg-primary text-white"
                              href="../category/category.html"
                            >
                              Fashion
                            </a>
                          </div>

                          <div class="card-body">
                            <h3 class="card-title h6">
                              <a href="../post/single6.html">
                                5 Simple Tips to Help Vegetarian or Vegan
                                Travelers Eat Well, Anywhere
                              </a>
                            </h3>
                            <div class="card-text text-muted small">
                              <time datetime="2019-10-20">Oct 20, 2019</time>
                              <span title="8 comment" class="float-end">
                                <span class="icon-comments"></span> 8
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article class="col-6 col-lg-3">
                        <div class="card card-full hover-a mb-4">
                          <div class="ratio_360-202 image-wrapper">
                            <a href="../post/single6.html">
                              <img
                                class="img-fluid lazy"
                                src="../../assets/img/assets/lazy-empty.png"
                                data-src="../../assets/img/251x141/img4.jpg"
                                alt="Image description"
                              />
                              <div class="post-type-icon">
                                <span class="fa-stack-sea text-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                  </svg>
                                </span>
                              </div>
                            </a>
                            <a
                              class="position-absolute m-2 t-0 p-1 badge bg-primary text-white"
                              href="../category/category.html"
                            >
                              Jewellery
                            </a>
                          </div>

                          <div class="card-body">
                            <h3 class="card-title h6">
                              <a href="../post/single6.html">
                                Many Voters Tend to Believe Christine Blasey
                                Ford
                              </a>
                            </h3>
                            <div class="card-text text-muted small">
                              <time datetime="2019-10-19">Oct 19, 2019</time>
                              <span title="13 comment" class="float-end">
                                <span class="icon-comments"></span> 13
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    id="navbarDropdown"
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                  >
                    Features
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li class="dropdown-submenu">
                      <a
                        id="sub1"
                        class="dropdown-item dropdown-toggle"
                        href="#"
                      >
                        Post templates
                      </a>

                      <ul class="submenu dropdown-menu" aria-labelledby="sub1">
                        <li>
                          <a class="dropdown-item" href="../post/single1.html">
                            Post style 1
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="../post/single2.html">
                            Post style 2
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="../post/single3.html">
                            Post style 3
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="../post/single4.html">
                            Post style 4
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="../post/single5.html">
                            Post style 5
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="../post/single6.html">
                            Post style 6
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="../post/single7.html">
                            Post style 7
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="dropdown-submenu">
                      <a
                        id="sub2"
                        class="dropdown-item dropdown-toggle"
                        href="#"
                      >
                        Category
                      </a>

                      <ul class="submenu dropdown-menu" aria-labelledby="sub2">
                        <li class="dropdown-submenu">
                          <a
                            id="sub350"
                            class="dropdown-item dropdown-toggle"
                            href="#"
                          >
                            Category module
                          </a>

                          <ul
                            class="submenu dropdown-menu"
                            aria-labelledby="sub350"
                          >
                            <li>
                              <a
                                class="dropdown-item"
                                href="../category/category.html"
                              >
                                Category Style 1
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../category/category2.html"
                              >
                                Category Style 2
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../category/category3.html"
                              >
                                Category Style 3
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../category/category4.html"
                              >
                                Category Style 4
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../category/category5.html"
                              >
                                Category Style 5
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../category/category6.html"
                              >
                                Category Style 6
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../category/category7.html"
                              >
                                Category Style 7
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../category/search.html"
                          >
                            Search result
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../category/search-none.html"
                          >
                            Search none
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="../category/tags.html">
                            Tags
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../category/author.html"
                          >
                            Author
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../category/archive.html"
                          >
                            Archive
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="dropdown-submenu">
                      <a
                        id="sub3"
                        class="dropdown-item dropdown-toggle"
                        href="#"
                      >
                        Content Block
                      </a>

                      <ul class="submenu dropdown-menu" aria-labelledby="sub3">
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/block/block-title.html"
                          >
                            15 Block title
                          </a>
                        </li>
                        <li class="dropdown-submenu">
                          <a
                            id="sub35"
                            class="dropdown-item dropdown-toggle"
                            href="#"
                          >
                            Big Grid
                          </a>

                          <ul
                            class="submenu dropdown-menu"
                            aria-labelledby="sub35"
                          >
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/big-grid-cover.html"
                              >
                                10 Big Grid
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/block/big-grid-slider.html"
                              >
                                6 Big Grid Slider
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/block/news-ticker.html"
                          >
                            News Ticker
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/block/tabs-news.html"
                          >
                            Tabs News
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="dropdown-submenu">
                      <a
                        id="sub4"
                        class="dropdown-item dropdown-toggle"
                        href="#"
                      >
                        Features
                      </a>

                      <ul class="submenu dropdown-menu" aria-labelledby="sub4">
                        <li class="dropdown-submenu">
                          <a
                            id="sub41"
                            class="dropdown-item dropdown-toggle"
                            href="#"
                          >
                            Review Post
                          </a>

                          <ul
                            class="submenu dropdown-menu"
                            aria-labelledby="sub41"
                          >
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/review/point-review.html#review"
                              >
                                Point Review
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/review/percent-review.html#review"
                              >
                                Percent Review
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/review/star-review.html#review"
                              >
                                Star Review
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="dropdown-submenu">
                          <a
                            id="sub42"
                            class="dropdown-item dropdown-toggle"
                            href="#"
                          >
                            Widget
                          </a>

                          <ul
                            class="submenu dropdown-menu"
                            aria-labelledby="sub42"
                          >
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/widget/social.html"
                              >
                                Social icon
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/widget/address.html"
                              >
                                Address info
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/widget/profile.html"
                              >
                                Author profile
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/widget/subcribe.html"
                              >
                                Subcribe form
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/widget/instagram.html"
                              >
                                Instagram
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/widget/weather.html"
                              >
                                Weather
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/widget/timeline.html"
                              >
                                Timeline post
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="../../snippets/widget/more.html"
                              >
                                More widget
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/features/video-background.html"
                          >
                            Video Background
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/features/youtube-playlist.html"
                          >
                            Youtube Playlist
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/features/sticky.html"
                          >
                            Sticky
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="dropdown-submenu">
                      <a
                        id="sub5"
                        class="dropdown-item dropdown-toggle"
                        href="#"
                      >
                        Pages
                      </a>

                      <ul class="submenu dropdown-menu" aria-labelledby="sub5">
                        <li>
                          <a class="dropdown-item" href="../pages/404.html">
                            404
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../pages/about-us.html"
                          >
                            About us
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../pages/advertisement.html"
                          >
                            Advertisement
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../pages/contact-us.html"
                          >
                            Contact us
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../pages/term-of-use.html"
                          >
                            Term of use
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../pages/privacy-policy.html"
                          >
                            Privacy policy
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="dropdown-submenu">
                      <a
                        id="sub6"
                        class="dropdown-item dropdown-toggle"
                        href="#"
                      >
                        User
                      </a>

                      <ul
                        class="submenu dropdown-menu shadow-lrb-lg"
                        aria-labelledby="sub6"
                      >
                        <li>
                          <a class="dropdown-item" href="../user/login.html">
                            Login
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="../user/register.html">
                            Register
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../user/forgot-password.html"
                          >
                            Forgot password
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../user/dashboard.html"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../user/messages2.html"
                          >
                            Messages
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="../user/profile.html">
                            Profile
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="../user/post.html">
                            Post list
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="../user/favorite.html">
                            Favorite
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="../user/setting.html">
                            Edit profile
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="dropdown-submenu">
                      <a
                        id="sub7"
                        class="dropdown-item dropdown-toggle"
                        href="#"
                      >
                        Header style
                      </a>

                      <ul class="submenu dropdown-menu" aria-labelledby="sub7">
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/header/header-1.html"
                          >
                            Header 1
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/header/header-2.html"
                          >
                            Header 2
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/header/header-3.html"
                          >
                            Header 3
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/header/header-4.html"
                          >
                            Header 4
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/header/header-5.html"
                          >
                            Header 5
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/header/header-6.html"
                          >
                            Header 6
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/header/header-7.html"
                          >
                            Header 7
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/header/header-8.html"
                          >
                            Header 8
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="dropdown-submenu">
                      <a
                        id="sub8"
                        class="dropdown-item dropdown-toggle"
                        href="#"
                      >
                        Footer style
                      </a>

                      <ul class="submenu dropdown-menu" aria-labelledby="sub8">
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/footer/footer-1.html#footer"
                          >
                            Footer 1
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/footer/footer-2.html#footer"
                          >
                            Footer 2
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/footer/footer-3.html#footer"
                          >
                            Footer 3
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/footer/footer-4.html#footer"
                          >
                            Footer 4
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/footer/footer-5.html#footer"
                          >
                            Footer 5
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/footer/footer-6.html#footer"
                          >
                            Footer 6
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="dropdown-submenu">
                      <a
                        id="sub85"
                        class="dropdown-item dropdown-toggle"
                        href="#"
                      >
                        Sidebar
                      </a>

                      <ul class="submenu dropdown-menu" aria-labelledby="sub85">
                        <li>
                          <a
                            class="dropdown-item"
                            href="../post/left-sidebar.html"
                          >
                            Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../post/no-sidebar.html"
                          >
                            No Sidebar
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="../post/single1.html">
                            Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="dropdown-submenu">
                      <a
                        id="sub9"
                        class="dropdown-item dropdown-toggle"
                        href="#"
                      >
                        Shortcodes
                      </a>

                      <ul class="submenu dropdown-menu" aria-labelledby="sub9">
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/post/blockquote.html"
                          >
                            Blockquote
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/post/dropcaps.html"
                          >
                            Dropcaps
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/post/typology.html"
                          >
                            Typology
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="../../snippets/post/list.html"
                          >
                            List
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="dropdown-submenu">
                      <a
                        id="sub10"
                        class="dropdown-item dropdown-toggle"
                        href="#"
                      >
                        Submenu
                      </a>
                      <ul class="submenu dropdown-menu" aria-labelledby="sub10">
                        <li class="dropdown-submenu">
                          <a
                            id="sub10a"
                            class="dropdown-item dropdown-toggle"
                            href="#"
                          >
                            Child Submenu
                          </a>
                          <ul
                            class="submenu dropdown-menu"
                            aria-labelledby="sub10a"
                          >
                            <li>
                              <a class="dropdown-item" href="#">
                                Child Submenu
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Child Submenu
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Child Submenu
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a class="dropdown-item" href="#">
                            Child Submenu
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Child Submenu
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item mega-dropdown dropdown">
                  <a
                    id="navbarmega4"
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                  >
                    News Block
                  </a>

                  <div
                    class="dropdown-menu mega w-100 px-3 py-0 fw-normal"
                    aria-labelledby="navbarmega4"
                  >
                    <ul class="row list-unstyled border-end-last-lg-0">
                      <li class="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                        <h5 class="title-nav">
                          <strong>News Block A</strong>
                        </h5>

                        <ul class="list-unstyled mega-link">
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-1.html"
                            >
                              Block - Layout 1
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-2.html"
                            >
                              Block - Layout 2
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-3.html"
                            >
                              Block - Layout 3
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-4.html"
                            >
                              Block - Layout 4
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-5.html"
                            >
                              Block - Layout 5
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                        <h5 class="title-nav">
                          <strong>News Block B</strong>
                        </h5>

                        <ul class="list-unstyled mega-link">
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-6.html"
                            >
                              Block - Layout 6
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-7.html"
                            >
                              Block - Layout 7
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-8.html"
                            >
                              Block - Layout 8
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-9.html"
                            >
                              Block - Layout 9
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-10.html"
                            >
                              Block - Layout 10
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                        <h5 class="title-nav">
                          <strong>News Block C</strong>
                        </h5>

                        <ul class="list-unstyled mega-link">
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-11.html"
                            >
                              Block - Layout 11
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-12.html"
                            >
                              Block - Layout 12
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-13.html"
                            >
                              Block - Layout 13
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-14.html"
                            >
                              Block - Layout 14
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-15.html"
                            >
                              Block - Layout 15
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                        <h5 class="title-nav">
                          <strong>News Block D</strong>
                        </h5>

                        <ul class="list-unstyled mega-link">
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-16.html"
                            >
                              Block - Layout 16
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-17.html"
                            >
                              Block - Layout 17
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-18.html"
                            >
                              Block - Layout 18
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="../../snippets/block/block-19.html"
                            >
                              Block - Layout 19
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
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
                <li class="nav-item dropdown">
                  <a
                    id="navbarDropdown1"
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                  >
                    More
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                    <li>
                      <a class="dropdown-item" href="../../docs/index.html">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="../../docs/components/alerts.html"
                      >
                        Components
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="../../docs/index-wordpress.html"
                      >
                        Wordpress Version
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div class="navbar-nav ms-auto d-none d-lg-block">
                <div class="search-box">
                  <div class="search-menu no-shadow border-0 py-0">
                    <form
                      class="form-src form-inline"
                      action="../category/search.html"
                    >
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control end-0"
                          name="keywords"
                          placeholder="Search..."
                          aria-label="search"
                        />
                        <span class="icones">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ms-n4"
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
      {/* side bar mobile menu */}
      <div class="mobile-side">
        <div id="back-menu" class="back-menu back-menu-start">
          <span class="hamburger-icon open">
            <svg
              class="bi bi-x"
              width="2rem"
              height="2rem"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>

        <nav
          id="mobile-menu"
          class="menu-mobile d-flex flex-column push push-start shadow-r-sm bg-white"
        >
          <div class="mobile-content mb-auto">
            <div class="logo-sidenav p-2">
              <a href="index.html">
                <img
                  src="../../assets/img/logo/default-logo.png"
                  class="img-fluid"
                  alt="logo"
                />
              </a>
            </div>

            <div class="sidenav-menu">
              <nav class="navbar navbar-light navbar-inverse">
                <ul
                  id="side-menu"
                  class="nav navbar-nav list-group list-unstyled side-link"
                >
                  <li class="menu-item nav-item">
                    <a href="#" class="nav-link active">
                      Home
                    </a>
                  </li>

                  <li class="menu-item menu-item-has-children dropdown mega-dropdown nav-item">
                    <a
                      href="#"
                      class="dropdown-toggle nav-link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="menu-11"
                    >
                      Automotive
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="menu-11"
                      role="menu"
                    >
                      <li class="menu-item nav-item">
                        <a
                          href="../category/category.html"
                          class="dropdown-item"
                        >
                          Cars
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="menu-item nav-item">
                    <a href="../category/category.html" class="nav-link">
                      Business
                    </a>
                  </li>

                  <li class="menu-item menu-item-has-children dropdown mega-dropdown nav-item">
                    <a
                      href="#"
                      class="dropdown-toggle nav-link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="menu-12"
                    >
                      Lifestyle
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="menu-12"
                      role="menu"
                    >
                      <li class="menu-item nav-item">
                        <a
                          href="../category/category.html"
                          class="dropdown-item"
                        >
                          Fashion
                        </a>
                      </li>
                      <li class="menu-item menu-item-has-children mega-dropdown nav-item">
                        <a
                          href="#"
                          class="dropdown-item dropdown-toggle"
                          id="menu-13"
                        >
                          Travel
                        </a>

                        <ul
                          class="submenu dropdown-menu"
                          aria-labelledby="menu-13"
                          role="menu"
                        >
                          <li class="menu-item nav-item">
                            <a
                              href="../category/category.html"
                              class="dropdown-item"
                            >
                              Adventure
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item menu-item-has-children mega-dropdown nav-item">
                        <a
                          href="#"
                          class="dropdown-item dropdown-toggle"
                          id="menu-14"
                        >
                          Science
                        </a>
                        <ul
                          class="submenu dropdown-menu"
                          aria-labelledby="menu-14"
                          role="menu"
                        >
                          <li class="menu-item nav-item">
                            <a
                              href="../category/category.html"
                              class="dropdown-item"
                            >
                              Health
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item menu-item-has-children dropdown mega-dropdown nav-item">
                    <a
                      href="#"
                      class="dropdown-toggle nav-link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="menu-15"
                    >
                      Sports
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="menu-15"
                      role="menu"
                    >
                      <li class="menu-item nav-item">
                        <a
                          href="../category/category.html"
                          class="dropdown-item"
                        >
                          Soccer
                        </a>
                      </li>
                      <li class="menu-item nav-item">
                        <a
                          href="../category/category.html"
                          class="dropdown-item"
                        >
                          Moto GP
                        </a>
                      </li>
                      <li class="menu-item nav-item">
                        <a
                          href="../category/category.html"
                          class="dropdown-item"
                        >
                          Basket
                        </a>
                      </li>
                      <li class="menu-item nav-item">
                        <a
                          href="../category/category.html"
                          class="dropdown-item"
                        >
                          NFL
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="menu-item nav-item">
                    <a href="../category/category.html" class="nav-link">
                      International
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="mobile-copyright mt-5 px-4 text-center">
            <p>
              Copyright <a href="index.html">Bootnews</a> - All right reserved
            </p>
          </div>
        </nav>
      </div>
      <div class="block-title-6 mx-3 mt-5">
                    <h4 class="h5 border-primary">
                      <span class="bg-primary text-white">SSDO Albums</span>
                    </h4>
                  </div>
      <div style={{ display: "flex", flexWrap: " wrap",  height: "100%" }}>
        
        <div class="col-md-4 p-3" style={{ marginBottom: "50px"}}>
          <article style={{ width: "450px", height: "200px" }}>
            <div className="mb-2">
              <img
                width="100%"
                height="100%"
                src="https://static.wixstatic.com/media/5668b5_90e28847fc4244de83c472e781937457~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_90e28847fc4244de83c472e781937457~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfOTBlMjg4NDdmYzQyNDRkZTgzYzQ3MmU3ODE5Mzc0NTd-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.meR8si-DYHpef8CL5zrqQ0zc36ib_s8K4ms4AF0y3es"
                alt=""
              />
            </div>
            <div style={{display :"flex", flexDirection: "column"}} class=" p-4 rounded border-bottom shadow-lrb-lg">
              <h4 class="card-title h2 h1-md display-4-lg mb-1">
                <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                Awareness Session on TIP at Kod Bhanbro, Sukkur
                </a>
              </h4>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since...
              </p>
            </div>
          </article>
        </div>
        <div class="col-md-4 p-3">
          <article style={{ width: "450px", height: "200px" }}>
            <div className="mb-2">
              <img
                width="100%"
                height="100%"
                src="https://static.wixstatic.com/media/5668b5_1682ff6854ad43a8823e5a344c998c56~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_1682ff6854ad43a8823e5a344c998c56~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfMTY4MmZmNjg1NGFkNDNhODgyM2U1YTM0NGM5OThjNTZ-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.MxWP0LRA5mmZVHej58DVN6e3P6WhhadJ9dXjXButfS4"
                alt=""
              />
            </div>
            <div style={{display :"flex", flexDirection: "column"}} class=" p-4 rounded border-bottom shadow-lrb-lg">
              <h4 class="card-title h2 h1-md display-4-lg mb-1">
                <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                SSDO Strategic Planning Meeting
                </a>
              </h4>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since...
              </p>
            </div>
          </article>
        </div>
        <div class="col-md-4 p-3">
          <article style={{ width: "450px", height: "200px" }}>
            <div className="mb-2">
              <img
                width="100%"
                height="100%"
                src="https://static.wixstatic.com/media/5668b5_673fbb2a33f24e0aac2e4e9a44255cf0~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_673fbb2a33f24e0aac2e4e9a44255cf0~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfNjczZmJiMmEzM2YyNGUwYWFjMmU0ZTlhNDQyNTVjZjB-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.cBknKLIKY-A2E5OzB5QxzuYhcZxmmoiyi8MOfIQyE3I"
                alt=""
              />
            </div>
            <div style={{display :"flex", flexDirection: "column"}} class=" p-4 rounded border-bottom shadow-lrb-lg">
              <h4 class="card-title h2 h1-md display-4-lg mb-1">
                <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                  What Went Down at Last Night’s Grand 
                </a>
              </h4>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since...
              </p>
            </div>
          </article>
        </div>
        
      
        <div class="col-md-4 p-3" style={{marginTop: "276px", marginBottom :" 100px"}}>
          <article style={{ width: "450px", height: "200px" }}>
            <div className="mb-2">
              <img
                width="100%"
                height="100%"
                src="https://static.wixstatic.com/media/5668b5_84bdf32bae754f88b229be2667d6f812~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_84bdf32bae754f88b229be2667d6f812~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfODRiZGYzMmJhZTc1NGY4OGIyMjliZTI2NjdkNmY4MTJ-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.WLcAOlx2nCvs1dX88VBCUWeXKcgUNrDk5ZCdVrLlrhk"
                alt=""
              />
            </div>
            <div style={{display :"flex", flexDirection: "column"}} class=" p-4 rounded border-bottom shadow-lrb-lg">
              <h4 class="card-title h2 h1-md display-4-lg mb-1">
                <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                 Meeting of District Stakeholders Working Group 
                </a>
              </h4>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since...
              </p>
            </div>
          </article>
        </div>
        <div class="col-md-4 p-3" style={{marginTop: "276px", marginBottom :" 100px"}}>
          <article style={{ width: "450px", height: "200px" }}>
            <div className="mb-2">
              <img
                width="100%"
                height="100%"
                src="https://static.wixstatic.com/media/5668b5_44c44befa40c4becb8315a63b863ad33~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_44c44befa40c4becb8315a63b863ad33~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfNDRjNDRiZWZhNDBjNGJlY2I4MzE1YTYzYjg2M2FkMzN-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.L-5pvphREUHTo8eiVuV2pWExvbuzQqSNDpPwUegwVus"
                alt=""
              />
            </div>
            <div style={{display :"flex", flexDirection: "column"}} class=" p-4 rounded border-bottom shadow-lrb-lg">
              <h4 class="card-title h2 h1-md display-4-lg mb-1">
                <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                Interactive Dialogue of Stakeholders on TIP - Multan
                </a>
              </h4>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since...
              </p>
            </div>
          </article>
        </div>
        <div class="col-md-4 p-3" style={{marginTop: "276px", marginBottom :" 100px"}}>
          <article style={{ width: "450px", height: "200px" }}>
            <div className="mb-2">
              <img
                width="100%"
                height="100%"
                src="https://static.wixstatic.com/media/5668b5_4f50b54eccf54ad6acda320e744bf855~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_4f50b54eccf54ad6acda320e744bf855~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfNGY1MGI1NGVjY2Y1NGFkNmFjZGEzMjBlNzQ0YmY4NTV-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.bFy9LgVyWr0QdNqDY21qVKgbfzf61blQnyJecHfVzb0"
                alt=""
              />
            </div>
            <div style={{display :"flex", flexDirection: "column"}} class=" p-4 rounded border-bottom shadow-lrb-lg">
              <h4 class="card-title h2 h1-md display-4-lg mb-1">
                <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                Universal Day of Access to Information 2022
                </a>
              </h4>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since...
              </p>
            </div>
          </article>
        </div>
        
        {/* <div class="col-md-4 p-3 mb-3">
          <div class="block-area">
            <article
              class="card card-full mb-5 mb-md-6 hover-a text-center"
              style={{ width: "450px", height: "200px" }}
            >
              <div class="ratio_single image-wrapper">
                <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                  <img
                    width="100%"
                    height="100%"
                    src="https://static.wixstatic.com/media/5668b5_84bdf32bae754f88b229be2667d6f812~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_84bdf32bae754f88b229be2667d6f812~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfODRiZGYzMmJhZTc1NGY4OGIyMjliZTI2NjdkNmY4MTJ-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.WLcAOlx2nCvs1dX88VBCUWeXKcgUNrDk5ZCdVrLlrhk"
                    class="img-fluid  wp-post-image"
                    alt="What Went Down at Last Night’s Grand Opening of the New Store"
                    loading="lazy"
                    // data-src="https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317.jpeg"
                    // srcset="https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317.jpeg 1880w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-300x205.jpeg 300w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-750x513.jpeg 750w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-1024x700.jpeg 1024w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-180x123.jpeg 180w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-99x68.jpeg 99w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-115x80.jpeg 115w"
                    sizes="(max-width: 1880px) 100vw, 1880px"
                  />{" "}
                </a>
              </div>
              <div class="position-relative p-4 rounded border-bottom shadow-lrb-lg">
                <h4 class="card-title h2 h1-md display-4-lg">
                  <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                  South Punjab Conference on Peace and Sustainable Development
                  </a>
                </h4>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since...
                </p>
                <div class="card-text text-muted small">
                  <span class="fw-bold d-none d-sm-inline me-1">
                    <a
                      href="https://demo.bootstrap.news/lifestyle/author/admin/"
                      title="Posts by ari budin"
                      rel="author"
                    >
                      ari budin
                    </a>{" "}
                  </span>
                  <time class="news-date" datetime="2019-09-11T06:21:18+00:00">
                    September 11, 2019
                  </time>
                </div>
              </div>
            </article>
          </div>
        </div> */}
        {/* <div class="col-md-4 p-3">
          <div class="block-area">
            <article
              class="card card-full mb-5 mb-md-6 hover-a text-center"
              style={{ width: "450px", height: "200px" }}
            >
              <div class="ratio_single image-wrapper">
                <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                  <img
                    width="100%"
                    height="100%"
                    src="https://static.wixstatic.com/media/5668b5_fff1a1fc8b494f7cb3bb3da272035125~mv2.jpg/v1/fill/w_500,h_317,al_c,q_80,usm_0.66_1.00_0.01/5668b5_fff1a1fc8b494f7cb3bb3da272035125~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfZmZmMWExZmM4YjQ5NGY3Y2IzYmIzZGEyNzIwMzUxMjV-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.nws6PhCSw_7WxP20A00NGlBjRImaOYH6QJsPDvbN7c8"
                    class="img-fluid  wp-post-image"
                    alt="What Went Down at Last Night’s Grand Opening of the New Store"
                    loading="lazy"
                    // data-src="https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317.jpeg"
                    // srcset="https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317.jpeg 1880w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-300x205.jpeg 300w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-750x513.jpeg 750w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-1024x700.jpeg 1024w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-180x123.jpeg 180w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-99x68.jpeg 99w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-115x80.jpeg 115w"
                    sizes="(max-width: 1880px) 100vw, 1880px"
                  />{" "}
                </a>
              </div>
              <div class="position-relative p-4 rounded border-bottom shadow-lrb-lg">
                <h4 class="card-title h2 h1-md display-4-lg">
                  <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                  Seminar on Combatting Human Trafficking at University of KHI
                  </a>
                </h4>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since...
                </p>
                <div class="card-text text-muted small">
                  <span class="fw-bold d-none d-sm-inline me-1">
                    <a
                      href="https://demo.bootstrap.news/lifestyle/author/admin/"
                      title="Posts by ari budin"
                      rel="author"
                    >
                      ari budin
                    </a>{" "}
                  </span>
                  <time class="news-date" datetime="2019-09-11T06:21:18+00:00">
                    September 11, 2019
                  </time>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="col-md-4 p-3">
          <div class="block-area">
            <article
              class="card card-full  hover-a text-center"
              style={{ width: "450px", height: "200px" }}
            >
              <div class="ratio_single image-wrapper">
                <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                  <img
                    width="100%"
                    height="100%"
                    src="https://static.wixstatic.com/media/5668b5_36cb12b726ee4638b8df9c45ded502dc~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_36cb12b726ee4638b8df9c45ded502dc~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfMzZjYjEyYjcyNmVlNDYzOGI4ZGY5YzQ1ZGVkNTAyZGN-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.qV9GW4Y4a7Q6rlfAHN-5j50aKgum8Xcoy19z8Hdr9TY"
                    class="img-fluid  wp-post-image"
                    alt="What Went Down at Last Night’s Grand Opening of the New Store"
                    loading="lazy"
                    // data-src="https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317.jpeg"
                    // srcset="https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317.jpeg 1880w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-300x205.jpeg 300w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-750x513.jpeg 750w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-1024x700.jpeg 1024w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-180x123.jpeg 180w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-99x68.jpeg 99w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-115x80.jpeg 115w"
                    sizes="(max-width: 1880px) 100vw, 1880px"
                  />{" "}
                </a>
              </div>
              <div class="position-relative p-4 rounded border-bottom shadow-lrb-lg">
                <h4 class="card-title h2 h1-md display-4-lg">
                  <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                  Awareness Session on Combating TIP - IBA, Sukkur
                  </a>
                </h4>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since...
                </p>
                <div class="card-text text-muted small">
                  <span class="fw-bold d-none d-sm-inline me-1">
                    <a
                      href="https://demo.bootstrap.news/lifestyle/author/admin/"
                      title="Posts by ari budin"
                      rel="author"
                    >
                      ari budin
                    </a>{" "}
                  </span>
                  <time class="news-date" datetime="2019-09-11T06:21:18+00:00">
                    September 11, 2019
                  </time>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="col-md-4 p-3">
          <div class="block-area">
            <article
              class="card card-full  hover-a text-center"
              style={{ width: "450px", height: "200px" }}
            >
              <div class="ratio_single image-wrapper">
                <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                  <img
                    width="100%"
                    height="100%"
                    src="https://static.wixstatic.com/media/5668b5_5805df6f81144fa7aac2768f15a11e54~mv2.jpg/v1/fill/w_500,h_317,al_c,q_80,usm_0.66_1.00_0.01/5668b5_5805df6f81144fa7aac2768f15a11e54~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfNTgwNWRmNmY4MTE0NGZhN2FhYzI3NjhmMTVhMTFlNTR-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.xhBRikwehXoPdRRdh6CILpA7V6cJoobUAyq38YfOTz0"
                    class="img-fluid  wp-post-image"
                    alt="What Went Down at Last Night’s Grand Opening of the New Store"
                    loading="lazy"
                    // data-src="https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317.jpeg"
                    // srcset="https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317.jpeg 1880w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-300x205.jpeg 300w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-750x513.jpeg 750w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-1024x700.jpeg 1024w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-180x123.jpeg 180w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-99x68.jpeg 99w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-115x80.jpeg 115w"
                    sizes="(max-width: 1880px) 100vw, 1880px"
                  />{" "}
                </a>
              </div>
              <div class="position-relative p-4 rounded border-bottom shadow-lrb-lg">
                <h4 class="card-title h2 h1-md display-4-lg">
                  <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                  Meeting of Punjab Parliamentary Caucus on combatting Tobacco
                  </a>
                </h4>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since...
                </p>
                <div class="card-text text-muted small">
                  <span class="fw-bold d-none d-sm-inline me-1">
                    <a
                      href="https://demo.bootstrap.news/lifestyle/author/admin/"
                      title="Posts by ari budin"
                      rel="author"
                    >
                      ari budin
                    </a>{" "}
                  </span>
                  <time class="news-date" datetime="2019-09-11T06:21:18+00:00">
                    September 11, 2019
                  </time>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="col-md-4 p-3">
          <div class="block-area">
            <article
              class="card card-full  hover-a text-center"
              style={{ width: "450px", height: "200px" }}
            >
              <div class="ratio_single image-wrapper">
                <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                  <img
                    width="100%"
                    height="100%"
                    src="https://static.wixstatic.com/media/5668b5_44c44befa40c4becb8315a63b863ad33~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_44c44befa40c4becb8315a63b863ad33~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfNDRjNDRiZWZhNDBjNGJlY2I4MzE1YTYzYjg2M2FkMzN-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.L-5pvphREUHTo8eiVuV2pWExvbuzQqSNDpPwUegwVus"
                    class="img-fluid  wp-post-image"
                    alt="What Went Down at Last Night’s Grand Opening of the New Store"
                    loading="lazy"
                    // data-src="https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317.jpeg"
                    // srcset="https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317.jpeg 1880w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-300x205.jpeg 300w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-750x513.jpeg 750w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-1024x700.jpeg 1024w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-180x123.jpeg 180w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-99x68.jpeg 99w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-115x80.jpeg 115w"
                    sizes="(max-width: 1880px) 100vw, 1880px"
                  />{" "}
                </a>
              </div>
              <div class="position-relative p-4 rounded border-bottom shadow-lrb-lg">
                <h4 class="card-title h2 h1-md display-4-lg">
                  <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                  Formation of Youth Network of Citizen Journalists in Punjab
                  </a>
                </h4>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since...
                </p>
                <div class="card-text text-muted small">
                  <span class="fw-bold d-none d-sm-inline me-1">
                    <a
                      href="https://demo.bootstrap.news/lifestyle/author/admin/"
                      title="Posts by ari budin"
                      rel="author"
                    >
                      ari budin
                    </a>{" "}
                  </span>
                  <time class="news-date" datetime="2019-09-11T06:21:18+00:00">
                    September 11, 2019
                  </time>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="col-md-4 p-3">
          <div class="block-area">
            <article
              class="card card-full  hover-a text-center"
              style={{ width: "450px", height: "200px" }}
            >
              <div class="ratio_single image-wrapper">
                <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                  <img
                    width="100%"
                    height="100%"
                    src="https://static.wixstatic.com/media/5668b5_673fbb2a33f24e0aac2e4e9a44255cf0~mv2.jpg/v1/fill/w_500,h_317,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/5668b5_673fbb2a33f24e0aac2e4e9a44255cf0~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS81NjY4YjVfNjczZmJiMmEzM2YyNGUwYWFjMmU0ZTlhNDQyNTVjZjB-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE2NzI1MzEyMDAiLCJleHAiOjE2NzI1MzEyMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.cBknKLIKY-A2E5OzB5QxzuYhcZxmmoiyi8MOfIQyE3I"
                    class="img-fluid  wp-post-image"
                    alt="What Went Down at Last Night’s Grand Opening of the New Store"
                    loading="lazy"
                    // data-src="https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317.jpeg"
                    // srcset="https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317.jpeg 1880w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-300x205.jpeg 300w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-750x513.jpeg 750w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-1024x700.jpeg 1024w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-180x123.jpeg 180w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-99x68.jpeg 99w, https://demo.bootstrap.news/lifestyle/wp-content/uploads/2019/09/pexels-photo-1049317-115x80.jpeg 115w"
                    sizes="(max-width: 1880px) 100vw, 1880px"
                  />{" "}
                </a>
              </div>
              <div class="position-relative p-4 rounded border-bottom shadow-lrb-lg">
                <h4 class="card-title h2 h1-md display-4-lg">
                  <a href="https://demo.bootstrap.news/lifestyle/2019/09/11/what-went-down-at-last-nights-grand-opening-of-the-new-store/">
                  Youth Network Meeting Multan
                  </a>
                </h4>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since...
                </p>
                <div class="card-text text-muted small">
                  <span class="fw-bold d-none d-sm-inline me-1">
                    <a
                      href="https://demo.bootstrap.news/lifestyle/author/admin/"
                      title="Posts by ari budin"
                      rel="author"
                    >
                      ari budin
                    </a>{" "}
                  </span>
                  <time class="news-date" datetime="2019-09-11T06:21:18+00:00">
                    September 11, 2019
                  </time>
                </div>
              </div>
            </article>
          </div>
        </div> */}
        
      </div>
 
    </div>
  );
};

export default albums;
