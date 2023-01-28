import React from "react";
import Link from "next/link";
import { API_URL } from "@/config/index";
const FinancialReports = ({ data }) => {
  return (
    <main className="d-flex flex-row mt-3 p-3  mb-3">
      <div className="col-md-12 h-auto ">
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Financial Reports</span>
          </h4>
        </div>
        <div className="d-flex justify-space-between flex-row flex-wrap gap-8 h-auto mt-5 mb-3">
          {data &&
            data.Publications?.data.map((publication) => {
              return (
                <Link
                  href={`${
                    API_URL + publication.attributes.File?.data?.attributes.url
                  } `}
                  target="_blank"
                >
                  <article
                    style={{
                      width: "430px",
                      height: "auto",
                      cursor: "pointer",
                    }}
                  >
                    <div className="mb-2">
                      <img
                        width="100%"
                        height="350px"
                        src={
                          API_URL +
                          publication.attributes.cover.data.attributes.url
                        }
                        alt=""
                      />
                    </div>
                    <div
                      style={{ display: "flex", flexDirection: "column" }}
                      class=" p-4 rounded border-bottom shadow-lrb-lg"
                    >
                      <h4 class="card-title h3 h2-md display-6-lg mb-1">
                        {publication.attributes.title}
                      </h4>
                      <p class="card-text">
                        {publication.attributes.description}
                      </p>
                      <div className="small text-white ">
                        <p
                          className="mb-0 text-white p-2 rounded"
                          style={{ background: "rgb(133 7 53)" }}
                        >
                          {publication.attributes.type}
                        </p>
                      </div>
                      {/* <div className="mt-1 small">
              <p>Pictures : {gallery.attributes.images.data.length}</p>
            </div> */}
                    </div>
                  </article>
                </Link>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export async function getServerSideProps() {
  //fetching Financial Reports
  const publicationsres = await fetch(
    `${API_URL}/api/publications?filters[type][$eq]=Financial Reports&populate=*&sort=createdAt:desc`
  );
  const Publications = await publicationsres.json();
  console.log(Publications);
  return {
    props: {
      data: {
        Publications,
      },
    },
  };
}
export default FinancialReports;
