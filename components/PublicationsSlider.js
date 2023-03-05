import React from "react";
import PublicationModal from "./PublicationModal";
import { useState } from "react";
import { API_URL } from "./../config/index";
import Image from 'next/image'
import Link from "next/link";
import { Splide, SplideSlide } from '@splidejs/react-splide';
const PublicationsSlider = ({ Publications }) => {
  // console.log("Publications in slider",Publications)
  // const [modalShow, setmodalShow] = useState(false);
  const [showPublication, setshowPublication] = useState({});
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
            type     : 'loop',
            autoWidth: true,
            focus: 0,
            gap    : '1rem',
            rewind: true,
           
          }}
          aria-label="My Favorite Images"
        >
          {Publications &&
            Publications.data.map((publication, index) => {
              //console.log("My publication",publication);
              return (
                <SplideSlide key={index}>
                 
                  <Link href={publication.attributes.File.data.attributes.url} target="_blank" >
                    <Image
                    width={300}
                    height={350}
                      src={publication.attributes.cover.data.attributes.formats.small.url}
                      data-src="../../assets/img/400x340/img1.jpg"
                      alt="Image description"
                    />
                  </Link>
                </SplideSlide>
              );
            })}
        </Splide>
        <p>
          <Link href="/publications">view more</Link>
        </p>
      </div>
    </div>
  );
};

export default PublicationsSlider;
