import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import moment from "moment";
import Image from "next/image";
import { API_URL } from "@/config/index";
function HighlightsSlider({ PressReleases, SliderHighlights }) {
  return (
    <div className="row">
      <div className="col-md-8 p-2">
        <Carousel style={{ height: "350px" }}>
          {SliderHighlights.data.map((sliderhighlight) => {
            console.log(sliderhighlight);
            return (
              <Carousel.Item key={sliderhighlight.id}>
                <Image
                width={750}
                  src={
                    sliderhighlight.attributes.image.data.attributes.url
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
      <div className="col-md-4 pt-05 ps-md-05" style={{ marginTop: "4px" }}>
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
                  <p style={{ paddingLeft: "10px" }} key={pressrelease.id}><strong>
                    {moment(pressrelease.attributes.createdAt).format(
                      "Do MMMM YYYY"
                    )}{" "}</strong>
                    — {pressrelease.attributes.title}
                  </p>
                );
              })}

              {/* <p style={{ paddingLeft: "10px" }}>
                1 November 2022 — Afghanistan opium cultivation in 2022 up by 32
                per cent: UNODC survey
              </p>
              <p style={{ paddingLeft: "10px" }}>
                28 October 2022 — Call by UNESCO, UNODC and partners to fight
                against illicit trafficking of Afghan cultural property
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default HighlightsSlider;
