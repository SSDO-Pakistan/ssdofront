import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "./../components/Layout";
import HighlightsSlider from "./../components/HighlightsSlider";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Header from "../components/Header";
import PublicationsSlider from "../components/PublicationsSlider";
import { API_URL } from "@/config/index";
import React, { useState, useEffect } from "react";
import Upcomings from "../components/Upcomings";
import Highlights from "@/components/Highlights";
import ThematicAreas from "@/components/ThematicAreas";
import SocialNetworksSidebar from "./../components/SocialNetworksSidebar";
import Blog from "./../components/Blog";
import AlbumsSlider from "./../components/AlbumsSlider";

export default function Home({ data }) {
  //console.log("publication slider data", data.Publications);
  //  console.log(
  //   data.SliderHighlights.data[0].attributes.image.data[0]?.attributes.url
  //);
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  useEffect(() => {
    setTimeout(() => setShow(true), 3000);
  }, []);
  return (
    <Layout
      title="SSDO Pakistan"
      image={
        data.SliderHighlights.data[0].attributes.image.data[0]?.attributes.url
      }
    >
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            {/* <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>WE HAVE RELOCATED</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <img src='/uploads/ssdo_loc.jpg' alt="G1s" width="1080"  className="img-fluid"/>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>Understood</Button>
              </Modal.Footer>
            </Modal> */}
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

              {data && data.Videos && <AlbumsSlider Galleries={data.Videos} />}

              {/* Blogs */}
              {data && data.Blogs && <Blog Blogs={data.Blogs} />}

              {/* start full column */}

              {/* start left column */}

              {/* start right column */}
              <aside className="col-md-4 end-sidebar-lg">
                <div className="sticky">
                  <aside className="widget">
                    <div className="small-post">
                      {data && data.ThematicAreas && (
                        <ThematicAreas ThematicAreas={data.ThematicAreas} />
                      )}
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
    `${API_URL}/api/posts?filters[type][$eq]=Press Release&sort=createdAt:desc&pagination[limit]=4`
  );
  const PressReleases = await pressreleaseres.json();

  //fetching sliderimgs
  const sliderhighlightsres = await fetch(
    `${API_URL}/api/posts?filters[type][$eq]=Highlights&filters[slider][$eq]=true&sort=createdAt:desc&pagination[limit]=9&populate=*`
  );
  const SliderHighlights = await sliderhighlightsres.json();

  //fetching publications
  const publicationsres = await fetch(
    `${API_URL}/api/publication-slider?populate=deep`
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
  const videos_res = await fetch(`${API_URL}/api/videos?sort=updatedAt:desc`);
  const Videos = await videos_res.json();

  //Getting thematic areas
  const thematicareares = await fetch(
    `${API_URL}/api/thematic-area?populate=*&pagination[limit]=5`
  );
  const ThematicAreas = await thematicareares.json();

  // console.log("Galleries", Galleries);
  return {
    props: {
      data: {
        Upcomings,
        PressReleases,
        SliderHighlights,
        Publications,
        Highlights,
        Blogs,
        Videos,
        ThematicAreas,
      },
    },
  };
}
