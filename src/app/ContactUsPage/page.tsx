"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import gsap from "gsap"; // Import GSAP for animations

// import lines from "@/Image/lines.svg";
import ani5 from "@/Image/ani5coin.svg";
import ani1 from "@/Image/ani1.svg";
import ani2 from "@/Image/ani2.svg";
import ani3 from "@/Image/ani3.svg";
import ani4 from "@/Image/ani4.svg";

const ContactPage = () => {
  const [showAni5, setShowAni5] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".ani4",
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.6 }
    )
      .fromTo(
        ".ani1",
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.6 },
        "-=1"
      )
      .fromTo(
        ".ani2",
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.6 },
        "-=1"
      )
      .fromTo(
        ".ani3",
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.6 },
        "-=1"
      )
      .fromTo(
        ".ani5",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6 },
        "-=5" // Start this animation 1 second before the previous one ends
      )
      // Once the animation completes, show ani5
      .call(() => setShowAni5(true), [], "+=1"); // Delay showing ani5 by 1 second after the last animation
  }, []);

  return (
    <div>
      <div className="p-3">
        <div className="max-w-screen-xl mx-auto container">
          <div className="w-full h-full relative flex justify-center items-center">
            <div>
              <Image
                src={ani1}
                alt="ani1"
                className="flex justify-center items-center w-[321px] h-[464px] ani1 absolute bottom-[6px] left-[480px]"
              />
              <Image
                src={ani2}
                alt="ani2"
                className="flex justify-center items-center w-[458px] h-[444px] ani2 absolute bottom-[6px] right-[410px]"
              />
              <Image
                src={ani3}
                alt="ani3"
                className="flex justify-center items-center w-[541px] h-[416px] ani3 absolute bottom-[6px] right-[370px]"
              />
              <Image
                src={ani4}
                alt="ani4"
                className="flex justify-center items-center w-[1031px] h-[460px] ani4"
              />
            </div>
            {/* Conditionally render ani5 after the animations are completed */}
            {showAni5 && (
              <Image
                src={ani5}
                alt="ani5"
                className="ani5 absolute top-[86px] animate-ping-linear hidden lg:block"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
