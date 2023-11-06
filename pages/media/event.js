import React from "react";
import { API_URL } from "@/config/index";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
const MyEvent = ({ data }) => {
  // console.log("event", data);
  // return false;
  return (
    <Layout title="About Us">
      <div class="container p-4 mt-20">
        <div className="block-title-6 text-center">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Events</span>
          </h4>
        </div>

        <div className=" w-100 d-flex flex-column">
          <div className=" w-100 mb-3">
            <p style={{ textAlign: "justify", marginTop: "20px" }}>
              <ReactMarkdown>{data.Events.data.attributes.title}</ReactMarkdown>
            </p>
          </div>
          <div className=" w-100 mb-3 bg-light p-3">
            <p style={{ textAlign: "justify", marginTop: "20px" }}>
              <ReactMarkdown>
                {data.Events.data.attributes.description}
              </ReactMarkdown>
            </p>
          </div>
          <div className=" w-100 d-flex flex-wrap align-items-center justify-items-center mt-5">
            <Link href={data.Events.data.attributes.link} target="_blank">
              <Image
                src={data.Events.data.attributes.image.data.attributes.url}
                width={400}
                height={280}
                style={{
                  marginLeft: "30%",
                  marginBottom: "20px",
                }}
                alt="About us Images"
                key={data.Events.data.attributes.image.id}
              />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export async function getServerSideProps({ params }) {
  //fetching about us page
  const aboutevents = await fetch(`${API_URL}/api/event?populate=deep`);
  const Events = await aboutevents.json();
  //fetching Publications
  // console.log("job", About);
  return {
    props: {
      data: {
        Events,
      },
      revalidate: 10, // In secondss
    },
  };
}
export default MyEvent;
