import React from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
const TheamticArea = ({ data }) => {
  console.log("data", data.ThematicAreas);
  return (
    <div class="container content-space-1 p-4 mt-20">
      <div className="block-title-6">
        <h4 className="h5 border-primary">
          <span className="bg-primary text-white">Thematic Areas</span>
        </h4>
      </div>
      <div>
        <p>{data.ThematicAreas.data.attributes.description}</p>
      </div>
      <div className="d-flex flex-col flex-wrap" style={{ marginTop: "45px" }}>
        {data.ThematicAreas.data.attributes.categories.data.map((cat) => {
          return (
            <div className="bg-primary p-3 d-flex justify-content-center align-items-center ms-3 mb-3">
              <p className="text-white p-1 ">
                <Link
                  className="text-white"
                  href={`/thematicarea/${cat.attributes.slug}`}
                >
                  {cat.attributes.title}{" "}
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  //fetching thematic-area
  const thematicareares = await fetch(
    `${API_URL}/api/thematic-area?populate=*`
  );
  const ThematicAreas = await thematicareares.json();
  //fetching Publications
  console.log("ThematicAreas", ThematicAreas);
  return {
    props: {
      data: {
        ThematicAreas,
      },
    },
  };
}
export default TheamticArea;
