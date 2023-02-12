import { API_URL } from "@/config/index";
import ReactMarkdown from "react-markdown";
const Blog = ({ data }) => {
// console.log(data)
  return (
    <div className="d-flex flex-row mt-3 p-3  mb-3">
      <div className=" h-auto col-md-12">
        <div className="block-title-6 text-center">
          <h4 className="h5 border-primary ">
            <span className="bg-primary text-white">Post details</span>
          </h4>
          </div>

          <div className="">
          <div className="card border-0  p-3">
              <h3  className="card-title">{data[0].attributes.title}</h3>
              <div className='card-body'>
              <p><ReactMarkdown>{data[0].attributes.description}</ReactMarkdown></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}
export default Blog
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`${API_URL}/api/posts?filters[type][$eq]=Blog&filters[slider][$eq]=false&filters[slug][$eq]=${params.slug}`)
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
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/posts?filters[type][$eq]=Blog&filters[slider][$eq]=false`)
  const posts = await res.json()
  const data = posts.data;
  // Get the paths we want to pre-render based on posts
  const paths = data.map(post => {
    return {
      params: {
        slug: `${post.attributes.slug}`
      }
    }
  })
  return { paths, fallback: false }
}
