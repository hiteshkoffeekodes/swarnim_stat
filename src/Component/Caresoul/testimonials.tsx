
import Image from "next/image";
import React, { useRef, useState } from "react";
import blackline from "@/Image/blackline.svg";
import circle from "@/Image/circle.svg";
import goldencircle from "@/Image/goldencircle.svg";
import testimonialImage from "@/Image/testimonialImage.svg";
import fivestar from "@/Image/fivestar.svg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Fredi divya mulla",
    role: "Founder, ABC",
    image: testimonialImage,
    feedback: "Time and money saving",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut erat ligula ullamcorper quisque sed libero. Metus diam, ultricies et diam dapibus purus sed nunc accumsan. Tristique ultrices vestibulum vulputate curabitur nullam turpis. Diam sed id lorem sed.",
  },
  {
    name: "Jane prince Doe",
    role: "CEO, XYZ",
    image: testimonialImage,
    feedback: "Excellent Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, eros et luctus viverra, libero ligula facilisis felis, sit amet feugiat purus eros a lorem.",
  },
  {
    name: "Fredi  Allan",
    role: "Founder, ABC",
    image: testimonialImage,
    feedback: "Time and money saving",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut erat ligula ullamcorper quisque sed libero. Metus diam, ultricies et diam dapibus purus sed nunc accumsan. Tristique ultrices vestibulum vulputate curabitur nullam turpis. Diam sed id lorem sed.",
  },
  {
    name: "Jane viraj Doe",
    role: "CEO, XYZ",
    image: testimonialImage,
    feedback: "Excellent Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, eros et luctus viverra, libero ligula facilisis felis, sit amet feugiat purus eros a lorem.",
  },
  {
    name: "Fredi tatte latte Allan",
    role: "Founder, ABC",
    image: testimonialImage,
    feedback: "Time and money saving",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut erat ligula ullamcorper quisque sed libero. Metus diam, ultricies et diam dapibus purus sed nunc accumsan. Tristique ultrices vestibulum vulputate curabitur nullam turpis. Diam sed id lorem sed.",
  },
  {
    name: "Jane Doe",
    role: "CEO, XYZ",
    image: testimonialImage,
    feedback: "Excellent Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, eros et luctus viverra, libero ligula facilisis felis, sit amet feugiat purus eros a lorem.",
  },
  {
    name: "Fredi Allan",
    role: "Founder, ABC",
    image: testimonialImage,
    feedback: "Time and money saving",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut erat ligula ullamcorper quisque sed libero. Metus diam, ultricies et diam dapibus purus sed nunc accumsan. Tristique ultrices vestibulum vulputate curabitur nullam turpis. Diam sed id lorem sed.",
  },
  {
    name: "Jane Doe",
    role: "CEO, XYZ",
    image: testimonialImage,
    feedback: "Excellent Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, eros et luctus viverra, libero ligula facilisis felis, sit amet feugiat purus eros a lorem.",
  },
];

const TestimonialsCaresoul = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeButton, setActiveButton] = useState(0);

  // Positions for the buttons
  const positions = [
    "left-[18%]",
    "left-[28%]",
    "left-[38%]",
    "left-[48%]",
    "right-[38%]",
    "right-[28%]",
    "right-[18%]",
  ];

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_: number, next: number) => setActiveButton(next % positions.length), // Sync active button
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

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className="mx-[18px]">
      <div className="relative mt-14">
        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="slick-slide py-3">
              <div className="bg-[--white] w-[345px] lg:w-[480px] border border-[--bordercolor] rounded-[10px]">
                <div className="flex gap-5 lg:h-[200px] w-full p-6 items-center">
                  <div className="relative justify-center items-center">
                    <Image
                      src={goldencircle}
                      alt="goldencircle"
                      className="max-w-[200px]"
                    /> 
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name}'s image`}
                      className="absolute left-[5px] top-[5px]"
                    />
                  </div>
                  <div className="border-l border-[--golden] pl-5">
                    <h1 className="text-font12 font-bold text-[--blackish]">
                      {testimonial.name}
                    </h1>
                    <h1 className="text-[6px] font-normal text-[--blackish] mb-1">
                      {testimonial.role}
                    </h1>
                    <Image src={fivestar} alt="fivestar" className="" />
                    <h1 className="text-font12 font-bold text-[--blackish] my-1">
                      {`“${testimonial.feedback}”`}
                    </h1>
                    <h1 className="text-font10 font-normal">
                      {testimonial.description
                        .split(" ")
                        .slice(0, 14)
                        .join(" ")}
                      ...
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation Buttons */}
        <div className="lg:flex justify-center items-center mt-20 hidden">
          <Image src={blackline} alt="blackline" className="w-[80%]" />
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
              width={44}
              height={44}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCaresoul;


// import Image from "next/image";
// import React from "react";
// // import testimonialImage from "@/Image/testimonialImage.svg";
// // import goldencircle from "@/Image/goldencircle.svg";
// import blackline from "@/Image/blackline.svg";
// import circle from "@/Image/circle.svg";
// import goldencircle from "@/Image/goldencircle.svg";
// // import fivestar from "@/Image/fivestar.svg";

// const TestimonialsCaresoul = () => {
//   return (
//     <div className=" py-40">
//       <div className="max-w-screen-xl mx-auto container relative">
//         <div className=" flex justify-center items-center">
//           <Image src={blackline} alt="blackline" />
//         </div>
//         <button>
//           <Image
//             src={circle}
//             alt="circle"
//             className="absolute left-[38%] bottom-1"
//           />
//         </button>
//         <button>
//           <Image
//             src={circle}
//             alt="circle"
//             className="absolute left-[28%] bottom-1"
//           />
//         </button>
//         <button>
//           <Image
//             src={circle}
//             alt="circle"
//             className="absolute left-[18%] bottom-1"
//           />
//         </button>
//         <button>
//           <Image
//             src={circle}
//             alt="circle"
//             className="absolute left-[48%] bottom-1"
//           />
//         </button>
//         <button>
//           <Image
//             src={circle}
//             alt="circle"
//             className="absolute right-[18%] bottom-1"
//           />
//         </button>
//         <button>
//           <Image
//             src={circle}
//             alt="circle"
//             className="absolute right-[28%] bottom-1"
//           />
//         </button>
//         <button>
//           <Image
//             src={circle}
//             alt="circle"
//             className="absolute right-[38%] bottom-1"
//           />
//         </button>
//       </div>

//       <Image
//         src={goldencircle}
//         alt="goldencircle"
//         className="w-[34px] h-[34px]"
//       />
//       {/* <div className="flex gap-5 ">
//         <div className="relative">
//           <Image src={goldencircle} alt="goldencircle" className="" />
//           <Image
//             src={testimonialImage}
//             alt="testimonialImage"
//             className="absolute left-[5px] top-[5px]"
//           />
//         </div>

//         <div>
//           <h1 className="text-font12 font-bold text-[--blackish]">
//             Fredi Allan
//           </h1>
//           <h1 className="text-[6px] font-normal text-[--blackish]">
//             Founder, ABC
//           </h1>
//           <Image src={fivestar} alt="fivestar" className="" />
//           <h1 className="text-font12 font-bold text-[--blackish]">
//             “Time and money saving”{" "}
//           </h1>
//           <h1 className="border-l-2 px-20 border-[--golden] text-font10 font-normal">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut erat
//             ligula ullamcorper quisque sed libero. Metus diam, ultricies et diam
//             dapibus purus sed nunc accumsan. Tristique ultrices vestibulum
//             vulputate curabitur nullam turpis. Diam sed id lorem sed.
//           </h1>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default TestimonialsCaresoul;
