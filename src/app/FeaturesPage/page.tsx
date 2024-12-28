"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import lines from "@/Image/lines.svg";
import stars from "@/Image/stars.svg";
import gsap from "gsap";
import FeaturesCaresoul from "@/Component/Caresoul/featurespage";

import star from "@/Image/star.svg";
import mail from "@/Image/mail.svg";
import call from "@/Image/call.svg";
import boymail from "@/Image/boymail.svg";
import message1 from "@/Image/message1.svg";
import message2 from "@/Image/message2.svg";
import message3 from "@/Image/message3.svg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import AnimatedPlaceholderInput from "@/Component/AnimatedInputField";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const FeaturessPage = () => {
  const textRef = useRef(null);
  const linesRef = useRef(null);
  const imageRef = useRef(null);
  const linesRefimg = useRef(null);

  const inputIds = ["text", "email", "search"];
  const placeholders = ["Full Name", "Email", "Subject"];
  // const [currentInputIndex, setCurrentInputIndex] = useState(0);

  const placeholderText = "Email";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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
      text: "Streamline Your  Jewelry Business   Finances!",
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
      { width: "35%", duration: 2, delay: 4.9 } // Animate to 100% width over 2 seconds
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

  return (
    <div>
      <div className="p-3 h-full">
        <div className="max-w-screen-xl mx-auto container">
          <div className="bgfeaturespage lg:mx-10 my-10">
            <div className="lg:h-[240px] flex items-center justify-center lg:justify-start lg:pl-32">
              <h1 className="lg:text-[100px] text-[60px] font-extrabold uppercase text-[--orange]">
                features
              </h1>
            </div>
          </div>

          <div className="m-5">
            <div className="flex mb-5">
              <h1
                ref={textRef}
                className="font-extrabold uppercase text-font30 lg:w-[70%] h-[135px] lg:h-[220px] lg:text-chapter text-[--blackish] whitespace-pre-line"
              ></h1>
            </div>
            <div className="relative">
              <Image
                src={stars}
                alt="stars"
                className="absolute lg:-top-[265px] lg:left-[724px] lg:block hidden animate-bounce"
              />
              <Image
                ref={linesRefimg}
                src={lines}
                alt="lines"
                className="absolute lg:-top-[100px] lg:-left-[15px] lg:block hidden"
              />
            </div>
            <h1 className="font-normal text-font13 lg:text-font14 text-[--blackish] mb-3 lg:-mt-10">
              Manage inventory, track finances, and make data <br />
              driven decisions with our intuitive{" "}
              <span className="text-[--orange]">platform.</span>
            </h1>
          </div>

          {/* <div className="max-w-screen-xl mx-auto container">
          <div className="w-full h-full relative flex justify-center items-center">
            <div>
              <Image
                src={ani1}
                alt="ani1"
                className="flex justify-center items-center w-[321px] h-[464px]  ani1 absolute bottom-[6px] left-[480px]"
              />
              <Image
                src={ani2}
                alt="ani2"
                className="flex justify-center items-center w-[458px] h-[444px]  ani2 absolute bottom-[6px] right-[410px]"
              />
              <Image
                src={ani3}
                alt="ani3"
                className="flex justify-center items-center w-[541px] h-[416px]  ani3 absolute bottom-[6px] right-[370px]"
              />
              <Image
                src={ani4}
                alt="ani4"
                className="flex justify-center items-center w-[1031px] h-[460px]  ani4"
              />
            </div>
            <Image
              src={ani5}
              alt="ani5"
              className="ani5 absolute top-[86px] animate-ping-linear hidden lg:block"
            />
          </div>
          <h1 className="relative lg:-mt-12 font-extrabold uppercase text-font30 lg:text-low-chapter text-[--blackish] flex justify-center items-center">
            Swarnim for Enterprises
            <Image
              src={lines}
              alt="lines"
              className="absolute lg:-bottom-[10px] lg:right-[345px] lg:block hidden"
            />
          </h1>
          <div className="flex justify-center items-center lg:text-center mt-5">
            <h1 className="font-normal text-font13 lg:text-font14 text-[--blackish] mb-3 ">
              Our Jewelry Accounting Software{" "}
              <span className="text-[--orange]">“swarnim” </span> is designed
              specifically to meet the unique needs of jewelry businesses,
              offering <br className="hidden lg:block" /> comprehensive
              financial management solutions tailored to your industry. With a
              user-friendly interface and powerful features,
              <br className="hidden lg:block" />
              our software streamlines your financial processes, allowing you to
              focus more on creating stunning pieces and growing your
              <br className="hidden lg:block" /> business.
            </h1>
          </div>
        </div> */}
        </div>
      </div>
      <div className="pb-14 -mt-14">
        <FeaturesCaresoul />
      </div>

      {/* 2th Page */}
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
                  </form>

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

export default FeaturessPage;
