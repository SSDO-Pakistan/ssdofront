import { useRouter } from 'next/router'
import { API_URL } from "@/config/index";
const Post = ({ data }) => {
 console.log(data)
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
              <h3  >{data[0].attributes.title}</h3>
              <div className='card-body'>
              <p>{data[0].attributes.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}
export default Post
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
