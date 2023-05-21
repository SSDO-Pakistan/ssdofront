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
import { API_URL } from "@/config/index";
import Link from "next/link";
import Layout from "@/components/Layout";
function Photosalbum(props) {
  //console.log("newsletters", props.mydata);

  let limit = 10;
  const [items, setItems] = useState(props.mydata);
  let pageCount = Math.ceil(props.total / limit);
  const [index, setIndex] = useState(-1);
  //rendering the container
  const renderContainer = ({ containerProps, children, containerRef }) => (
    <div
      className="shadow-sm"
      style={{
        border: "2px solid #eee",
        borderRadius: "10px",
        padding: "20px",
        background: "beige",
      }}
    >
      <div ref={containerRef} {...containerProps}>
        {children}
      </div>
    </div>
  );
  //rendering the photo
  const renderPhoto = ({
    layout,
    layoutOptions,
    imageProps: { alt, style, ...restImageProps },
    photo: { url, tags },
  }) => (
    <div
      className="shadow-sm"
      style={{
        border: "2px solid #eee",
        borderRadius: "4px",
        boxSizing: "content-box",
        alignItems: "center",
        width: style?.width,
        padding: `${layoutOptions.padding - 2}px`,
        paddingBottom: 0,
        backgroundColor: "white",
      }}
    >
      {url && (
        <Link href={url} target="_blank">
          <img
            alt={alt}
            style={{ ...style, width: "100%", padding: 0 }}
            {...restImageProps}
          />
        </Link>
      )}
      <div
        style={{
          paddingTop: "8px",
          paddingBottom: "8px",
          overflow: "visible",
          textAlign: "left",
          fontSize: "13px",
          overflowWrap: "break-word",
          fontWeight: "bolder",
          color: "#545E63",
          // inlineSize: "350px"
        }}
      ></div>
    </div>
  );

  const fetchPhotos = async (currentPage) => {
    const res = await fetch(
      `${API_URL}/api/newsletters?populate=*&sort=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
    );
    const data = await res.json();

    let mydata = new Array();
    data.data?.map((clip) => {
      mydata.push({
        url: clip.attributes.url,
        src: clip.attributes.image.data?.attributes.url,
        width: clip.attributes.image.data?.attributes.width,
        height: clip.attributes.image.data?.attributes.height,
        images: [
          {
            src: clip.attributes.image.data?.attributes.formats.small.url,
          },
          {
            src: clip.attributes.image.data?.attributes.formats.thumbnail.url,
          },
        ],
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
    <Layout title="NewsLetters" image={props.mydata[0].images[0].src}>
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="row p-4 mt-20">
              <div className="col-sm-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary">
                    <span className="bg-primary text-white">Newsletters</span>
                  </h4>
                </div>
                <PhotoAlbum
                  layout="rows"
                  photos={items}
                  containerWidth={900}
                  spacing={20}
                  padding={20}
                  targetRowHeight={280}
                  renderContainer={renderContainer}
                  renderPhoto={renderPhoto}
                  onClick={({ photo: { url }, index }) => setIndex(index)}
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
          </div>
        </main>
      </div>
    </Layout>
  );
}
export default Photosalbum;
export async function getStaticProps() {
  const res = await fetch(
    `${API_URL}/api/newsletters?populate=*&sort=rank:asc&pagination[page]=1&pagination[pageSize]=10`
  );

  const photos = await res.json();
  const total = photos.meta.pagination.total;
  let mydata = new Array();
  photos.data?.map((clip) => {
    clip.attributes.image.data?.attributes.url &&
      mydata.push({
        url: clip.attributes.url,
        src: clip.attributes.image.data?.attributes.url,
        width: clip.attributes.image.data?.attributes.width,
        height: clip.attributes.image.data?.attributes.height,
        images: [
          {
            src: clip.attributes.image.data?.attributes.formats.thumbnail.url,
          },
          {
            src: clip.attributes.image.data?.attributes.formats.thumbnail.url,
          },
        ],
      });
  });
  return {
    props: {
      mydata,
      total,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 10, // In seconds
  };
}
