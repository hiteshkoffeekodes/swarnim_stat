"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import lines from "@/Image/lines.svg";
// import stars from "@/Image/stars.svg";
import gsap from "gsap";
import testimonialline from "@/Image/testimonialline.svg";
import star from "@/Image/star.svg";
import mail from "@/Image/mail.svg";
import call from "@/Image/call.svg";
import lines from "@/Image/lines.svg";
import stars from "@/Image/stars.svg";
import featuresvideo from "@/Image/featuresvideo.svg";
import boymail from "@/Image/boymail.svg";
import worldlogo from "@/Image/worldlogo.svg";
import circlebroken from "@/Image/circlebroken.svg";
import rightpage from "@/Image/rightpage.svg";
import leftpageslider from "@/Image/leftpageslider.svg";
import leftchart from "@/Image/leftchart.svg";
import rightchart from "@/Image/rightchart.svg";
import message1 from "@/Image/message1.svg";
import message2 from "@/Image/message2.svg";
import message3 from "@/Image/message3.svg";
import works1 from "@/Image/works1.svg";
import works2 from "@/Image/works2.svg";
import works3 from "@/Image/works3.svg";
import arrowup from "@/Image/arrowup.svg";
import arrowdown from "@/Image/arrowdown.svg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import AnimatedPlaceholderInput from "@/Component/AnimatedInputField";
import TestimonialsCaresoul from "@/Component/Caresoul/testimonials";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const InventoryManagement = () => {
  const textRef = useRef(null);
  const linesRef = useRef(null);
  const imageRef = useRef(null);
  const linesRefimg = useRef(null);
  const imageTestiRef = useRef<HTMLImageElement>(null); // Ref for the Image component

  const [inView, setInView] = useState(false);
  console.log("setInView::: ", setInView);

  // const inputIds = ["text", "email", "search"];
  const placeholders = ["Full Name", "Email", "Subject"];
  // const [currentInputIndex, setCurrentInputIndex] = useState(0);

  const placeholderText = "Email";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [currentField, setCurrentField] = useState(0);

  // const handleAnimationComplete = () => {
  //   // Move to the next input when the current one finishes animating
  //   if (currentInputIndex < inputIds.length - 1) {
  //     setCurrentInputIndex((prev) => prev + 1);
  //   }
  // };

  useEffect(() => {
    const textElement = textRef.current;

    gsap.to(textElement, {
      duration: 5,
      text: "Insightful, actionable & customizable reports!",
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
    // Set up the GSAP animation
    gsap.fromTo(
      linesRefimg.current, // Target the image using the reference
      { width: "1%" }, // Starting width (1%)
      { width: "20%", duration: 2, delay: 4.9 } // Animate to 100% width over 2 seconds
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

  const handleAnimationEnd = () => {
    setCurrentField((prev) => (prev + 1) % placeholders.length); // Move to the next field or restart
  };

  return (
    <div>
      {/* 1st Page */}
      <div className="p-3 h-full lg:mb-40">
        <div className="max-w-screen-xl mx-auto container">
          {/* <div className="bgfeaturespage h-[100px] w-[390px] flex justify-center items-center mx-auto lg:my-10">
            <h1 className="font-extrabold flex justify-center items-center uppercase text-[42px] text-[--orange]">
              Features
            </h1>
          </div> */}
          <div className="">
            <div className="flex relative mb-5 justify-center items-center text-center">
              <h1
                ref={textRef}
                className="font-extrabold uppercase text-font30 lg:w-[70%] h-[135px] lg:h-[220px] lg:text-chapter text-[--blackish] whitespace-pre-line "
              ></h1>
              <Image
                src={stars}
                alt="stars"
                className="absolute lg:-top-[30px] lg:right-[230px] lg:block hidden animate-bounce"
              />
              <Image
                ref={linesRefimg}
                src={lines}
                alt="lines"
                className="absolute lg:top-[140px] lg:right-[315px] lg:block hidden"
              />
            </div>
            <div className="flex justify-center items-center lg:text-center mt-14 lg:-mt-14">
              <h1 className="font-normal text-font13 lg:text-font14 text-[--blackish] mb-5 max-w-[950px]">
                Our Jewelry Accounting Software{" "}
                <span className="text-[--orange]">“swarnim” </span> is designed
                specifically to meet the unique needs of jewelry businesses,
                offering comprehensive financial management solutions tailored
                to your industry. With a user-friendly interface and powerful
                features, our software streamlines your financial processes,
                allowing you to focus more on creating stunning pieces and
                growing your business.
              </h1>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <button className="text-font13 lg:text-font14 font-bold text-[--white] hover:opacity-90 cursor-pointer uppercase border bg-[--orange] border-[--orange] rounded-md px-[30px] py-[13px] relative overflow-hidden group">
                Book a demo{" "}
                <span className="absolute inset-0 bg-gradient-to-r hover:bg-none hover:animate-none from-[--orange] via-[--orangeback] to-[--orange] opacity-50 group-hover:animate-shimmer"></span>
              </button>{" "}
              <button className="text-font13 lg:text-font14 font-bold text-[--white] hover:opacity-90 cursor-pointer uppercase border bg-[--orange] border-[--orange] rounded-md px-[33px] py-[13px] relative overflow-hidden group">
                Get Started
                <span className="absolute inset-0 bg-gradient-to-r hover:bg-none hover:animate-none from-[--orange] via-[--orangeback] to-[--orange] opacity-50 group-hover:animate-shimmer"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2st Page */}
      <div className="bg-[--silver] w-full h-full lg:pb-20">
        <div className="max-w-screen-lg mx-auto container">
          <div className="flex justify-center items-center relative p-2">
            <Image
              src={featuresvideo}
              alt="featuresvideo"
              className="border-[4px] border-black lg:-mt-28"
            />
            <div className="hidden lg:block">
              <Image
                src={worldlogo}
                alt="worldlogo"
                className="absolute -top-[90px] left-[30px] "
              />
              <Image
                src={circlebroken}
                alt="circlebroken"
                className="absolute -top-[140px] right-[40px] "
              />
              <Image
                src={rightpage}
                alt="rightpage"
                className="absolute -top-[90px] -right-[50px] "
              />
              <Image
                src={leftpageslider}
                alt="leftpageslider"
                className="absolute top-[70px] -left-[55px] z-[1]"
              />
              <Image
                src={leftchart}
                alt="leftchart"
                className="absolute bottom-[70px] left-[60px] "
              />
              <Image
                src={rightchart}
                alt="rightchart"
                className="absolute bottom-[55px] right-[20px] "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto container pt-4 p-1">
        <div className="flex justify-center items-center text-center">
          <h1 className=" font-extrabold uppercase text-font30 lg:w-[70%]  lg:h-[140px] lg:text-chapter text-[--blackish] whitespace-pre-line ">
            how its works
          </h1>
        </div>
        <div className="flex justify-center items-center lg:text-center mt-4 lg:-mt-14">
          <h1 className="font-normal text-font13 lg:text-font14 text-[--blackish] mb-5 max-w-[450px]">
            Tailored jewelry accounting software to streamline finances and
            empower your business growth.
          </h1>
        </div>
      </div>

      <div className="lg:flex justify-between items-center  max-w-screen-lg mx-auto container lg:pt-20 relative p-2 space-y-3 lg:space-y-0">
        <div className="border border-[--bordercolor] lg:max-w-[240px] h-[310px] p-3 shadow-lg space-y-3">
          <h1 className="font-extrabold text-font14 text-[--blackish]">
            Track & Manage Finances Effortlessly
          </h1>
          <div className="h-[140px] flex justify-center items-center">
            <Image src={works1} alt="works1" />
          </div>
          <h1 className="font-normal text-font12 text-[--blackish] text-justify">
            Stay on top of your jewelry businesss finances with a user-friendly
            interface and tools designed specifically for your industry.{" "}
          </h1>
        </div>
        <Image
          src={arrowup}
          alt="arrowup"
          className="absolute hidden lg:block left-[300px]"
        />
        <div className="mt-40">
          <div className="border border-[--bordercolor] lg:max-w-[240px] h-[310px] p-3 shadow-lg space-y-3 lg:-mt-20">
            <h1 className="font-extrabold text-font14 text-[--blackish]">
              Simplify Complex Accounting{" "}
            </h1>
            <div className="h-[140px] flex justify-center items-center">
              <Image src={works2} alt="works2" />
            </div>
            <h1 className="font-normal text-font12 text-[--blackish] text-justify">
              From inventory valuation to expense tracking, our software handles
              it all, giving you more time to focus on your craft.
            </h1>
          </div>
        </div>

        <Image
          src={arrowdown}
          alt="arrowdown"
          className="absolute hidden lg:block right-[300px]"
        />

        <div className="border border-[--bordercolor] lg:max-w-[240px] h-[310px] p-3 shadow-lg space-y-3">
          <h1 className="font-extrabold text-font14 text-[--blackish]">
            Grow Your Business with Confidence{" "}
          </h1>
          <div className="h-[140px] flex justify-center items-center">
            <Image src={works3} alt="works3" />
          </div>
          <h1 className="font-normal text-font12 text-[--blackish] text-justify">
            Make informed financial decisions with accurate insights, freeing
            you to create stunning designs and scale your business.
          </h1>
        </div>
      </div>

      <div
        // ref={sectionSevenRef}
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
          // ref={sectionSevenRef}
          className={` p-3 ${
            inView
              ? "bg-gradient-to- from-[--whitish] via-[--orangeback] to-[--whitish] animate-gradient"
              : ""
          }`}
        >
          <div className="pb-14 -mt-14">
            <TestimonialsCaresoul />
          </div>
        </div>
      </div>
      {/* 3th Page */}
      <div className="lg:py-10 p-3">
        <div className="max-w-screen-xl mx-auto container relative">
          <div className="grid lg:grid-cols-2">
            <div className="max-w-[470px]">
              <div className="flex gap-7 items-center mb-5">
                <Image src={star} alt="star" />
                <h1 className="font-extrabold text-font20 text-[--blackish] capitalize">
                  Contact us
                </h1>
                <Image src={star} alt="star" />
              </div>
              <h1 className="relative font-extrabold uppercase text-font18 lg:text-font24 text-[--blackish]  ">
                We value your input <br className="hidden lg:block" /> share
                with us
              </h1>
              <div className=" mt-3">
                <h1 className="font-normal text-font10 lg:text-font12 text-[--blackish] mb-3 ">
                  Lorem ipsum dolor sit amet consectetur. Tristique sociis nunc
                  amet erat. Aenean magna lectus viverra eros nullam at ac. Et
                  auctor massa tellus vestibulum. Posuere facilisis sed nunc
                  elementum condimentum sed ultrices. Feugiat ultrices eu risus.
                </h1>
              </div>
              <div className="flex gap-5 my-7 ml-7">
                <div className="bg-[--orange] rounded-md w-[60px] h-[60px]">
                  <Image
                    src={call}
                    alt="call"
                    className="m-[13px] flex justify-center items-center"
                    width={36}
                    height={36}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-font12 font-semibold text-[--blackish]">
                    Phone
                  </h1>
                  <h1 className="text-font20 font-extrabold text-[--blackish]">
                    +91 123 456 3698{" "}
                  </h1>
                </div>
              </div>
              <div className="flex gap-5 ml-7">
                <div className="bg-[--orange] rounded-md w-[60px] h-[60px]">
                  <Image
                    src={mail}
                    alt="mail"
                    className="m-[13px] flex justify-center items-center"
                    width={36}
                    height={36}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-font12 font-semibold text-[--blackish]">
                    Email ID
                  </h1>
                  <h1 className="text-font20 font-extrabold text-[--blackish]">
                    info@swarnim.com
                  </h1>
                </div>
              </div>
            </div>

            <div className="bg-[--white] border border-[--bordercolor] shadow-lg rounded-[10px] mt-3 lg:-mt-5 lg:-mb-[89px]">
              <div className="justify-center items-center flex">
                <div className=" lg:max-w-[510px] w-full space-y-5 lg:py-5 m-2">
                  <h1 className="font-bold text-font22 text-[--blackish] lg:mt-5 mb-3 flex justify-center items-center">
                    Need More Help?
                  </h1>
                  <form className="space-y-4">
                    {placeholders.map((placeholder, index) => (
                      <AnimatedPlaceholderInput
                        key={placeholder}
                        id={`input-${index}`}
                        placeholder={placeholder}
                        className="border-[--goldenborder]"
                        isActive={index === currentField} // Activate animation only for the current field
                        onAnimationEnd={handleAnimationEnd} // Triggered when animation finishes
                      />
                    ))}
                  </form>{" "}
                  {/* <form className="space-y-4">
                    {inputIds.map((id, index) => (
                      <AnimatedPlaceholderInput
                        key={id}
                        id={id}
                        placeholder={placeholders[index]}
                        className="border-[--goldenborder]"
                        // isAnimating={index === currentInputIndex} // Animate only the focused input
                        // onAnimationComplete={handleAnimationComplete} // Handle when animation is complete
                      />
                    ))}
                  </form> */}
                  <textarea
                    id="message"
                    placeholder="Type a Message"
                    className="text-font14 h-[113px] rounded-[2px] font-medium border border-[--goldenborder] appearance-none w-full text-[--blackish] placeholder:text-[--blackish] placeholder:text-font12 focus:outline-none p-1 px-2"
                  />
                  <div className="flex justify-center items-center lg:pb-5 pb-2 mt-3">
                    <button className="relative overflow-hidden text-font13 lg:text-font14 font-bold text-[--white] hover:opacity-90 cursor-pointer uppercase border bg-[--orange] border-[--orange] rounded-md px-[55px] py-[13px]">
                      submit
                      <span className="absolute inset-0 bg-gradient-to-r hover:bg-none hover:animate-none from-[--orange] via-[--orangeback] to-[--orange] opacity-50 group-hover:animate-shimmer"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4th Page */}
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

              {/* <div>
                <Image
                  src={message1}
                  alt="message1"
                  className={`${styles.message1} lg:absolute -top-[104px] right-[270px]`}
                />
                <Image
                  src={message2}
                  alt="message2"
                  className={`${styles.message2} lg:absolute -top-[62px] right-[202px]`}
                />
                <Image
                  src={message3}
                  alt="message3"
                  className={`${styles.message3} lg:absolute -top-[20px] right-[252px]`}
                />
              </div> */}
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
                {/* <input
                  id="email"
                  type="text"
                  placeholder="Email"
                  className="text-font14 rounded-md max-w-[310px] font-medium border border-[--goldenborder] h-[50px] appearance-none w-full text-[--blackish] placeholder:text-[--blackish] placeholder:text-font12 focus:outline-none p-1 px-2"
                />{" "} */}
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
                {/* <div className="flex justify-center items-center lg:pb-5"> */}
                <button className="relative overflow-hidden text-font13 lg:text-font14 font-bold text-[--white] hover:opacity-90 cursor-pointer uppercase border bg-[--orange] border-[--orange] rounded-md px-[46px] py-[13px]">
                  submit
                  <span className="absolute inset-0 bg-gradient-to-r hover:bg-none hover:animate-none from-[--orange] via-[--orangeback] to-[--orange] opacity-50 group-hover:animate-shimmer transition-all"></span>
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
