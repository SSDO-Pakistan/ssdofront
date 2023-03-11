import { PhotoAlbum, RenderPhoto } from "react-photo-album";
import React, { useState, useCallback } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ReactPaginate from "react-paginate";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Link from "next/link";
function Publications(props) {
  let limit = 10

  const [items, setItems] = useState(props.mydata);
   // console.log("my items", items);
  let pageCount = Math.ceil(props.total / limit)
  const [index, setIndex] = useState(-1);

  const renderPhoto = ({ layout, layoutOptions, imageProps: { alt,
    style, ...restImageProps },
    photo: { file, tags } }) => (
    <div className="card shadow-sm" >
      <div class="card-body">
        <img alt={alt} style={{ ...style, width: "100%", padding: 0 }}
          {...restImageProps} />
          <h5 className="card-title text-center mt-2">
          {file && (   
           <Link href={file} target="_blank"><span className="badge  bg-danger text-light">Download</span></Link>
          )}
        </h5>
        <div>
          {tags && (
            <ul className="photo-tags">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );

  const fetchPhotos = async (currentPage) => {
    const res = await fetch(
      `${API_URL}/api/publications?populate=*&sort=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
    );
    const data = await res.json();
    let mydata = new Array;
    let myFileSrc=""
    data.data?.map((clip) => {
        if( !clip.attributes.File)
        {
          myFileSrc = "No File"
        }
        else
        {
          myFileSrc=clip.attributes.File.data.attributes.url
        }
      mydata.push({
        "file": myFileSrc,
        "src": clip.attributes.cover.data.attributes.url,
        "width": clip.attributes.cover.data.attributes.width,
        "height": clip.attributes.cover.data.attributes.height,
        "images": [
          {
            "src":
              clip.attributes.cover.data.attributes.url
          },
          {
            "src":
              clip.attributes.cover.data.attributes.formats.thumbnail.url
          }
        ]
      });
    });
    return mydata;
  };
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const commentsFormServer = await fetchPhotos(currentPage);
    setItems(commentsFormServer);
  };
  return (
    <Layout title="Media Clippings">
    <div className="row p-4 mt-20">
    <div className="col-sm-12">
      <div className="block-title-6 text-center">
        <h4 className="h5 border-primary">
          <span className="bg-primary text-white">Publications</span>
        </h4>
      </div>
      <PhotoAlbum
        layout="rows"
        photos={items}
        containerWidth={900}
        spacing={20}
        padding={20}
        targetRowHeight={200}
        renderPhoto={renderPhoto}
        onClick={({ photo: { File }, index }) => setIndex(index)}
      />
      <Lightbox
        slides={items}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center mt-2"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
</div>
</Layout>
  );
}
export default Publications
export async function getStaticProps() {
  const res = await
    fetch( `${API_URL}/api/publications?populate=*&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=10`)

  const photos = await res.json()
  const total = photos.meta.pagination.total;
  let mydata = new Array;
  let myFileSrc
  photos.data?.map((clip) => {
    if( !clip.attributes.File)
    {
      myFileSrc = "No File"
    }
    else
    {
      myFileSrc=clip.attributes.File.data.attributes.url
    }
    mydata.push({
      "file": myFileSrc,
      "src": clip.attributes.cover.data.attributes.url,
      "width": clip.attributes.cover.data.attributes.width,
      "height": clip.attributes.cover.data.attributes.height,
      "images": [
        { "src": clip.attributes.cover.data.attributes.url },
        { "src": clip.attributes.cover.data.attributes.formats.thumbnail.url }
      ]
    });
  });
  return {
    props: {
      mydata,
      total
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}