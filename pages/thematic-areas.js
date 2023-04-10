import React from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
import Layout from "@/components/Layout";
const TheamticArea = ({ data }) => {
  console.log("data", data.ThematicAreas);
  return (
    <Layout title="Thematic Areas">
      <div class="container content-space-1 p-4 mt-20">
        <div className="block-title-6 text-center">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Thematic Areas</span>
          </h4>
        </div>
        <div>
          <p>{data.ThematicAreas.data.attributes.description}</p>
        </div>
        <div class="row mt-5 mb-5 g-2" style={{ justifyContent: "left" }}>
          {data.ThematicAreas.data.attributes.categories.data?.map((cat) => {
            let bgColor = cat.attributes.BackgroundColor;
            return (
              <div class="col mb-3 " key={cat.attributes.id}>
                <div
                  className="card  d-flex  rgba-black-strong py-5 px-2 shadow"
                  style={{
                    width: "22rem",
                    height: "18rem",
                    backgroundColor: `${bgColor}`,
                    justifyContent: "center",
                  }}
                >
                  <div className="card-body">
                    <div style={{ marginBottom: "20px", paddingTop: "30px" }}>
                      <i
                        className={cat.attributes.icon}
                        color="white"
                        style={{
                          color: "white",
                          fontSize: "4rem",
                          marginLeft: "7rem",
                        }}
                      />
                    </div>
                    <Link
                      className="text-white"
                      href={`javascript:;`}
                      style={{ textAlign: "justify" }}
                    >
                      {cat.attributes.title}{" "}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  //fetching thematic-area
  const thematicareares = await fetch(
    `${API_URL}/api/thematic-area?populate=*`
  );
  const ThematicAreas = await thematicareares.json();
  //fetching Publications
  //  console.log("ThematicAreas", ThematicAreas);
  return {
    props: {
      data: {
        ThematicAreas,
      },
    },
  };
}
export default TheamticArea;