import React, { useEffect, useState } from "react";
import Link from "next/link";

import { API_URL } from "@/config/index";
const MobileSidebar = () => {
  const [Nav, setNav] = useState([]);
  useEffect(() => {
    getNav();
  }, []);

  const getNav = async () => {
    const navres = await fetch(`${API_URL}/api/navigation/render/1?type=TREE`);
    const Navigation = await navres.json();
    setNav(Navigation);
  };
  return (
    <div>
      <div className="mobile-side">
        <div id="back-menu" className="back-menu back-menu-start">
          <span className="hamburger-icon open">
            <svg
              className="bi bi-x"
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
          className="menu-mobile d-flex flex-column push push-start shadow-r-sm bg-white"
        >
          <div className="mobile-content mb-auto">
            <div className="logo-sidenav p-2">
              <Link href="/">
                <img
                  src="uploads/SSDO_Logo.png"
                  className="img-fluid"
                  alt="logo"
                />
              </Link>
            </div>

            <div className="sidenav-menu">
              <nav className="navbar navbar-light navbar-inverse">
                <ul
                  id="side-menu"
                  className="nav navbar-nav list-group list-unstyled side-link"
                >
                  {Nav.map((nav) => {
                    return (
                      <>
                        {nav.items.length === 0 ? (
                          <li className="menu-item nav-item" key={nav.id}>
                            <Link href={nav.path} className="nav-link active">
                              {nav.title}
                            </Link>
                          </li>
                        ) : (
                          <li className="menu-item menu-item-has-children dropdown mega-dropdown nav-item"  key={nav.id}>
                            <Link
                              href={nav.path}
                              className="dropdown-toggle nav-link"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              id="menu-11"
                            >
                              {nav.title}
                            </Link>
                            {nav.items !== null ? (
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="menu-11"
                                role="menu"
                              >
                                {nav.items.map((item) => {
                                  return (
                                    <>
                                      <li className="menu-item nav-item"  key={item.id}>
                                        <Link
                                          className="dropdown-item"
                                          href={item.path}
                                        >
                                          {item.title}
                                        </Link>
                                      </li>
                                    </>
                                  );
                                })}
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                        )}
                      </>
                    );
                  })}

                  {/* <li className="menu-item menu-item-has-children dropdown mega-dropdown nav-item">
                    <a
                      href="#"
                      className="dropdown-toggle nav-link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="menu-11"
                    >
                      Automotive
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="menu-11"
                      role="menu"
                    >
                      <li className="menu-item nav-item">
                        <a
                          href="../category/category.html"
                          className="dropdown-item"
                        >
                          Cars
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item nav-item">
                    <Link href="/albums" className="nav-link">
                      Albums
                    </Link>
                  </li>

                  <li className="menu-item menu-item-has-children dropdown mega-dropdown nav-item">
                    <a
                      href="#"
                      className="dropdown-toggle nav-link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="menu-12"
                    >
                      Lifestyle
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="menu-12"
                      role="menu"
                    >
                      <li className="menu-item nav-item">
                        <a
                          href="../category/category.html"
                          className="dropdown-item"
                        >
                          Fashion
                        </a>
                      </li>
                      <li className="menu-item menu-item-has-children mega-dropdown nav-item">
                        <a
                          href="#"
                          className="dropdown-item dropdown-toggle"
                          id="menu-13"
                        >
                          Travel
                        </a>

                        <ul
                          className="submenu dropdown-menu"
                          aria-labelledby="menu-13"
                          role="menu"
                        >
                          <li className="menu-item nav-item">
                            <a
                              href="../category/category.html"
                              className="dropdown-item"
                            >
                              Adventure
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children mega-dropdown nav-item">
                        <a
                          href="#"
                          className="dropdown-item dropdown-toggle"
                          id="menu-14"
                        >
                          Science
                        </a>
                        <ul
                          className="submenu dropdown-menu"
                          aria-labelledby="menu-14"
                          role="menu"
                        >
                          <li className="menu-item nav-item">
                            <a
                              href="../category/category.html"
                              className="dropdown-item"
                            >
                              Health
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children dropdown mega-dropdown nav-item">
                    <a
                      href="#"
                      className="dropdown-toggle nav-link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="menu-15"
                    >
                      Sports
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="menu-15"
                      role="menu"
                    >
                      <li className="menu-item nav-item">
                        <a
                          href="../category/category.html"
                          className="dropdown-item"
                        >
                          Soccer
                        </a>
                      </li>
                      <li className="menu-item nav-item">
                        <a
                          href="../category/category.html"
                          className="dropdown-item"
                        >
                          Moto GP
                        </a>
                      </li>
                      <li className="menu-item nav-item">
                        <a
                          href="../category/category.html"
                          className="dropdown-item"
                        >
                          Basket
                        </a>
                      </li>
                      <li className="menu-item nav-item">
                        <a
                          href="../category/category.html"
                          className="dropdown-item"
                        >
                          NFL
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item nav-item">
                    <a href="../category/category.html" className="nav-link">
                      International
                    </a>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>

          <div className="mobile-copyright mt-5 px-4 text-center">
            <p>
              Copyright <Link href="/">SSDO</Link> - All right reserved
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileSidebar;
