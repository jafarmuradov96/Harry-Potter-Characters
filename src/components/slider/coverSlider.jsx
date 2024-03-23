"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImg1 from '../../asset/img/slide-img1.webp'
import sliderImg2 from '../../asset/img/slide-img2.jpg'
import sliderImg3 from '../../asset/img/slide-img3.jpg'
import sliderImg4 from '../../asset/img/slide-img4.jpg'
import sliderImg5 from '../../asset/img/slide-img5.webp'
import Image from "next/image";

const CoverSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <Image src={sliderImg1} className="w-full h-[650px] object-cover" />
      </div>
      <div>
        <Image src={sliderImg2} className="w-full h-[650px] object-cover " />
      </div>
      <div>
        <Image src={sliderImg4} className="w-full h-[650px] object-cover " />
      </div>
      <div>
        <Image src={sliderImg5} className="w-full h-[650px] object-cover " />
      </div>
    </Slider>
  );
};

export default CoverSlider;
