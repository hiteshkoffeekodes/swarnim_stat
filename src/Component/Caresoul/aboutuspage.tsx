import Image from "next/image";
import React, { useRef, useState } from "react";
import absoluteline from "@/Image/absoluteline.svg";
import circle from "@/Image/circle.svg";
import goldencircle from "@/Image/goldencircle.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AboutUsCaresoul = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeButton, setActiveButton] = useState(0);

  // Positions for the buttons
  const positions = [
    "-top-[60%]",
    "-top-[41%]",
    "-top-[21%]",
    "-top-[0%]",
    "bottom-[37%]",
    "bottom-[28%]",
    "bottom-[19%]",
  ];

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className="mx-[18px]">
      <div className="relative mt-14 ml-20">
        {/* Navigation Buttons */}
        <div className="-mt-10 ml-4 hidden lg:block">
          <Image src={absoluteline} alt="absoluteline" className="h-[720px]" />
        </div>

        {positions.map((position, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`absolute ${position} -bottom-[18px] hidden lg:block`}
          >
            <Image
              src={activeButton === index ? goldencircle : circle}
              alt={activeButton === index ? "goldencircle" : "circle"}
              width={34}
              height={34}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AboutUsCaresoul;
