"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import star from "@/Image/star.svg";
import stars from "@/Image/stars.svg";
import revstart from "@/Image/revstart.svg";
import rightstar from "@/Image/rightstar.svg";
import lines from "@/Image/lines.svg";
import mail from "@/Image/mail.svg";
import call from "@/Image/call.svg";
import testimonialline from "@/Image/testimonialline.svg";
import naniliti from "@/Image/naniliti.svg";
import Dashboardimage from "@/Image/Dashboardimage.svg";
import mailswarnim from "@/Image/mailswarnim.svg";
import boymail from "@/Image/boymail.svg";
// import mailswarnimcoinno from "@/Image/withoutcoin.svg";
import box from "@/Image/box.svg";
import whitebox from "@/Image/whitebox.svg";
import threedot from "@/Image/threedot.svg";
import features1 from "@/Image/features1.svg";
import features2 from "@/Image/features2.svg";
import features3 from "@/Image/features3.svg";
import gold from "@/Image/gold.svg";
import video from "@/Image/video.svg";
import goldenbox from "@/Image/goldenbox.svg";

import features1lapi from "@/Image/features1lapi.svg";
import chokri from "@/Image/chokri.svg";
import plantright from "@/Image/plantright.svg";
import plantleft from "@/Image/plantleft.svg";
import logofeatures1 from "@/Image/logofeatures1.svg";

import features2basic from "@/Image/features2basic.svg";
import features2display from "@/Image/features2display.svg";
import rightplant from "@/Image/rightplant.svg";

import ani1 from "@/Image/ani1.svg";
import ani2 from "@/Image/ani2.svg";
import ani3 from "@/Image/ani3.svg";
import ani4 from "@/Image/ani4.svg";
import ani5 from "@/Image/ani5coin.svg";

import message1 from "@/Image/message1.svg";
import message2 from "@/Image/message2.svg";
import message3 from "@/Image/message3.svg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import TestimonialsCaresoul from "@/Component/Caresoul/testimonials";
import AnimatedPlaceholderInput from "@/Component/AnimatedInputField";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const boxesData = [
  {
    id: 1,
    title: "Live Metals Rate Updates",
    description:
      "Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean ante ac enim mattis vestibulum vitae. Sit dolor id purus adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada quam turpis euismod blandit. Rhoncus proin aliquet risus massa pellentesque elit. Non eget.",
  },
  {
    id: 2,
    title: "Sales / Tax Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean ante ac enim mattis vestibulum vitae. Sit dolor id purus adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada quam turpis euismod blandit. Rhoncus proin aliquet risus massa pellentesque elit. Non eget.",
  },
  {
    id: 3,
    title: "Inventory Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean ante ac enim mattis vestibulum vitae. Sit dolor id purus adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada quam turpis euismod blandit. Rhoncus proin aliquet risus massa pellentesque elit. Non eget.",
  },
  {
    id: 4,
    title: "Custom Reporting",
    description:
      "Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean ante ac enim mattis vestibulum vitae. Sit dolor id purus adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada quam turpis euismod blandit. Rhoncus proin aliquet risus massa pellentesque elit. Non eget.",
  },
];

const boxesData1 = [
  {
    id: 5,
    title: "Live Metals Rate Updates",
    description:
      "Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean ante ac enim mattis vestibulum vitae. Sit dolor id purus adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada quam turpis euismod blandit. Rhoncus proin aliquet risus massa pellentesque elit. Non eget.",
  },
  {
    id: 6,
    title: "Live Metals Rate Updates",
    description:
      "Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean ante ac enim mattis vestibulum vitae. Sit dolor id purus adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada quam turpis euismod blandit. Rhoncus proin aliquet risus massa pellentesque elit. Non eget.",
  },
  {
    id: 7,
    title: "Inventory Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean ante ac enim mattis vestibulum vitae. Sit dolor id purus adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada quam turpis euismod blandit. Rhoncus proin aliquet risus massa pellentesque elit. Non eget.",
  },
  {
    id: 8,
    title: "Custom Reporting",
    description:
      "Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean ante ac enim mattis vestibulum vitae. Sit dolor id purus adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada quam turpis euismod blandit. Rhoncus proin aliquet risus massa pellentesque elit. Non eget.",
  },
];

const FirstPages = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredIndexsec, setHoveredIndexsec] = useState<number | null>(null);
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const [showAni5, setShowAni5] = useState(false);

  const textRef = useRef(null);
  const linesRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null); // Ref for the parent div
  const sectionSevenRef = useRef<HTMLDivElement>(null); // Ref for the parent div
  const imageNaniRef = useRef<HTMLImageElement>(null); // Ref for the Image component
  const imageTestiRef = useRef<HTMLImageElement>(null); // Ref for the Image component

  const linesRefimg = useRef(null); // Create a reference for the lines image
  const linesImageRef = useRef<HTMLImageElement>(null); // Ref for the Image

  const placeholderText = "Email";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [inView, setInView] = useState(false);

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

  useEffect(() => {
    // Set up the GSAP animation
    gsap.fromTo(
      linesRefimg.current, // Target the image using the reference
      { width: "1%" }, // Starting width (1%)
      { width: "35%", duration: 2, delay: 4.9 } // Animate to 100% width over 2 seconds
    );
  }, []);

  // useEffect(() => {
  //   // GSAP animation for the image
  //   if (linesImageRef.current) {
  //     gsap.fromTo(
  //       linesImageRef.current, // Target the image
  //       { width: "1%" }, // Starting width
  //       { width: "23%", duration: 2, delay: 8.9 } // Animate to 35% width over 2 seconds
  //     );
  //   }
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the observed element is in view
        if (entries[0].isIntersecting) {
          // Trigger GSAP animation when secondDivRef is in view
          if (linesImageRef.current) {
            gsap.fromTo(
              linesImageRef.current,
              { width: "1%" }, // Starting width
              { width: "23%", duration: 3, delay: 3.9 } // Animate to 23% width
            );
          }
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (secondDivRef.current) {
      observer.observe(secondDivRef.current); // Observe the second div
    }

    return () => {
      if (secondDivRef.current) {
        observer.unobserve(secondDivRef.current); // Cleanup observer
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Trigger animation when the section is in view
          if (imageNaniRef.current) {
            gsap.fromTo(
              imageNaniRef.current,
              { width: "1%" }, // Starting width
              { width: "12%", duration: 3, delay: 0.5 } // Final state (fully visible)
            );
          }
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the parent div
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup observer
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Trigger animation when the section is in view
          if (imageTestiRef.current) {
            gsap.fromTo(
              imageTestiRef.current,
              { width: "1%" }, // Starting width
              { width: "12%", duration: 3, delay: 0.7 } // Final state (fully visible)
            );
          }
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionSevenRef.current) {
      observer.observe(sectionSevenRef.current); // Observe the parent div
    }

    return () => {
      if (sectionSevenRef.current) {
        observer.unobserve(sectionSevenRef.current); // Cleanup observer
      }
    };
  }, []);

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

  // useEffect(() => {
  //   const tl1 = gsap.timeline({
  //     defaults: { duration: 1.5, ease: "power3.out" },
  //   });

  //   tl1
  //     .fromTo(firstDivRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
  //     .call(() => setShowAni5(true)); // Trigger ani5 visibility after first div animation

  //   // Second page animations with ScrollTrigger
  //   const tl2 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: secondDivRef.current,
  //       start: "top center",
  //       toggleActions: "play none none none",
  //     },
  //   });

  //   tl2
  //     .fromTo(
  //       ".ani4",
  //       { y: -200, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 1.6 }
  //     )
  //     .fromTo(
  //       ".ani1",
  //       { y: -200, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 1.6 },
  //       "-=1"
  //     )
  //     .fromTo(
  //       ".ani2",
  //       { x: 200, opacity: 0 },
  //       { x: 0, opacity: 1, duration: 1.6 },
  //       "-=1"
  //     )
  //     .fromTo(
  //       ".ani3",
  //       { x: -200, opacity: 0 },
  //       { x: 0, opacity: 1, duration: 1.6 },
  //       "-=1"
  //     )
  //     .add(() => setShowAni5(true), "-=1.6"); // Trigger ani5 once all animations complete
  // }, []);

  // useEffect(() => {
  //   // First div animations
  //   gsap.fromTo(
  //     firstDivRef.current,
  //     { opacity: 0, y: 50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1.5,
  //       ease: "power3.out",
  //       onComplete: () => setShowAni5(true),
  //     }
  //   );

  //   // Second div animations with ScrollTrigger
  //   gsap.fromTo(
  //     secondDivRef.current,
  //     { opacity: 0, y: 50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 3,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: secondDivRef.current,
  //         start: "top center", // Animation starts when the div enters the viewport
  //         toggleActions: "play none none none", // Play animation once
  //         // markers: true,
  //       },
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.fromTo(
  //     ".ani4",
  //     { y: -200, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1.6 }
  //   )
  //     .fromTo(
  //       ".ani1",
  //       { y: -200, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 1.6 },
  //       "-=1"
  //     )
  //     .fromTo(
  //       ".ani2",
  //       { x: 200, opacity: 0 },
  //       { x: 0, opacity: 1, duration: 1.6 },
  //       "-=1"
  //     )
  //     .fromTo(
  //       ".ani3",
  //       { x: -200, opacity: 0 },
  //       { x: 0, opacity: 1, duration: 1.6 },
  //       "-=1"
  //     )
  //     .fromTo(
  //       ".ani5",
  //       { scale: 0, opacity: 0 },
  //       { scale: 1, opacity: 1, duration: 1.6 },
  //       "-=5" // Start this animation 1 second before the previous one ends
  //     )
  //     // Once the animation completes, show ani5
  //     .call(() => setShowAni5(true), [], "+=1"); // Delay showing ani5 by 1 second after the last animation
  // }, []);

  useEffect(() => {
    // Create the scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        // When the element is in view
        if (entries[0].isIntersecting) {
          // Start the animation
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
            .call(() => setShowAni5(true), [], "+=1"); // Delay showing ani5 by 1 second after the last animation

          // Unobserve once animation is triggered
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    // Start observing the div
    if (secondDivRef.current) {
      observer.observe(secondDivRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (secondDivRef.current) {
        observer.disconnect();
      }
    };
  }, []); // Empty dependency array to run once

  // ----1----
  useEffect(() => {
    // Fade-in animation
    gsap.from(".fade-in", {
      opacity: 0,
      y: 50,
      x: 50,
      duration: 2.0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".fade-in",
        start: "top center",
        // markers: true,
      },
    });

    // Slide-in animations
    gsap.from(".slide-in-left", {
      x: -200,
      opacity: 0,
      duration: 4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".slide-in-left",
        start: "top bottom",
      },
    });

    gsap.from(".slide-in-right", {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".slide-in-right",
        start: "top bottom",
      },
    });

    // Parallax effect
    gsap.to(".parallax", {
      y: -50,
      scrollTrigger: {
        trigger: ".parallax",
        start: "top bottom",
        scrub: true,
      },
    });
  }, []);

  // ----2----
  useEffect(() => {
    // Fade-in animation
    gsap.from(".fade-inn", {
      opacity: 0,
      y: 50,
      x: 50,
      duration: 2.0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".fade-inn",
        start: "top center",
        // markers: true,
      },
    });

    // Slide-in animations
    gsap.from(".slide-in-lefts", {
      x: -200,
      opacity: 0,
      duration: 4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".slide-in-lefts",
        start: "top bottom",
      },
    });

    gsap.from(".slide-in-rights", {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".slide-in-rights",
        start: "top bottom",
      },
    });

    // Parallax effect
    gsap.to(".parallax", {
      y: -50,
      scrollTrigger: {
        trigger: ".parallax",
        start: "top bottom",
        scrub: true,
      },
    });
  }, []);

  // ----3----
  useEffect(() => {
    // Fade-in animation
    gsap.from(".fade-innn", {
      opacity: 0,
      y: 50,
      x: 50,
      duration: 2.0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".fade-innn",
        start: "top center",
        // markers: true,
      },
    });

    // Slide-in animations
    gsap.from(".slide-in-leftss", {
      x: -200,
      opacity: 0,
      duration: 4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".slide-in-leftss",
        start: "top bottom",
      },
    });

    gsap.from(".slide-in-rightss", {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".slide-in-rightss",
        start: "top bottom",
      },
    });

    // Parallax effect
    gsap.to(".parallax", {
      y: -50,
      scrollTrigger: {
        trigger: ".parallax",
        start: "top bottom",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    // Animate the entire section
    gsap.from(".animated-section", {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".animated-section",
        start: "top 80%", // Animation starts when 80% of the div is in view
        end: "top 30%", // Ends at 30%
        toggleActions: "play none none reverse", // Play on scroll in and reverse on scroll out
      },
    });

    // Animate individual images (stars and video overlay)
    gsap.from(".star-left, .star-right", {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".animated-section",
        start: "top 80%",
      },
    });

    // Pulse effect for the gold image
    gsap.to(".gold-image", {
      scale: 1.03,
      repeat: -0.9,
      yoyo: true,
      duration: 1.7,
      ease: "sine.inOut",
    });
  }, []);

  useEffect(() => {
    // GSAP animation with ScrollTrigger for message1 (coming from the left)
    gsap.fromTo(
      ".message1",
      { x: "-100%" },
      {
        x: "0",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".message1", // Trigger the animation when this image comes into view
          start: "top 80%", // When the image is 80% from the top of the viewport
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // GSAP animation with ScrollTrigger for message2 (coming from the top)
    gsap.fromTo(
      ".message2",
      { y: "-100%" },
      {
        y: "0",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".message2",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // GSAP animation with ScrollTrigger for message3 (coming from the right)
    gsap.fromTo(
      ".message3",
      { x: "100%" },
      {
        x: "0",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".message3",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
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
    gsap.fromTo(
      ".box", // This targets each box
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0, // Final state
        stagger: 0.2, // Delay for each box to animate in
        scrollTrigger: {
          trigger: ".grid", // Targeting the section containing all boxes
          start: "top bottom", // Trigger when the section hits the viewport
          end: "bottom center",
          scrub: true, // Smoothly animates the scroll effect
          markers: false, // Set to true if you want to see the trigger markers
        },
      }
    );
  }, []);
  // ------------------------
  // const placeholders = ["Full Name", "Email", "Subject"];
  // const [currentField, setCurrentField] = useState(0);

  // const handleAnimationEnd = () => {
  //   setCurrentField((prev) => (prev + 1) % placeholders.length); // Move to next field or restart
  // };

  // -----------------------------
 const placeholders = ["Full Name", "Email", "Subject"];
 const [currentField, setCurrentField] = useState(0);

 const handleAnimationEnd = () => {
   setCurrentField((prev) => (prev + 1) % placeholders.length); // Move to the next field or restart
 };


  return (
    <section>
      {/* 1st Page */}
      <div ref={firstDivRef} className="lg:py-10 p-3">
        <div className="max-w-screen-xl mx-auto container relative">
          <div className="lg:flex w-full">
            <div className="items-center lg:max-w-[60%] w-full z-10">
              <h1 className="font-normal text-font13 lg:text-font14 text-[--blackish] mb-3">
                Manage inventory, track finances, and make data - <br />
                driven decisions with our intuitive{" "}
                <span className="text-[--orange]">platform.</span>
              </h1>
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
                  className="absolute lg:-top-[195px] lg:left-[484px] lg:block hidden animate-bounce"
                />
                <Image
                  ref={linesRefimg}
                  src={lines}
                  alt="lines"
                  className="absolute lg:-top-[100px] lg:-left-[15px] lg:block hidden"
                />
              </div>
              <div className="mb-12">
                <ul className="list-inside list-disc  flex">
                  <li className="listStyle  text-[--blackish] "></li>
                  <h1 className="text-[--blackish] font-medium lg:font-semibold text-font13 lg:text-font14">
                    Enhanced Sales Monitoring, Inventory Tracking
                  </h1>
                </ul>
                <ul className="list-inside list-disc  flex">
                  <li className="listStyle  text-[--blackish] "></li>
                  <h1 className="text-[--blackish] font-medium lg:font-semibold text-font13 lg:text-font14">
                    Simplified Expense Management
                  </h1>
                </ul>
                <ul className="list-inside list-disc  flex">
                  <li className="listStyle  text-[--blackish] "></li>
                  <h1 className="text-[--blackish] font-medium lg:font-semibold text-font13 lg:text-font14">
                    Customized Financial Reports
                  </h1>
                </ul>
                <ul className="list-inside list-disc  flex">
                  <li className="listStyle  text-[--blackish] "></li>
                  <h1 className="text-[--blackish] font-medium lg:font-semibold text-font13 lg:text-font14">
                    Live Metals Rate Updates
                  </h1>
                </ul>
              </div>

              {/* <button className="text-font13 lg:text-font14 font-bold text-[--white] hover:opacity-90 cursor-pointer uppercase border bg-[--orange] border-[--orange] rounded-md px-[33px] py-[13px]">
                get started
              </button> */}

              <button className="text-font13 lg:text-font14 font-bold text-[--white] hover:opacity-90 cursor-pointer uppercase border bg-[--orange] border-[--orange] rounded-md px-[33px] py-[13px] relative overflow-hidden group">
                Get Started
                <span className="absolute inset-0 bg-gradient-to-r hover:bg-none hover:animate-none from-[--orange] via-[--orangeback] to-[--orange] opacity-50 group-hover:animate-shimmer"></span>
              </button>
            </div>
            <div className=" w-full bghomepaage lg:-ml-96 py-10">
              <Image
                ref={imageRef}
                src={Dashboardimage}
                alt="Dashboardimage"
                className="lg:absolute lg:-right-[0px] lg:top-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Page */}
      <div ref={secondDivRef} className="p-3">
        <div className="max-w-screen-xl mx-auto container">
          <Image
            src={mailswarnim}
            alt="mailswarnim"
            className=" block lg:hidden"
          />
          <div className="hidden lg:block">
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
              {showAni5 && (
                <Image
                  src={ani5}
                  alt="ani5"
                  className="ani5 absolute top-[86px] w-[110px] h-[110px] animate-ping-linear hidden lg:block"
                />
              )}
            </div>
          </div>
          <h1 className="relative lg:-mt-2 font-extrabold uppercase text-font30 lg:text-low-chapter text-[--blackish] flex justify-center items-center">
            Swarnim for Enterprises
            <Image
              ref={linesImageRef}
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
        </div>
      </div>

      {/* 3rd Page */}
      <div className="lg:pb-10 p-3">
        <div className="max-w-screen-xl mx-auto container mb-6 lg:mb-10">
          <div className="flex gap-5 justify-center items-center">
            <Image src={star} alt="star" />
            <h1 className="font-extrabold text-font20 text-[--blackish] capitalize">
              Features Section
            </h1>
            <Image src={star} alt="star" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-8">
          {boxesData.map((boxData, index: number) => (
            <div
              key={boxData.id}
              className={`relative overflow-hidden border-[--bordercolor] max-w-[320px] w-full grid justify-start items-center border rounded-[10px] mb-5 lg:mb-0 mx-auto p-8 space-y-1 shadow-lg transition-transform duration-300 box`} // Add "box" class here
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out  ${
                  hoveredIndex === index
                    ? "bg-gradient-to-r from-[--white] to-[--orangeback] bg-[length:200%_100%] bg-[position:-100%_0] animate-moving-gradient"
                    : "bg-[--white]"
                }`}
              ></div>

              <div className="relative z-10 space-y-4">
                {hoveredIndex !== index ? (
                  <Image
                    src={box}
                    alt="box"
                    className="w-[60px] h-[60px] p-3 bg-[--whitish] rounded-md"
                  />
                ) : (
                  <Image
                    src={whitebox}
                    alt="whitebox"
                    className="w-[60px] h-[60px] p-3 bg-[--orange] rounded-md text-[--white]"
                  />
                )}
                <div className="flex gap-3 items-center">
                  <Image
                    src={threedot}
                    alt="threedot"
                    className="w-[4px] h-[22px]"
                  />
                  <h1 className="font-extrabold text-font14 text-[--blackish]">
                    {boxData.title}
                  </h1>
                </div>
                <h1 className="font-normal text-font10 text-[--blackish]">
                  {boxData.description}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-8">
          {boxesData1.map((boxData, index: number) => (
            <div
              key={boxData.id}
              className={`relative overflow-hidden border-[--bordercolor] max-w-[320px] w-full grid justify-start items-center border rounded-[10px] mb-5 lg:mb-0 mx-auto p-8 space-y-1 shadow-lg transition-transform duration-300 box`} // Add "box" class here
              onMouseEnter={() => setHoveredIndexsec(index)}
              onMouseLeave={() => setHoveredIndexsec(null)}
            >
              {/* Background Gradient Animation */}
              <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out  ${
                  hoveredIndexsec === index
                    ? "bg-gradient-to-r from-[--white] to-[--orangeback] bg-[length:200%_100%] bg-[position:-100%_0] animate-moving-gradient"
                    : "bg-[--white]"
                }`}
              ></div>

              {/* Content Overlay */}
              <div className="relative z-10 space-y-4">
                {/* Box Image */}
                {hoveredIndexsec !== index ? (
                  <Image
                    src={box}
                    alt="box"
                    className="w-[60px] h-[60px] p-3 bg-[--whitish] rounded-md"
                  />
                ) : (
                  <Image
                    src={whitebox}
                    alt="whitebox"
                    className="w-[60px] h-[60px] p-3 bg-[--orange] rounded-md text-[--white]"
                  />
                )}
                {/* Content */}
                <div className="flex gap-3 items-center">
                  <Image
                    src={threedot}
                    alt="threedot"
                    className="w-[4px] h-[22px]"
                  />
                  <h1 className="font-extrabold text-font14 text-[--blackish]">
                    {boxData.title}
                  </h1>
                </div>
                <h1 className="font-normal text-font10 text-[--blackish]">
                  {boxData.description}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-8">
          {boxesData.map((boxData, index: number) => (
            <div
              key={boxData.id}
              className={`relative overflow-hidden border-[--bordercolor] max-w-[320px] w-full grid justify-start items-center border rounded-[10px] mb-5 lg:mb-0 mx-auto p-8 space-y-1 shadow-lg transition-transform duration-300 ${
                hoveredIndex === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out  ${
                  hoveredIndex === index
                    ? "bg-gradient-to-r from-[--white] to-[--orangeback] bg-[length:200%_100%] bg-[position:-100%_0] animate-moving-gradient"
                    : "bg-[--white]"
                }`}
              ></div>

              <div className="relative z-10 space-y-4">
                {hoveredIndex !== index ? (
                  <Image
                    src={box}
                    alt="box"
                    className="w-[60px] h-[60px] p-3 bg-[--whitish] rounded-md"
                  />
                ) : (
                  <Image
                    src={whitebox}
                    alt="whitebox"
                    className="w-[60px] h-[60px] p-3 bg-[--orange] rounded-md text-[--white]"
                  />
                )}
                <div className="flex gap-3 items-center">
                  <Image
                    src={threedot}
                    alt="threedot"
                    className="w-[4px] h-[22px]"
                  />
                  <h1 className="font-extrabold text-font14 text-[--blackish]">
                    {boxData.title}
                  </h1>
                </div>
                <h1 className="font-normal text-font10 text-[--blackish]">
                  {boxData.description}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-8">
          {boxesData1.map((boxData, index: number) => (
            <div
              key={boxData.id}
              className={`relative overflow-hidden border-[--bordercolor] max-w-[320px] w-full grid justify-start items-center border rounded-[10px] mb-5 lg:mb-0 mx-auto p-8 space-y-1 shadow-lg transition-transform duration-300 ${
                hoveredIndexsec === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredIndexsec(index)}
              onMouseLeave={() => setHoveredIndexsec(null)}
            >
              <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out  ${
                  hoveredIndexsec === index
                    ? "bg-gradient-to-r from-[--white] to-[--orangeback] bg-[length:200%_100%] bg-[position:-100%_0] animate-moving-gradient"
                    : "bg-[--white]"
                }`}
              ></div>

              <div className="relative z-10 space-y-4">
                {hoveredIndexsec !== index ? (
                  <Image
                    src={box}
                    alt="box"
                    className="w-[60px] h-[60px] p-3 bg-[--whitish] rounded-md"
                  />
                ) : (
                  <Image
                    src={whitebox}
                    alt="whitebox"
                    className="w-[60px] h-[60px] p-3 bg-[--orange] rounded-md text-[--white]"
                  />
                )}
                <div className="flex gap-3 items-center">
                  <Image
                    src={threedot}
                    alt="threedot"
                    className="w-[4px] h-[22px]"
                  />
                  <h1 className="font-extrabold text-font14 text-[--blackish]">
                    {boxData.title}
                  </h1>
                </div>
                <h1 className="font-normal text-font10 text-[--blackish]">
                  {boxData.description}
                </h1>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* 4th Page */}
      <div className="lg:py-10 p-3 bg-[--white] lg:pb-80">
        <div className="max-w-screen-lg mx-auto container relative">
          <div className="grid lg:grid-cols-2 lg:mt-10 fade-in">
            <div className="bgfeatures relative h-full  slide-in-left">
              <Image
                src={features1}
                alt="features1"
                className="max-h-[420px] py-10 lg:ml-5 block lg:hidden"
              />

              <Image
                src={logofeatures1}
                alt="logofeatures1"
                className="absolute left-[155px] top-[118px] lg:ml-5 animate-bounce hidden lg:block"
              />
              <Image
                src={plantleft}
                alt="plantleft"
                className="absolute -left-[5px] top-[168px] lg:ml-5  hidden lg:block"
              />
              <Image
                src={plantright}
                alt="plantright"
                className="absolute right-[125px] top-[105px] lg:ml-5  hidden lg:block"
              />
              <Image
                src={chokri}
                alt="chokri"
                className="absolute left-[44px] top-[101px] lg:ml-5 hidden lg:block"
              />
              <Image
                src={features1lapi}
                alt="features1lapi"
                className="max-h-[420px] lg:ml-5 hidden lg:block"
              />
            </div>
            <div className="h-[300px] flex justify-center items-center text-start slide-in-right">
              <div className="">
                <h1 className="font-extrabold text-font16 lg:text-font24 text-[--orange] uppercase relative">
                  Simple to learn,
                  <br /> easier to use
                </h1>
                <Image
                  src={stars}
                  alt="stars"
                  className="absolute lg:top-[24px] lg:right-[230px] lg:block hidden"
                />
                <h1 className="font-normal text-font11 lg:text-font12 text-[--blackish] mt-5">
                  Our Jewelry Accounting Software “swarnim” is designed
                  specifically to meet the unique needs of jewelry businesses,
                  offering comprehensive financial management solutions tailored
                  to your industry. With a user-friendly interface and powerful
                  features, our software streamlines your financial processes,
                  allowing you to focus more on creating stunning pieces and
                  growing your business.
                </h1>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 lg:mt-10 fade-inn">
            <div className=" h-full lg:order-2 lg:ml-36 slide-in-lefts">
              <div className=" bgfeatures2 relative ">
                <Image
                  src={features2}
                  alt="features2"
                  className="max-h-[420px] py-10 block lg:hidden"
                />
                <Image
                  src={rightplant}
                  alt="rightplant"
                  className="hidden lg:block absolute right-[80px] -bottom-[288px] "
                />{" "}
                <Image
                  src={features2display}
                  alt="features2display"
                  className="hidden lg:block absolute right-[143px] z-30 animate-pulse top-[20px]"
                />{" "}
                <Image
                  src={features2basic}
                  alt="features2basic"
                  className="hidden lg:block absolute"
                />
              </div>
            </div>
            <div className="relative h-[300px] flex justify-center items-center text-start lg:order-1 slide-in-rights">
              <div className="">
                <Image
                  src={stars}
                  alt="stars"
                  className="absolute lg:top-[50px] lg:left-[335px] lg:block hidden"
                />
                <h1 className="font-extrabold text-font16 lg:text-font24 text-[--orange] uppercase">
                  Insightful, actionable &
                  <br /> customizable reports
                </h1>
                <h1 className="font-normal text-font11 lg:text-font12 text-[--blackish] mt-5">
                  Our Jewelry Accounting Software “swarnim” is designed
                  specifically to meet the unique needs of jewelry businesses,
                  offering comprehensive financial management solutions tailored
                  to your industry. With a user-friendly interface and powerful
                  features, our software streamlines your financial processes,
                  allowing you to focus more on creating stunning pieces and
                  growing your business.
                </h1>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 lg:mt-10 fade-innn">
            <div className="bgfeatures relative h-full slide-in-leftss">
              <Image
                src={features3}
                alt="features3"
                className="max-h-[420px] py-10 lg:ml-10"
              />
            </div>
            <div className=" flex justify-center items-center text-start slide-in-rightss">
              <div className="">
                <h1 className="font-extrabold text-font16 lg:text-font24 text-[--orange] uppercase relative">
                  Simple to learn,
                  <br /> easier to use
                </h1>
                <Image
                  src={stars}
                  alt="stars"
                  className="absolute lg:right-[220px]  lg:bottom-[240px] lg:block hidden"
                />
                <h1 className="font-normal text-font11 lg:text-font12 text-[--blackish] mt-5">
                  Our Jewelry Accounting Software “swarnim” is designed
                  specifically to meet the unique needs of jewelry businesses,
                  offering comprehensive financial management solutions tailored
                  to your industry. With a user-friendly interface and powerful
                  features, our software streamlines your financial processes,
                  allowing you to focus more on creating stunning pieces and
                  growing your business.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5th Page */}
      <div className="lg:py-10 p-3 lg:-mt-64">
        <div className="max-w-screen-xl mx-auto container relative">
          <div className="flex justify-center items-center animated-section">
            <div className="relative">
              {/* Left Star */}
              <Image
                src={revstart}
                alt="revstart"
                width={100}
                height={70}
                className="absolute lg:-top-[60px] lg:-left-[60px] lg:block hidden star-left"
              />

              {/* Gold Image */}
              <Image src={gold} alt="gold" className="gold-image" />

              {/* Right Star */}
              <Image
                src={rightstar}
                alt="rightstar"
                width={100}
                height={70}
                className="absolute lg:-top-[60px] lg:-right-[60px] lg:block hidden star-right"
              />

              {/* Video Overlay */}
              <Image
                src={video}
                alt="video"
                className="absolute top-0 right-0 w-full h-full p-3 lg:p-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 6th Page */}
      <div ref={sectionRef} className="lg:py-10 p-3 mt-10">
        <div className="max-w-screen-lg mx-auto container relative">
          <h1 className="relative lg:-mt-12 font-extrabold uppercase text-font30 lg:text-low-chapter text-[--blackish] flex justify-center items-center">
            Simplify Your Life and Grow
            <Image
              ref={imageNaniRef}
              src={naniliti}
              alt="naniliti"
              className="absolute lg:-bottom-[10px] lg:right-[205px]  lg:block hidden"
            />
          </h1>

          <div className="grid lg:grid-cols-2 gap-8 mt-7">
            <div className="space-y-8">
              <div className="flex gap-7  justify-center items-center text-left">
                <div className="relative min-w-[53px] h-full mt-4">
                  <Image
                    src={goldenbox}
                    alt="goldenbox"
                    width={53}
                    height={54}
                  />
                  <h1 className="absolute top-2 left-5 text-font24 font-normal bg-gradient-to-r from-[--golden] to-[--goldengradient] text-transparent bg-clip-text">
                    1.
                  </h1>
                </div>
                <h1 className="font-normal text-font11 lg:text-font14  text-[--blackish]">
                  Lorem ipsum dolor sit amet consectetur. Luctus ante enim amet
                  platea consequat. Imperdiet nunc aenean bibendum elementum
                  nulla porttitor. Magna elit egestas dui porttitor. Turpis
                  lectus risus quam.
                </h1>
              </div>
              <div className="flex gap-7  justify-center items-center text-left">
                <div className="relative min-w-[53px] h-full mt-4">
                  <Image
                    src={goldenbox}
                    alt="goldenbox"
                    width={53}
                    height={54}
                  />
                  <h1 className="absolute top-2 left-5 text-font24 font-normal bg-gradient-to-r from-[--golden] to-[--goldengradient] text-transparent bg-clip-text">
                    2.
                  </h1>
                </div>
                <h1 className="font-normal text-font11 lg:text-font14  text-[--blackish]">
                  Lorem ipsum dolor sit amet consectetur. Luctus ante enim amet
                  platea consequat. Imperdiet nunc aenean bibendum elementum
                  nulla porttitor. Magna elit egestas dui porttitor. Turpis
                  lectus risus quam.
                </h1>
              </div>
              <div className="flex gap-7  justify-center items-center text-left">
                <div className="relative min-w-[53px] h-full mt-4">
                  <Image
                    src={goldenbox}
                    alt="goldenbox"
                    width={53}
                    height={54}
                  />
                  <h1 className="absolute top-2 left-5 text-font24 font-normal bg-gradient-to-r from-[--golden] to-[--goldengradient] text-transparent bg-clip-text">
                    3.
                  </h1>
                </div>
                <h1 className="font-normal text-font11 lg:text-font14  text-[--blackish]">
                  Lorem ipsum dolor sit amet consectetur. Luctus ante enim amet
                  platea consequat. Imperdiet nunc aenean bibendum elementum
                  nulla porttitor. Magna elit egestas dui porttitor. Turpis
                  lectus risus quam.
                </h1>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex gap-7  justify-center items-center text-left">
                <div className="relative min-w-[53px] h-full mt-4">
                  <Image
                    src={goldenbox}
                    alt="goldenbox"
                    width={53}
                    height={54}
                  />
                  <h1 className="absolute top-2 left-5 text-font24 font-normal bg-gradient-to-r from-[--golden] to-[--goldengradient] text-transparent bg-clip-text">
                    4.
                  </h1>
                </div>
                <h1 className="font-normal text-font11 lg:text-font14  text-[--blackish]">
                  Lorem ipsum dolor sit amet consectetur. Luctus ante enim amet
                  platea consequat. Imperdiet nunc aenean bibendum elementum
                  nulla porttitor. Magna elit egestas dui porttitor. Turpis
                  lectus risus quam.
                </h1>
              </div>
              <div className="flex gap-7  justify-center items-center text-left">
                <div className="relative min-w-[53px] h-full mt-4">
                  <Image
                    src={goldenbox}
                    alt="goldenbox"
                    width={53}
                    height={54}
                  />
                  <h1 className="absolute top-2 left-5 text-font24 font-normal bg-gradient-to-r from-[--golden] to-[--goldengradient] text-transparent bg-clip-text">
                    5.
                  </h1>
                </div>
                <h1 className="font-normal text-font11 lg:text-font14  text-[--blackish]">
                  Lorem ipsum dolor sit amet consectetur. Luctus ante enim amet
                  platea consequat. Imperdiet nunc aenean bibendum elementum
                  nulla porttitor. Magna elit egestas dui porttitor. Turpis
                  lectus risus quam.
                </h1>
              </div>
              <div className="flex gap-7  justify-center items-center text-left">
                <div className="relative min-w-[53px] h-full mt-4">
                  <Image
                    src={goldenbox}
                    alt="goldenbox"
                    width={53}
                    height={54}
                  />
                  <h1 className="absolute top-2 left-5 text-font24 font-normal bg-gradient-to-r from-[--golden] to-[--goldengradient] text-transparent bg-clip-text">
                    6.
                  </h1>
                </div>
                <h1 className="font-normal text-font11 lg:text-font14  text-[--blackish]">
                  Lorem ipsum dolor sit amet consectetur. Luctus ante enim amet
                  platea consequat. Imperdiet nunc aenean bibendum elementum
                  nulla porttitor. Magna elit egestas dui porttitor. Turpis
                  lectus risus quam.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7th Page  */}
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
          <div className="pb-14 -mt-14">
            <TestimonialsCaresoul />
          </div>
        </div>
      </div>

      {/* 8th Page */}
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

                  {/* <form className="space-y-4">
                    <AnimatedPlaceholderInput
                      id="text"
                      placeholder="Full Name"
                      className="border-[--goldenborder]"
                    />

                    <AnimatedPlaceholderInput
                      id="email"
                      placeholder="Email"
                      className="border-[--goldenborder]"
                    />

                    <AnimatedPlaceholderInput
                      id="search"
                      placeholder="Subject"
                      className="border-[--goldenborder]"
                    />
                  </form> */}

                  {/* <form className="space-y-4">
                    {placeholders.map((placeholder, index) => (
                      <AnimatedPlaceholderInput
                        key={placeholder}
                        id={`input-${index}`}
                        placeholder={placeholder}
                        className="border-[--goldenborder]"
                        isActive={index === currentField} 
                        onAnimationEnd={handleAnimationEnd} 
                      />
                    ))}
                  </form> */}

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
                  </form>
                  {/* <form className="space-y-4">
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

      {/* 9th Page */}
      <div ref={firstDivRef} className="lg:py-10 p-3 mt-20 lg:-mb-[92px]">
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
    </section>
  );
};

export default FirstPages;
