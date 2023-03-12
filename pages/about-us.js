import React from "react";
import { API_URL } from "@/config/index";
import Image from 'next/image'
import Layout from "@/components/Layout";
const AboutUs = ({ data }) => {
 // console.log("about", data);
 
  return (
    <Layout title="About Us">
    <div class="container p-4 mt-20">
      <div className="block-title-6">
        <h4 className="h5 border-primary">
          <span className="bg-primary text-white">About Us</span>
        </h4>
      </div>
      <div className=" w-100 d-flex flex-column ">
        <div className=" w-100">
          <h5 className="text-start " style={{textAlign:"justify"}}>
            {data.About.data.attributes.description}
          </h5>
          {/* <img
            src="/uploads/plane.svg"
            style={{ width: "300px", height: "230px" }}
          /> */}
        </div>
        <div className=" w-100 d-flex flex-wrap align-items-center justify-items-center">
          {data.About.data.attributes.images.data.map((img) => {
            return (
              <Image
                src={img.attributes.url}
                width={400}
                height={280}
                style={{
                  marginLeft: "7px",
                  marginBottom: "20px",
                }}
                alt="About us Images"
               key={img.id} />
            );
          })}
        </div>
      </div>
      <div
        className="d-flex flex-column rounded shadow-lg"
        style={{ background: "#dfdef69c", padding: "15px" }}
      >
        <h1 className="bg-primary p-2 w-25 text-white rounded text-center">
          Our Mission
        </h1>
        <p>{data.About.data.attributes.mission}</p>
        <h1 className="bg-primary p-2 w-25 text-white rounded text-center">
          Our Vison
        </h1>
        <p>{data.About.data.attributes.vision}</p>
      </div>
    </div>
    </Layout>
  );
};
export async function getStaticProps({ params }) {
  //fetching about us page
  const aboutusres = await fetch(`${API_URL}/api/about-us?populate=*`);
  const About = await aboutusres.json();
  //fetching Publications
  console.log("job", About);
  return {
    props: {
      data: {
        About,
      },
      revalidate: 10, // In secondss
    },
  };
}
export default AboutUs;
