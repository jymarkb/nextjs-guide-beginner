"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function ImageSlider() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <Image
            src="https://picsum.photos/400/200"
            alt="placeholder"
            height={400}
          />
        </div>
        <div>
          <Image
            src="https://picsum.photos/400/300"
            alt="placeholder"
            height={400}
          />
        </div>
        <div>
          <Image
            src="https://picsum.photos/400/250"
            alt="placeholder"
            height={400}
          />
        </div>
        <div>
          <Image
            src="https://picsum.photos/400/350"
            alt="placeholder"
            height={400}
          />
        </div>
      </Slider>
    </div>
  );
}
