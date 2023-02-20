import { API_URL } from "@/config/index";
import moment from "moment";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
function Blogs({ data }) {
//  console.log("posts data", data)
  // return false;
  return (
    <div className="d-flex flex-row mt-3 p-3  mb-3">
      <div className=" h-auto col-md-12">
        <div className="block-title-6 text-center">
          <h4 className="h5 border-primary ">
            <span className="bg-primary text-white">Blogs</span>
          </h4>
        </div>
        <div className="">
          {data.map((post) => (
            <div className="card border-0 border-bottom p-2"  key={post.id}>
              <div className="card-body">
                <Link href={`blogs/${post.attributes.slug}`}>
                  <h4 className="card-title" key={post.id}>{post.attributes.title}</h4>
               

                  <p> <small> <time dateTime="2019-10-21">
                          {moment(post.attributes.createdAt).format(
                            "Do MMMM YYYY"
                          )}
                        </time></small></p>
                  <p className="card-text mt-3" style={{textAlign:"justify"}}><ReactMarkdown>{post.attributes.description.substring(0, 300).concat("...")}</ReactMarkdown></p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}
export default Blogs
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/posts?filters[type][$eq]=Blog&filters[slider][$eq]=false`)
  const posts = await res.json()
  const data = posts.data;

  return {
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}



