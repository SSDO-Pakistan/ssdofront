import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import moment from "moment";
import Image from "next/image";

import Link from "next/link";
import { API_URL } from "@/config/index";
function HighlightsSlider({ PressReleases, SliderHighlights }) {
  return (
    <div className="row">
      <div className="col-md-7 p-2">
        <Carousel >
          {SliderHighlights.data.map((sliderhighlight) => {
            console.log(sliderhighlight);
            return (
              <Carousel.Item key={sliderhighlight.id}>
                <Image
                width={655}
                  src={
                    sliderhighlight.attributes.image.data[0].attributes.url
                  }
                  alt="First slide"
                  height= {350}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
        {/* </div> */}
      </div>
      <div className="col-md-5 pt-05 ps-md-05" style={{ marginTop: "4px" }}>
        <div className="block-title-6">
          <h5 className="h5-border-primary">
            <span className="bg-primary text-white">Press Releases</span>
          </h5>
        </div>

        <div className="card card-full  height-ratio ">
          <div style={{ padding: "14px" }} className="bg-light">
            <a className="p-1 bg-primary badge  text-white" href="#"></a>
            <div style={{ marginTop: "10px" }}>
              {PressReleases.data.map((pressrelease) => {
                return (
                  <Link href={`media/${pressrelease.attributes.slug}`} key={pressrelease.id}>
                  <p style={{ paddingLeft: "10px" }} ><strong>
                    {moment(pressrelease.attributes.createdAt).format(
                      "Do MMMM YYYY"
                    )}{" "}</strong>

                    — {pressrelease.attributes.title}
                  </p>
                  </Link>
                );
              })}

          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default HighlightsSlider;
