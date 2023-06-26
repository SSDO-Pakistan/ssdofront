import React from "react";
import PublicationModal from "./PublicationModal";
import { useState } from "react";
import { API_URL } from "./../config/index";
import Image from "next/image";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const PublicationsSlider = ({ Publications }) => {
  console.log("Publications in slider11", Publications);
  console.log("new", Publications.data?.attributes.research_reports);
  //return false;
  let reports_dataArray = new Array();
  //Research Reports
  Publications &&
    Publications.data?.attributes.research_reports.data?.map((clip) => {
      reports_dataArray.push({
        file: clip.attributes.Report.file.data.attributes.url,
        publishedAt: clip.attributes.publishedAt,
        images: [
          {
            src: clip.attributes.Report.cover.data.attributes.url,
            width: clip.attributes.Report.cover.data.attributes.width,
            height: clip.attributes.Report.cover.data.attributes.height,
          },
        ],
      });
    });

  //Progress Reports
  Publications &&
    Publications.data?.attributes.progress_reports.data?.map((clip) => {
      reports_dataArray.push({
        file: clip.attributes.Report.file.data.attributes.url,
        publishedAt: clip.attributes.publishedAt,
        images: [
          {
            src: clip.attributes.Report.cover.data.attributes.url,
            width: clip.attributes.Report.cover.data.attributes.width,
            height: clip.attributes.Report.cover.data.attributes.height,
          },
        ],
      });
    });
  //Events Reports
  Publications &&
    Publications.data?.attributes.event_reports?.data?.map((clip) => {
      reports_dataArray.push({
        file: clip.attributes.Report.file.data.attributes.url,
        publishedAt: clip.attributes.publishedAt,
        images: [
          {
            src: clip.attributes.Report.cover.data.attributes.url,
            width: clip.attributes.Report.cover.data.attributes.width,
            height: clip.attributes.Report.cover.data.attributes.height,
          },
        ],
      });
    });

  //Wacv Reports
  Publications &&
    Publications.data?.attributes.wacv_reports?.data?.map((clip) => {
      reports_dataArray.push({
        file: clip.attributes.Report.file.data.attributes.url,
        publishedAt: clip.attributes.publishedAt,
        images: [
          {
            src: clip.attributes.Report.cover.data.attributes.url,
            width: clip.attributes.Report.cover.data.attributes.width,
            height: clip.attributes.Report.cover.data.attributes.height,
          },
        ],
      });
    });
  // let my_reports = reports_dataArray.sort(
  //   (a, b) =>
  //     Date.parse(new Date(a.publishedAt.split("/").join("-"))) -
  //     Date.parse(new Date(b.publishedAt.split("/").join("-")))
  // );
  //Here sorting the reports datewise-latest first

  let mySortedReports = reports_dataArray.sort(
    (a, b) =>
      Date.parse(new Date(b.publishedAt.split("/").reverse().join("-"))) -
      Date.parse(new Date(a.publishedAt.split("/").reverse().join("-")))
  );
  //  const [showPublication, setshowPublication] = useState({});
  // console.log("sorted Reports", sortedCars);
  return (
    <div className="col-12 mb-4  ">
      <div className="block-area p-4 border bg-light-black">
        <div className="block-title-13">
          <h4 className="h5 title-box-dot">
            <span>
              <strong>Latest Publications</strong>
            </span>
          </h4>
          <div className="dot-line"></div>
        </div>

        <Splide
          options={{
            type: "loop",
            autoWidth: true,
            focus: 0,
            gap: "1rem",
            rewind: true,
          }}
          aria-label="My Favorite Images"
        >
          {Publications &&
            mySortedReports.map((publication, index) => {
              console.log("My publication", publication);
              // return false;
              return (
                <SplideSlide key={index}>
                  <Link href={publication.file} target="_blank">
                    <Image
                      width={300}
                      height={350}
                      src={publication && publication.images[0].src}
                      data-src="../../assets/img/400x340/img1.jpg"
                      alt="Image description"
                    />
                  </Link>
                </SplideSlide>
              );
            })}
        </Splide>
        <p
          style={{
            textAlign: "right",
            color: "blue",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          <Link href="/publications">view more</Link>
        </p>
      </div>
    </div>
  );
};

export default PublicationsSlider;
