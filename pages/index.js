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
                          <img
                            className="img-fluid mb-4"
                            src="https://www.unodc.org/images/frontpage/banners/WWD20.jpg"
                            data-src="../../assets/img/110x77/img1.jpg"
                            alt="Image description"
                            width= {350}
                            height={150}
                            style={{
                           
                           
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      </div>

                      <div className="">
                        <a href="#">
                          <img
                            className="img-fluid mb-4"
                            src="https://www.unodc.org/images/frontpage/banners/SDG_banner_210x100px.jpg"
                            data-src="../../assets/img/110x77/img1.jpg"
                            alt="Image description"
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      </div>
                      <div className="">
                        <a href="#">
                          <img
                            className="img-fluid mb-4"
                            src="https://www.unodc.org/images/frontpage/banners/OpioidStrategy_210x100px.jpg"
                            data-src="../../assets/img/110x77/img1.jpg"
                            alt="Image description"
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      </div>
                      <div className="">
                        <a href="#">
                          <img
                            className="img-fluid mb-4"
                            src="https://www.unodc.org/images/frontpage/banners/FasstrackingUNCAC-banner-210x100px.jpg"
                            data-src="../../assets/img/110x77/img1.jpg"
                            alt="Image description"
                            style={{
                              width: "100%",
                              height: "150px",
                              objectFit: "cover",
                            }}
                          />
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
    `${API_URL}/api/posts?filters[type][$eq]=Highlights&filters[slider][$eq]=true&sort=createdAt:desc&pagination[limit]=3&populate=*`
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
