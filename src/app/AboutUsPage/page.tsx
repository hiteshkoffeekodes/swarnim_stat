"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import lines from "@/Image/lines.svg";
import stars from "@/Image/stars.svg";
import singlestar from "@/Image/singlestar.svg";
import aboutuslogo from "@/Image/aboutuslogo.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import TestimonialsCaresoul from "@/Component/Caresoul/testimonials";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

import star from "@/Image/star.svg";
import boymail from "@/Image/boymail.svg";
import message1 from "@/Image/message1.svg";
import message2 from "@/Image/message2.svg";
import message3 from "@/Image/message3.svg";
import testimonialline from "@/Image/testimonialline.svg";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const textRef = useRef(null);
  const linesRef = useRef(null);
  const imageRef = useRef(null);
  const linesRefimg = useRef(null);
  const placeholderText = "Email";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const sectionSevenRef = useRef<HTMLDivElement>(null); // Ref for the parent div
  const imageTestiRef = useRef<HTMLImageElement>(null); // Ref for the Image component
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const textElement = textRef.current;

    gsap.to(textElement, {
      duration: 5,
      text: "Where Expertise Meets Innovation",
      ease: "power1.inOut",
    });
    // line animation
    gsap.fromTo(
      linesRef.current,
      { y: -100 },
      { y: 0, duration: 2, ease: "power2.out" }
    );

    // image animation
    gsap.fromTo(
      imageRef.current,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2.5,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    if (isFocused) {
      // If input is focused, show the full placeholder text and stop animation
      setDisplayedText(placeholderText);
      return;
    }

    let timeout: string | number | NodeJS.Timeout | undefined;

    if (isDeleting) {
      // Deleting the text
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        }, 100); // Speed for deleting
      } else {
        setIsDeleting(false);
      }
    } else {
      // Typing the text
      if (currentIndex < placeholderText.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + placeholderText[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 100); // Speed for typing
      } else {
        // Start deleting after a delay
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000); // Delay before deleting starts
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, placeholderText, isFocused]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionSevenRef.current) {
      observer.observe(sectionSevenRef.current);
    }

    return () => {
      if (sectionSevenRef.current) {
        observer.unobserve(sectionSevenRef.current);
      }
    };
  }, []);
  return (
    <div>
      <div className="p-3 h-full">
        <div className="max-w-screen-xl mx-auto container">
          <div className="bgfeaturespage lg:mx-10 my-10">
            <div className="lg:h-[240px] flex items-center justify-center lg:justify-start lg:pl-32">
              <h1 className="lg:text-[100px] text-[60px] font-extrabold uppercase text-[--orange]">
                About us
              </h1>
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto container ">
          <div className="lg:m-5 ">
            <div className="flex mb-5 ml-5">
              <h1
                ref={textRef}
                className="font-extrabold uppercase text-font30 lg:w-[70%] h-[135px] lg:h-[220px] lg:text-chapter text-[--blackish] whitespace-pre-line"
              ></h1>
            </div>
            <div className="relative">
              <Image
                src={stars}
                alt="stars"
                className="absolute lg:-top-[265px] lg:left-[674px] lg:block hidden animate-bounce"
              />
              <Image
                ref={linesRefimg}
                src={lines}
                alt="lines"
                className="absolute lg:-top-[100px] lg:left-[15px] lg:block hidden"
              />
            </div>
          </div>
          <div className="space-y-5 -mt-10">
            <h1 className="text-font14 text-[--blackish] font-normal text-justify mx-1 lg:mx-10">
              Lorem ipsum dolor sit amet consectetur. Ac ligula egestas bibendum
              amet quis vel commodo duis leo. Justo ornare congue lorem duis
              tempor. Ultrices vitae condimentum sit vitae. Risus ultrices
              viverra fermentum ac dapibus sagittis volutpat. Id dignissim
              volutpat mauris sed sapien morbi erat fringilla aliquet.
            </h1>
            <h1 className="text-font14 text-[--blackish] font-normal text-justify mx-1 lg:mx-10">
              Sollicitudin consectetur nisl leo cursus leo vitae. Sagittis in
              arcu sagittis velit vestibulum amet bibendum mollis. Vel risus
              diam fames aliquet et. Sit non ipsum mattis risus pellentesque
              amet felis ipsum tempor. Aliquet fringilla dignissim facilisis
              pellentesque quisque pellentesque nulla. Tortor ornare bibendum a
              in ac ullamcorper. Id in vel facilisis viverra porttitor.
              Consequat ultrices aliquet eget a id. Orci egestas nullam nunc
              sagittis. Suspendisse elementum faucibus tincidunt amet sit
              quisque tempor nulla. Et tincidunt sit nibh lorem a iaculis
              sagittis. Odio mi porttitor tellus proin etiam feugiat viverra.
              Pulvinar mauris cursus enim massa habitant semper sagittis. Nisi
              tellus pellentesque aliquet in.
            </h1>
            <h1 className="text-font14 text-[--blackish] font-normal text-justify mx-1 lg:mx-10">
              In in at neque cras rhoncus velit. Sagittis id odio facilisis
              posuere feugiat diam vitae. Nibh nullam nunc cras nibh rhoncus mi.
              Dolor et est cras ut. Sodales ac a adipiscing viverra sem elit
              convallis sollicitudin nunc. In augue risus molestie sem volutpat
              maecenas egestas quis.
            </h1>
            <h1 className="text-font14 text-[--blackish] font-normal text-justify mx-1 lg:mx-10">
              Semper eget risus sem a. Consectetur eget id eget in cursus.
              Suspendisse orci ipsum aliquet turpis aliquet. Varius eget nibh
              eget phasellus maecenas at nisl nunc. Faucibus ut tellus odio
              ornare non fringilla. Scelerisque ipsum leo mauris nulla dui
              rhoncus blandit vulputate enim. Duis gravida magna suspendisse
              nunc natoque. Et lectus at elementum luctus posuere sit massa.
              Erat facilisis ultricies faucibus in. Ornare nam sed odio
              consectetur eu nunc facilisi. Semper donec et nulla molestie.
            </h1>
          </div>
          <div className="pt-10">
            <div className="flex gap-6 items-center lg:ml-10 mb-3">
              <Image src={singlestar} alt="singlestar" />
              <h1 className="font-extrabold uppercase text-font30 lg:text-chapter text-[--blackish] ">
                Our Mission
              </h1>
            </div>
            <h1 className="text-font14 text-[--blackish] font-normal text-justify lg:mx-10">
              Lorem ipsum dolor sit amet consectetur. Ac ligula egestas bibendum
              amet quis vel commodo duis leo. Justo ornare congue lorem duis
              tempor. Ultrices vitae condimentum sit vitae. Risus ultrices
              viverra fermentum ac dapibus sagittis volutpat. Id dignissim
              volutpat mauris sed sapien morbi erat fringilla aliquet.
            </h1>
          </div>

          <div className="pt-10">
            <div className="flex gap-6 items-center lg:ml-10 mb-3">
              <Image src={singlestar} alt="singlestar" />
              <h1 className="font-extrabold uppercase text-font30 lg:text-chapter text-[--blackish] ">
                Our vision
              </h1>
            </div>
            <h1 className="text-font14 text-[--blackish] font-normal text-justify lg:mx-10">
              Lorem ipsum dolor sit amet consectetur. Ac ligula egestas bibendum
              amet quis vel commodo duis leo. Justo ornare congue lorem duis
              tempor. Ultrices vitae condimentum sit vitae. Risus ultrices
              viverra fermentum ac dapibus sagittis volutpat. Id dignissim
              volutpat mauris sed sapien morbi erat fringilla aliquet.
            </h1>
          </div>
        </div>
      </div>

      <div className="h-dvh bg-[--blackish] ">
        <div className="w-full flex justify-center h-full items-center">
          <div className="grid grid-cols-12 w-full h-full">
            <div className="col-span-2"></div>
            <div className="col-span-5">
              <div className="h-full flex justify-center items-center ">
                <div className=" max-w-screen-lg mx-auto container space-y-6">
                  <h1 className="font-extrabold text-font20 text-[--whitish] uppercase">
                    Our Milestones
                  </h1>
                  <Image src={aboutuslogo} alt="aboutuslogo" />
                  <h1 className="font-extrabold uppercase text-font30 lg:w-[70%] h-[135px] lg:h-[220px] lg:text-chapter leading-[52px] text-[--white]">
                    Key{" "}
                    <span className="text-[--orange]">
                      Turning <br />
                      Points
                    </span>{" "}
                    &
                    <br /> Achievements
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-span-5">
              <div className="h-full flex justify-center items-center ">
                <div className=" max-w-screen-lg mx-auto container space-y-6 -mt-10">
                  <h1 className="font-extrabold text-font20 text-[--whitish] uppercase">
                    Our Milestones
                  </h1>
                  <h1 className="font-extrabold uppercase text-font30 lg:w-[70%] lg:text-chapter leading-[52px] text-[--white]">
                    2022-2023
                  </h1>
                  <h1 className="font-normal uppercase text-font14 text-[--white] max-w-[400px]">
                    Lorem ipsum dolor sit amet consectetur. Ac ligula egestas
                    bibendum amet quis vel commodo duis leo. Justo ornare congue
                    lorem duis tempor. Ultrices vitae condimentum sit vitae.
                    Risus ultrices viverra fermentum ac dapibus sagittis
                    volutpat. Id dignissim volutpat mauris sed sapien morbi erat
                    fringilla aliquet.{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2th Page */}
      <div
        ref={sectionSevenRef}
        className={`lg:pt-10 p-3 ${
          inView
            ? "bg-gradient-to-t from-[--whitish] via-[--orangeback] to-[--whitish] animate-gradient"
            : ""
        }`}
      >
        <div>
          <div className="max-w-screen-xl mx-auto container mb-6 lg:mb-10">
            <div className="flex gap-7 justify-center items-center mb-3">
              <Image src={star} alt="star" />
              <h1 className="font-extrabold text-font20 text-[--blackish] capitalize">
                Testimonial
              </h1>
              <Image src={star} alt="star" />
            </div>
            <h1 className="relative font-extrabold uppercase text-font30 lg:text-low-chapter text-[--blackish] flex justify-center items-center">
              Our happy users
              <Image
                ref={imageTestiRef}
                src={testimonialline}
                alt="testimonialline"
                className="absolute lg:-bottom-[10px] lg:right-[455px] lg:block hidden"
              />
            </h1>
            <div className="flex justify-center items-center lg:text-center mt-5">
              <h1 className="font-normal text-font13 lg:text-font14 text-[--blackish] mb-3 ">
                Lorem ipsum dolor sit amet consectetur. Quis faucibus senectus
                velit mauris <br className="hidden lg:block" /> nullam. Auctor
                vel lorem sed in felis. Morbi dignissim facilisis arcu posuere.
              </h1>
            </div>
          </div>
        </div>
        {/* caresoul  */}
        <div
          ref={sectionSevenRef}
          className={` p-3 ${
            inView
              ? "bg-gradient-to- from-[--whitish] via-[--orangeback] to-[--whitish] animate-gradient"
              : ""
          }`}
        >
          <div className="pb-14 -mt-14 -mx-5  ">
            <TestimonialsCaresoul />
          </div>
        </div>
      </div>

      {/* 3th Page */}
      <div className="lg:py-10 p-3 mt-20 lg:-mb-[92px]">
        <div className="max-w-screen-xl mx-auto container relative">
          <div className="h-[7px] bg-[--black] w-[95%] absolute z-10 bottom-0 left-[2.5%]"></div>
          <div className="grid lg:grid-cols-2 bg-[--blackish]">
            <div className="relative p-4">
              <Image
                src={boymail}
                alt="boymail"
                className="lg:absolute -top-[104px] left-[80px] "
              />
              <div>
                <Image
                  src={message1}
                  alt="message1"
                  className="lg:absolute -top-[104px] right-[270px] hidden lg:block message1"
                />
                <Image
                  src={message2}
                  alt="message2"
                  className="lg:absolute -top-[62px] right-[202px] hidden lg:block message2"
                />
                <Image
                  src={message3}
                  alt="message3"
                  className="lg:absolute -top-[20px] right-[252px] hidden lg:block message3"
                />
              </div>
            </div>
            <div className="flex flex-col lg:text-right space-y-4 p-5">
              <h1 className="font-extrabold text-font24 text-[--white]">
                Subscribe to Newsletters
              </h1>

              <h1 className="font-normal text-font12 text-[--white]">
                Want to stay up to date? <br />
                Sign up for CargoKite is biannual update.
              </h1>
              <div className="lg:flex space-y-4 lg:space-y-0 lg:gap-3 justify-end items-center pb-4">
                <div className="custom-field one relative w-full">
                  <input
                    id="text"
                    type="text"
                    placeholder=" "
                    className="text-font14 rounded-[5px] !bg-[--white] font-medium border h-[50px] appearance-none w-full text-[--blackish] placeholder-transparent focus:outline-none p-1 px-2"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                  <span className="placeholder absolute font-medium top-[12px] left-[8px] text-[--blackish] text-font12 transition-all bg-[--white] px-1 pointer-events-none">
                    {displayedText}
                  </span>
                </div>
                <button className="relative overflow-hidden text-font13 lg:text-font14 font-bold text-[--white] hover:opacity-90 cursor-pointer uppercase border bg-[--orange] border-[--orange] rounded-md px-[46px] py-[13px]">
                  submit
                  <span className="absolute inset-0 bg-gradient-to-r hover:bg-none hover:animate-none from-[--orange] via-[--orangeback] to-[--orange] opacity-50 group-hover:animate-shimmer transition-all"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
