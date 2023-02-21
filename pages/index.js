import Head from "next/head";
import { useState } from "react";

import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "./../components/Layout";
import HighlightsSlider from "./../components/HighlightsSlider";

import Header from "../components/Header";
import PublicationsSlider from "../components/PublicationsSlider";
import { API_URL } from "@/config/index";

import Upcomings from "../components/Upcomings";
import Highlights from "@/components/Highlights";
import SocialNetworksSidebar from "./../components/SocialNetworksSidebar";
import Blog from "./../components/Blog";
import AlbumsSlider from "./../components/AlbumsSlider";
import MobileSidebar from "./../components/MobileSidebar";

export default function Home({ data }) {
  const [news, setnews] = useState(undefined);

  return (
    <Layout>

      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="row">
              <div className="col-12 mt-05">
                {data && data.Upcomings && data.Upcomings.data && (
                  <Upcomings Upcomings={data.Upcomings} />
                )}
                {data &&
                  data.SliderHighlights &&
                  data.PressReleases &&
                  data.PressReleases.data && (
                    <HighlightsSlider
                      PressReleases={data.PressReleases}
                      SliderHighlights={data.SliderHighlights}
                    />
                  )}
              </div>
              {/* reports*/}
              {data && data.Publications && (
                <PublicationsSlider Publications={data.Publications} />
              )}

              {/* content start */}
              {/* left column */}
              {data && data.Highlights && (
                <Highlights Highlights={data.Highlights} />
              )}

              {/* right column */}
              <SocialNetworksSidebar />

              {/* album slider */}

              {data && data.Galleries && (
                <AlbumsSlider Galleries={data.Galleries} />
              )}

              {/* Blogs */}
              {data && data.Blogs && <Blog Blogs={data.Blogs} />}

              {/* start full column */}

              {/* start left column */}

              {/* start right column */}
              <aside className="col-md-4 end-sidebar-lg mt-4">
                <div className="sticky">
                  <aside className="widget">
                    <div className="small-post">
                      <div className="">
                        <a href="#">
                          <div className="card d-flex align-items-center rgba-black-strong py-5 px-4 mb-2" style={{ width: "22rem", height: "10rem", backgroundColor: "#213E8C", justifyContent: "center" }}>
                            <div className="card-body">
                              <div style={{ marginBottom: "20px", paddingTop: "20px", paddingLeft: "100px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-peace" viewBox="0 0 16 16">
                                  <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0v6.775l4.79 4.79A7 7 0 0 0 8.5 1.018zm4.084 12.273L8.5 9.207v5.775a6.97 6.97 0 0 0 4.084-1.691zM7.5 14.982V9.207l-4.084 4.084A6.97 6.97 0 0 0 7.5 14.982zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                </svg>
                              </div>
                              <Link href={`javascript:;`}>
                                <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Countering Extremism & Promoting Peace</h5>
                              </Link>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="">
                        <a href="#">
                          <div className="card d-flex align-items-center rgba-black-strong py-5 px-4  mb-2" style={{ width: "22rem", height: "10rem", backgroundColor: "#F2BF5E", justifyContent: "center" }}>
                            <div className="card-body">
                              <div style={{ marginBottom: "20px", paddingTop: "15px", paddingLeft: "80px" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-mortarboard" viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
</svg>
                              </div>
                              <Link href={`javascript:;`}>
                                <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Equitable Health & Education</h5>
                              </Link>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="">
                        <a href="#">
                          <div className="card d-flex align-items-center rgba-black-strong py-5 px-4  mb-2" style={{ width: "22rem", height: "10rem", backgroundColor: "#FF6161", justifyContent: "center" }}>
                            <div className="card-body">
                              <div style={{ marginBottom: "20px", paddingTop: "20px", paddingLeft: "100px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-hammer" viewBox="0 0 16 16">
                                  <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z" />
                                </svg>
                              </div>
                              <Link href={`javascript:;`}>
                                <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Democratic & Just Governance</h5>
                              </Link>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="">
                        <a href="#">
                          <div className="card d-flex align-items-center rgba-black-strong py-5 px-4 mb-2" style={{ width: "22rem", height: "10rem", backgroundColor: "#35C68B", justifyContent: "center" }}>
                            <div className="card-body">
                              <div style={{ marginBottom: "20px", paddingTop: "20px", paddingLeft: "100px" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-gender-ambiguous" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1H11.5zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z"/>
</svg>
                              </div>
                              <Link href={`javascript:;`}>
                                <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Gender Equality & Women Empowerment</h5>
                              </Link>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="">
                        <a href="#">
                          <div className="card d-flex align-items-center rgba-black-strong py-5 px-4" style={{ width: "22rem", height: "10rem", backgroundColor: "#C84869", justifyContent: "center" }}>
                            <div className="card-body">
                              <div style={{ marginBottom: "20px", paddingTop: "20px", paddingLeft: "100px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-zoom-in" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
                                  <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                              </div>
                              <Link href={`javascript:;`}>
                                <h5 className="card-title text-center" style={{ color: "white", fontWeight: "bolder" }}>Accountability & Transparency</h5>
                              </Link>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="gap-0"></div>
                  </aside>
                </div>
              </aside>
            </div>
          </div>
        </main>
        {/* <Footer /> */}
      </div>

    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetching upcomings
  const upcomingsres = await fetch(
    `${API_URL}/api/posts?filters[type][$eq]=Upcoming`
  );
  const Upcomings = await upcomingsres.json();

  //fetching Press Releases
  const pressreleaseres = await fetch(
    `${API_URL}/api/posts?filters[type][$eq]=Press Release&sort=createdAt:desc&pagination[limit]=3`
  );
  const PressReleases = await pressreleaseres.json();

  //fetching sliderimgs
  const sliderhighlightsres = await fetch(
    `${API_URL}/api/posts?filters[type][$eq]=Highlights&filters[slider][$eq]=true&sort=createdAt:desc&pagination[limit]=9&populate=*`
  );
  const SliderHighlights = await sliderhighlightsres.json();

  //fetching publications
  const publicationsres = await fetch(
    `${API_URL}/api/publications?pagination[limit]=4&populate=*&sort=createdAt:desc`
  );
  const Publications = await publicationsres.json();

  //fetching Highlights
  const highlightsres = await fetch(
    `${API_URL}/api/posts?filters[type][$eq]=Highlights&filters[slider][$eq]=false&sort=createdAt:desc&pagination[limit]=4&populate=*`
  );
  const Highlights = await highlightsres.json();

  //Fetching Blogs
  const blogsres = await fetch(
    `${API_URL}/api/posts?filters[type][$eq]=Blog&filters[slider][$eq]=false&sort=createdAt:desc&pagination[limit]=4`
  );
  const Blogs = await blogsres.json();

  //fetching Gallery
  const galleriesres = await fetch(
    `${API_URL}/api/galleries?pagination[limit]=4&populate=*&sort=createdAt:desc`
  );
  const Galleries = await galleriesres.json();

  console.log("Galleries", Galleries);
  return {
    props: {
      data: {
        Upcomings,
        PressReleases,
        SliderHighlights,
        Publications,
        Highlights,
        Blogs,
        Galleries,
      },
    },
  };
}
