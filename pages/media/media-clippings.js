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
function Photosalbum(props) {
  let limit = 20
  const [items, setItems] = useState(props.mydata);
  let pageCount = Math.ceil(props.total / limit)
  const [index, setIndex] = useState(-1);

  const renderPhoto = ({ layout, layoutOptions, imageProps: { alt,
    style, ...restImageProps },
    photo: { src, tags } }) => (
    <div className="card shadow-sm" >
      <div class="card-body">
        <img alt={alt} style={{ ...style, width: "100%", padding: 0 }}
          {...restImageProps} />
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
      `https://strapi-production-9f68.up.railway.app/api/media-clipings?populate=*&sort=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
    );
    const data = await res.json();
    let mydata = new Array;
    data.data?.map((clip) => {
      mydata.push({
        "src": clip.attributes.image.data.attributes.url,
        "width": clip.attributes.image.data.attributes.width,
        "height": clip.attributes.image.data.attributes.height,
        "images": [
          {
            "src":
              clip.attributes.image.data.attributes.formats.small.url
          },
          {
            "src":
              clip.attributes.image.data.attributes.formats.thumbnail.url
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
          <span className="bg-primary text-white">Media Clippings</span>
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
        onClick={({ photo: { src }, index }) => setIndex(index)}
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
export default Photosalbum
export async function getStaticProps() {
  const res = await
    fetch('https://strapi-production-9f68.up.railway.app/api/media-clipings?populate=*&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=10')

  const photos = await res.json()
  const total = photos.meta.pagination.total;
  let mydata = new Array;
  photos.data?.map((clip) => {
    mydata.push({
      "src": clip.attributes.image.data.attributes.url,
      "width": clip.attributes.image.data.attributes.width,
      "height": clip.attributes.image.data.attributes.height,
      "images": [
        { "src": clip.attributes.image.data.attributes.formats.small.url },
        { "src": clip.attributes.image.data.attributes.formats.thumbnail.url }
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