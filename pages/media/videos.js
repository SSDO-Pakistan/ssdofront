import React from "react";
import ReactPlayer from "react-player";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";

const Videos = ({ data }) => {
  console.log("videos", data);
  // return false;
  return (
    <Layout title="Videos">
      <main className="d-flex flex-row mt-3 p-3  mb-3">
        <div className="col-md-12 h-auto ">
          <div className="block-title-6 text-center">
            <h4 className="h5 border-primary">
              <span className="bg-primary text-white ">Videos</span>
            </h4>
          </div>
          <div className="row  myteam">
            {data &&
              data.Videos?.data.map((video) => {
                return (
                  <div
                    className="player-wrapper card  mb-10 mt-10  bg-white shadow-sm  "
                    style={{
                      marginTop: "50px",
                      cursor: "pointer",
                      width: "25rem",
                      margin: "5px",
                      marginBottom: "30px",
                      marginLeft: "30px",
                    }}
                  >
                    <div className="card-body">
                      <ReactPlayer
                        light={
                          <img
                            style={{
                              position: "relative",
                              width: "100%",
                              height: "100%",
                            }}
                            src={video.attributes.url}
                            alt="sun"
                          />
                        }
                        style={{
                          paddingLeft: "25px",
                          paddingTop: "20px",
                          height: "20px",
                        }}
                        key={video.id}
                        className="react-player"
                        width="95%"
                        height="40%"
                        url={video.attributes.url}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  //fetching pubilcations
  const videos_res = await fetch(`${API_URL}/api/videos?sort=createdAt:asc`);
  const Videos = await videos_res.json();
  //fetching Publications
  //console.log("Profiles", Profiles);
  return {
    props: {
      data: {
        Videos,
      },
    },
  };
}
export default Videos;
