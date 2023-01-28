import React from "react";
import { API_URL } from "@/config/index";
import ReactMarkdown from "react-markdown";
import moment from "moment";

const Blog = ({ data }) => {
  return (
    <div className="container p-4 mt-20">
      <div className="block-title-6">
        <h4 className="h5 border-primary">
          <span className="bg-primary text-white">Blog</span>
        </h4>
      </div>
      <div>
        <section>
          <div>
            <h1>Title : {data.Blog.data[0].attributes.title}</h1>
            <p>
              {" "}
              {moment(data.Blog.data[0].attributes.createdAt).format(
                "Do MMMM YYYY"
              )}
            </p>
          </div>
          <div
            style={{
              background: "#078cfd12",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <ReactMarkdown>
              {data.Blog.data[0].attributes.description}
            </ReactMarkdown>
          </div>
        </section>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  console.log("param", slug);

  const blogres = await fetch(
    `${API_URL}/api/posts?filters[slug][$eq]=${slug}`
  );
  const Blog = await blogres.json();
  //fetching Publications
  console.log("job", Blog);
  return {
    props: {
      data: {
        Blog,
      },
    },
  };
}
export default Blog;
