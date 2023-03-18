import React from "react";
import ReactPlayer from "react-player";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";

const Videos = ({ data }) => {
  //console.log("videos", data);
  // return false;
  return (
    <Layout title="Videos">
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="row p-4 mt-20">
              <div className="col-sm-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary">
                    <span className="bg-primary text-white">SSDO Videos</span>
                  </h4>
                </div>
                <div className="row " style={{ background: "#E5E5CC" }}>
                  {data &&
                    data.Videos?.data.map((video) => {
                      return (
                        <div
                          style={{ height: "18rem" }}
                          key={video.id}
                          className="player-wrapper col-md-4 "
                        >
                          <ReactPlayer
                            className="react-player"
                            width="100%"
                            height="100%"
                            controls={true}
                            url={video.attributes.url}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
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
