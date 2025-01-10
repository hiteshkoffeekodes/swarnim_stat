import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your image

import works1 from "@/Image/works1.svg";
import works2 from "@/Image/works2.svg";
import works3 from "@/Image/works3.svg";

const cardData = [
  {
    title: "Track & Manage Finances Effortlessly",
    description:
      "Stay on top of your jewelry business finances with a user-friendly interface and tools designed specifically for your industry.",
    image: works1,
  },
  {
    title: "Simplify Complex Accounting",
    description:
      "From inventory valuation to expense tracking, our software handles it all, giving you more time to focus on your craft.",
    image: works2,
  },
  {
    title: "Grow Your Business with Confidence",
    description:
      "Make informed financial decisions with accurate insights, freeing you to create stunning designs and scale your business.",
    image: works3,
  },
];

const FinanceSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="mx-[18px]">
      <Slider ref={sliderRef} {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="slick-slide py-3 -pt-10">
            <div className="border border-[--bordercolor] max-w-[280px] h-[310px] p-3 shadow-lg space-y-3">
              <h1 className="font-extrabold text-font14 text-[--blackish] max-w-[200px]">
                {card.title}
              </h1>
              <div className="min-h-[140px] flex justify-center items-center">
                <Image src={card.image} alt={`Card image ${index}`} />
              </div>
              <h1 className="font-normal text-font12 text-[--blackish] text-justify">
                {card.description}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FinanceSlider;
