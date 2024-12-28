import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import straightline from "@/Image/straightline.svg";
import circle from "@/Image/circle.svg";
import goldencircle from "@/Image/goldencircle.svg";
import featuresvideo from "@/Image/featuresvideo.svg";
import stars from "@/Image/stars.svg";
import features2 from "@/Image/features2.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const featuresData = [
  {
    title: "Insightful, actionable & customizable reports",
    description:
      "Our Jewelry Accounting Software 'swarnim' is designed specifically to meet the unique needs of jewelry businesses, offering comprehensive financial management solutions tailored to your industry. With a user-friendly interface and powerful features, our software streamlines your financial processes, allowing you to focus more on creating stunning pieces and growing your business.",
    image: features2,
    video: featuresvideo,
    benefits: [
      "Multi-User Access: Allow multiple team members to work collaboratively with role-based access.",
      "Integration with Other Tools: Seamlessly connect with CRM, HR, and inventory systems.",
      "Boosts productivity by enabling smooth task management in one interface.",
      "Leverage Automation: Use automated invoicing and bookkeeping to save time.",
      "Schedule Regular Reviews: Analyze financial reports frequently to stay informed.",
      "Use Integrated Solutions: Connect accounting software with other business tools for a unified system.",
      "Ensure Scalability: Choose software that evolves as your business grows.",
      "Educate Teams: Provide training for employees to utilize all features effectively.",
    ],
  },
  // You can add more items here to simulate the "infinite scroll"
];

const AboutUsCaresoul = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeButton, setActiveButton] = useState(0);
  const [visibleFeatures, setVisibleFeatures] = useState(
    featuresData.slice(0, 3)
  ); // Initial visible items

  // Positions for the buttons
  const positions = [
    "-top-[80%]",
    "-top-[61%]",
    "-top-[43%]",
    "-top-[25%]",
    "bottom-[51%]",
    "bottom-[42%]",
    "bottom-[33%]",
  ];

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
    sliderRef.current?.slickGoTo(index);
  };

  const loadMoreFeatures = () => {
    // Simulate the loading of new features when the user scrolls
    const nextFeatures = featuresData.slice(
      visibleFeatures.length,
      visibleFeatures.length + 3
    );
    setVisibleFeatures((prev) => [...prev, ...nextFeatures]);
  };

  // Handle scroll event to load more content
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      loadMoreFeatures(); // Load more features when the user reaches the bottom
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleFeatures]);

  return (
    <div className="mx-[18px]">
      <div className="relative mt-14">
        <div className="grid lg:grid-cols-12">
          <div className="col-span-3 ml-28">
            {/* Navigation Buttons */}
            <div className="mt-5 ml-5 hidden lg:block">
              <Image src={straightline} alt="straightline" />
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
          <div className="col-span-9 border border-r-0 border-[--black] -mr-4">
            {visibleFeatures.map((feature, index) => (
              <div key={index} className="relative">
                <div className="grid lg:grid-cols-12 lg:pl-14 pt-5">
                  <div className="col-span-6 lg:order-2">
                    <div className="h-full slide-in-lefts">
                      <div className="bgfeatures2 relative p-5 ml-20">
                        <Image
                          src={feature.image}
                          alt="feature"
                          className="max-h-[420px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 mb-5 pl-5 lg:pl-0">
                    <div className="relative py-3 lg:h-[300px] flex justify-center items-center text-start lg:order-1 slide-in-rights">
                      <div>
                        <Image
                          src={stars}
                          alt="stars"
                          className="absolute lg:top-[22px] lg:left-[335px] lg:block hidden"
                        />
                        <h1 className="font-extrabold text-font16 lg:text-font24 text-[--orange] uppercase">
                          {feature.title}
                        </h1>
                        <h1 className="font-normal text-font11 lg:text-font12 text-[--blackish] mt-5">
                          {feature.description}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:mt-5 p-3 w-full">
                  <Image
                    src={feature.video}
                    alt="feature video"
                    className="border-4 lg:ml-14 border-[--blackish] block lg:hidden"
                  />
                  <Image
                    src={feature.video}
                    alt="feature video"
                    className="max-w-[900px] w-full mx-auto border-4 ml-10 border-[--blackish] hidden lg:block"
                  />
                </div>
                <div className="lg:ml-14 my-5 pl-5">
                  <h1 className="font-extrabold text-font16 lg:text-font24 text-[--orange] uppercase">
                    Benefits
                  </h1>
                  {feature.benefits.map((benefit, i) => (
                    <ul
                      key={i}
                      className="list-inside list-disc flex items-center"
                    >
                      <li className="listStyle text-[--blackish]"></li>
                      <h1 className="text-[--blackish] font-normal text-font13">
                        {benefit}
                      </h1>
                    </ul>
                  ))}
                </div>
                <button className="lg:ml-14 ml-5 mb-10 my-3 text-font13 lg:text-font14 font-bold text-[--white] hover:opacity-90 cursor-pointer uppercase border bg-[--orange] border-[--orange] rounded-md px-[41px] py-[9px]">
                  See Features
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCaresoul;
