import React, { useState } from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
import AlbumModal from "../../components/AlbumModal";
const ThematicArea = ({ data }) => {
  const [showGallery, setshowGallery] = useState({});
  console.log(showGallery);
  const [modalShow, setmodalShow] = useState(false);
  console.log("data", data.Categories);
  return (
    <main className="row mt-3 p-3 ">
      <div className="col-md-8 h-auto mb-2 ">
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Albums</span>
          </h4>
        </div>
        <div className="d-flex flex-row flex-wrap gap-8 h-auto">
          {data &&
            data.Category.data[0].attributes.galleries.data.map((gallery) => {
              return (
                <article
                  style={{ width: "450px", height: "auto", cursor: "pointer" }}
                  onClick={() => {
                    setshowGallery(gallery);
                    setmodalShow(true);
                  }}
                >
                  <div className="mb-2">
                    <img
                      width="100%"
                      height="100%"
                      src={
                        API_URL +
                        gallery.attributes.images.data[0].attributes.url
                      }
                      alt=""
                    />
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "column" }}
                    class=" p-4 rounded border-bottom shadow-lrb-lg"
                  >
                    <h4 class="card-title h3 h2-md display-6-lg mb-1">
                      {gallery.attributes.title}
                    </h4>
                    <p class="card-text">{gallery.attributes.description}</p>
                    <div className="small text-white ">
                      <p
                        className="mb-0 text-white p-1 rounded"
                        style={{ background: "#18678d" }}
                      >
                        {data.Category.data[0].attributes.title}
                      </p>
                    </div>
                    <div className="mt-1 small">
                      <p>
                        Total photos : {gallery.attributes.images.data.length}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
      <div className="col-md-4  ">
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Thematic Areas</span>
          </h4>
        </div>
        <div className="d-flex flex-column gap-3  " style={{ height: "100vh" }}>
          {data.Categories.data.map((category) => {
            return (
              <Link href={`/thematicarea/` + category.attributes.slug}>
                <div
                  className="bg-primary d-flex justify-content-center "
                  style={{
                    width: " 100%",
                    height: "100px",
                  }}
                >
                  <h1 className="align-self-center text-white">
                    {category.attributes.title}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
        <AlbumModal
          show={modalShow}
          onHide={() => setmodalShow(false)}
          data={showGallery}
        />
      </div>
    </main>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  console.log("slug", slug);

  //fetching Gallery
  const categoryres = await fetch(
    `${API_URL}/api/categories?filters[slug][$eq]=${slug}&populate[galleries][populate][0]=images`
  );

  const Category = await categoryres.json();

  //fetching Categories
  const categoriesres = await fetch(
    `${API_URL}/api/categories?populate=*&sort=createdAt:desc`
  );
  const Categories = await categoriesres.json();
  return {
    props: {
      data: {
        Category,
        Categories,
      },
    },
  };
}
export default ThematicArea;
