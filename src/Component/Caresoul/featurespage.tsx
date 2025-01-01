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

const FeaturesCaresoul = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeButton, setActiveButton] = useState(0);
  const [visibleFeatures, setVisibleFeatures] = useState(
    featuresData.slice(0, 3)
  ); // Initial visible items

  // Positions for the buttons
  // const positions = [
  //   "-top-[80%]",
  //   "-top-[61%]",
  //   "-top-[43%]",
  //   "-top-[25%]",
  //   "bottom-[51%]",
  //   "bottom-[42%]",
  //   "bottom-[33%]",
  // ];

   const positions = [
     "-top-[75%]",
     "-top-[51%]",
     "-top-[28%]",
     "-top-[4%]",
     "bottom-[37%]",
     "bottom-[25%]",
     "bottom-[12%]",
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
            {/* <div className="mt-5 ml-5 hidden lg:block">
              <Image src={straightline} alt="straightline" />
            </div> */}
            <div className="mx-[18px]">
              <div className="relative mt-14 ml-20">
                <div className="-mt-10 ml-4 hidden lg:block">
                  <Image
                    src={straightline}
                    alt="straightline"
                    className="h-full"
                  />
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

            {/* {positions.map((position, index) => (
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
            ))} */}
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

export default FeaturesCaresoul;

// import Image from "next/image";
// import React, { useRef, useState } from "react";
// import straightline from "@/Image/straightline.svg";
// import circle from "@/Image/circle.svg";
// import goldencircle from "@/Image/goldencircle.svg";
// import featuresvideo from "@/Image/featuresvideo.svg";
// // import testimonialImage from "@/Image/testimonialImage.svg";
// // import fivestar from "@/Image/fivestar.svg";
// import Slider from "react-slick";
// import stars from "@/Image/stars.svg";
// import features2 from "@/Image/features2.svg";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const featuresData = [
//   {
//     title: "Insightful, actionable & customizable reports",
//     description:
//       "Our Jewelry Accounting Software 'swarnim' is designed specifically to meet the unique needs of jewelry businesses, offering comprehensive financial management solutions tailored to your industry. With a user-friendly interface and powerful features, our software streamlines your financial processes, allowing you to focus more on creating stunning pieces and growing your business.",
//     image: features2,
//     video: featuresvideo,
//     benefits: [
//       "Multi-User Access: Allow multiple team members to work collaboratively with role-based access.",
//       "Integration with Other Tools: Seamlessly connect with CRM, HR, and inventory systems.",
//       "Boosts productivity by enabling smooth task management in one interface.",
//       "Leverage Automation: Use automated invoicing and bookkeeping to save time.",
//       "Schedule Regular Reviews: Analyze financial reports frequently to stay informed.",
//       "Use Integrated Solutions: Connect accounting software with other business tools for a unified system.",
//       "Ensure Scalability: Choose software that evolves as your business grows.",
//       "Educate Teams: Provide training for employees to utilize all features effectively.",
//     ],
//   },
//   {
//     title: "Streamlined inventory management for your business",
//     description:
//       "Take control of your inventory with 'swarnim's' advanced tools. Easily manage stock levels, track materials, and ensure accurate records to optimize your inventory management process.",
//     image: features2,
//     video: featuresvideo,
//     benefits: [
//       "Real-time Inventory Updates: Monitor stock levels accurately at all times.",
//       "Stock Alerts: Receive notifications when inventory is running low.",
//       "Barcode Scanning: Streamline data entry and stock checks.",
//       "Centralized Data: Access inventory details across multiple locations.",
//       "Historical Data Analysis: Predict inventory needs based on past trends.",
//       "Bulk Imports: Add inventory items in large batches quickly.",
//       "Custom Tags: Organize and categorize inventory with ease.",
//       "Minimize Wastage: Track expiration dates to reduce waste.",
//     ],
//   },
//   {
//     title: "Efficient payroll and employee management",
//     description:
//       "Handle payroll and employee management with ease using 'swarnim'. Automate salary calculations, tax filings, and leave tracking to streamline HR operations.",
//     image: features2,
//     video: featuresvideo,
//     benefits: [
//       "Automated Payroll: Process salaries accurately and on time.",
//       "Tax Compliance: Ensure deductions and filings comply with regulations.",
//       "Leave Management: Simplify leave requests and approvals.",
//       "Employee Self-Service Portal: Empower employees to view their details.",
//       "Data Security: Protect sensitive employee information.",
//       "Performance Metrics: Analyze and track employee performance.",
//       "Integration with Accounting: Sync payroll data with accounting systems.",
//       "Flexible Benefits: Customize benefits according to employee needs.",
//     ],
//   },
//   {
//     title: "Advanced reporting and analytics for decision-making",
//     description:
//       "Make informed decisions with 'swarnim's' robust reporting tools. Gain valuable insights from detailed analytics, helping you identify trends and improve your business performance.",
//     image: features2,
//     video: featuresvideo,
//     benefits: [
//       "Customizable Reports: Tailor reports to meet your specific needs.",
//       "Data Visualization: Use graphs and charts for better analysis.",
//       "Export Options: Share reports in various formats like PDF and Excel.",
//       "Real-Time Insights: Access the latest data anytime.",
//       "KPI Tracking: Monitor key performance indicators for your business.",
//       "Trend Analysis: Identify patterns and make proactive decisions.",
//       "Automated Reports: Schedule reports to be generated and sent automatically.",
//       "Collaboration: Share insights with your team for aligned strategies.",
//     ],
//   },
//   {
//     title: "Seamless integration with other business tools",
//     description:
//       "Connect 'swarnim' with your favorite tools and platforms to create a unified system. Simplify your workflows and enhance productivity through seamless integration.",
//     image: features2,
//     video: featuresvideo,
//     benefits: [
//       "CRM Integration: Sync customer data for better engagement.",
//       "Accounting Tools: Connect with QuickBooks or similar software.",
//       "HR Systems: Manage employees and payroll efficiently.",
//       "E-commerce Platforms: Integrate with online stores for streamlined operations.",
//       "API Access: Build custom integrations tailored to your needs.",
//       "Single Sign-On (SSO): Simplify access with unified credentials.",
//       "Automation Tools: Automate repetitive tasks using integrations.",
//       "Third-Party Apps: Extend functionality with additional tools.",
//     ],
//   },
// ];

// const FeaturesCaresoul = () => {
//   const sliderRef = useRef<Slider | null>(null);
//   const [activeButton, setActiveButton] = useState(0);

//   // Positions for the buttons
//   const positions = [
//     "-top-[80%]",
//     "-top-[61%]",
//     "-top-[43%]",
//     "-top-[25%]",
//     "bottom-[51%]",
//     "bottom-[42%]",
//     "bottom-[33%]",
//   ];

//   //   const settings = {
//   //     arrows: false,
//   //     infinite: true,
//   //     speed: 500,
//   //     slidesToShow: 3,
//   //     slidesToScroll: 1,
//   //     centerMode: true,
//   //     centerPadding: "0",
//   //     autoplay: true,
//   //     autoplaySpeed: 3000,
//   //     beforeChange: (_: number, next: number) =>
//   //       setActiveButton(next % positions.length), // Sync active button
//   //     responsive: [
//   //       {
//   //         breakpoint: 1024,
//   //         settings: {
//   //           slidesToShow: 2,
//   //           centerMode: false,
//   //         },
//   //       },
//   //       {
//   //         breakpoint: 768,
//   //         settings: {
//   //           slidesToShow: 1,
//   //           centerMode: true,
//   //           centerPadding: "30px",
//   //         },
//   //       },
//   //       {
//   //         breakpoint: 480,
//   //         settings: {
//   //           slidesToShow: 1,
//   //           centerMode: false,
//   //         },
//   //       },
//   //     ],
//   //   };

//   const handleButtonClick = (index: number) => {
//     setActiveButton(index);
//     sliderRef.current?.slickGoTo(index);
//   };

//   return (
//     <div className="mx-[18px]">
//       <div className="relative mt-14">

//         <div className="grid lg:grid-cols-12">
//           <div className="col-span-3 ml-28 ">
//             {/* Navigation Buttons */}
//             <div className="mt-5 ml-5 hidden lg:block">
//               <Image src={straightline} alt="straightline" />
//             </div>

//             {positions.map((position, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleButtonClick(index)}
//                 className={`absolute ${position} -bottom-[18px] hidden lg:block`}
//               >
//                 <Image
//                   src={activeButton === index ? goldencircle : circle}
//                   alt={activeButton === index ? "goldencircle" : "circle"}
//                   width={44}
//                   height={44}
//                 />
//               </button>
//             ))}
//           </div>
//           <div className="col-span-9 border border-r-0 border-[--blackish] -mr-4">
//             {featuresData.map((feature, index) => (
//               <div key={index}>
//                 <div className="grid lg:grid-cols-12 lg:pl-14 pt-5">
//                   <div className="col-span-6 lg:order-2">
//                     <div className="h-full slide-in-lefts">
//                       <div className="bgfeatures2 relative p-5 ml-20">
//                         <Image
//                           src={feature.image}
//                           alt="feature"
//                           className="max-h-[420px]"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-6 mb-5 pl-5 lg:pl-0">
//                     <div className="relative py-3 lg:h-[300px] flex justify-center items-center text-start lg:order-1 slide-in-rights">
//                       <div>
//                         <Image
//                           src={stars}
//                           alt="stars"
//                           className="absolute lg:top-[22px] lg:left-[335px] lg:block hidden"
//                         />
//                         <h1 className="font-extrabold text-font16 lg:text-font24 text-[--orange] uppercase">
//                           {feature.title}
//                         </h1>
//                         <h1 className="font-normal text-font11 lg:text-font12 text-[--blackish] mt-5">
//                           {feature.description}
//                         </h1>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="lg:mt-5 p-3 w-full">
//                   <Image
//                     src={feature.video}
//                     alt="feature video"
//                     className="border-4 lg:ml-14 border-[--blackish] block lg:hidden"
//                   />
//                   <Image
//                     src={feature.video}
//                     alt="feature video"
//                     className="max-w-[900px] w-full mx-auto border-4 ml-10 border-[--blackish] hidden lg:block"
//                   />
//                 </div>
//                 <div className="lg:ml-14 my-5 pl-5">
//                   <h1 className="font-extrabold text-font16 lg:text-font24 text-[--orange] uppercase">
//                     Benefits
//                   </h1>
//                   {feature.benefits.map((benefit, i) => (
//                     <ul
//                       key={i}
//                       className="list-inside list-disc flex items-center"
//                     >
//                       <li className="listStyle text-[--blackish]"></li>
//                       <h1 className="text-[--blackish] font-normal text-font13">
//                         {benefit}
//                       </h1>
//                     </ul>
//                   ))}
//                 </div>
//                 <button className="lg:ml-14 ml-5 mb-10 my-3 text-font13 lg:text-font14 font-bold text-[--white] hover:opacity-90 cursor-pointer uppercase border bg-[--orange] border-[--orange] rounded-md px-[41px] py-[13px] relative overflow-hidden group">
//                   Get Demo
//                   <span className="absolute inset-0 bg-gradient-to-r hover:bg-none hover:animate-none from-[--orange] via-[--orangeback] to-[--orange] opacity-50 group-hover:animate-shimmer"></span>
//                 </button>
//               </div>
//             ))}
//           </div>
//           {/* <div className="col-span-9 border border-r-0 border-[--blackish] -mr-4">
//             <div className="grid lg:grid-cols-12 lg:pl-14 pt-5">
//               <div className="col-span-6 lg:order-2">
//                 <div className=" h-full  slide-in-lefts">
//                   <div className=" bgfeatures2 relative p-5 ml-20">
//                     <Image
//                       src={features2}
//                       alt="features2"
//                       className="max-h-[420px] "
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-span-6 mb-5 pl-5 lg:pl-0">
//                 <div className="relative py-3  lg:h-[300px] flex justify-center items-center text-start lg:order-1 slide-in-rights">
//                   <div className="">
//                     <Image
//                       src={stars}
//                       alt="stars"
//                       className="absolute lg:top-[22px] lg:left-[335px] lg:block hidden"
//                     />
//                     <h1 className="font-extrabold text-font16 lg:text-font24 text-[--orange] uppercase">
//                       Insightful, actionable &
//                       <br /> customizable reports
//                     </h1>
//                     <h1 className="font-normal text-font11 lg:text-font12 text-[--blackish] mt-5">
//                       Our Jewelry Accounting Software “swarnim” is designed
//                       specifically to meet the unique needs of jewelry
//                       businesses, offering comprehensive financial management
//                       solutions tailored to your industry. With a user-friendly
//                       interface and powerful features, our software streamlines
//                       your financial processes, allowing you to focus more on
//                       creating stunning pieces and growing your business.
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className=" lg:mt-5 p-3 w-full">
//               <Image
//                 src={featuresvideo}
//                 alt="featuresvideo"
//                 className="border-4 lg:ml-14 border-[--blackish] block lg:hidden"
//               />
//               <Image
//                 src={featuresvideo}
//                 alt="featuresvideo"
//                 className="max-w-[900px] w-full mx-auto border-4 ml-10 border-[--blackish] hidden lg:block"
//               />
//             </div>
//             <div className="lg:ml-14 my-5 pl-5">
//               <h1 className="font-extrabold text-font16 lg:text-font24 text-[--orange] uppercase">
//                 Benefits
//               </h1>
//               <ul className="list-inside list-disc  flex items-center">
//                 <li className="listStyle  text-[--blackish] "></li>
//                 <h1 className="text-[--blackish] font-normal text-font13">
//                   Multi-User Access: Allow multiple team members to work
//                   collaboratively with role-based access.
//                 </h1>
//               </ul>
//               <ul className="list-inside list-disc  flex items-center">
//                 <li className="listStyle  text-[--blackish] "></li>
//                 <h1 className="text-[--blackish] font-normal text-font13">
//                   Integration with Other Tools: Seamlessly connect with CRM, HR,
//                   and inventory systems.
//                 </h1>
//               </ul>
//               <ul className="list-inside list-disc  flex items-center">
//                 <li className="listStyle  text-[--blackish] "></li>
//                 <h1 className="text-[--blackish] font-normal text-font13">
//                   Boosts productivity by enabling smooth task management in one
//                   interface.
//                 </h1>
//               </ul>
//               <ul className="list-inside list-disc  flex items-center">
//                 <li className="listStyle  text-[--blackish] "></li>
//                 <h1 className="text-[--blackish] font-normal text-font13">
//                   Leverage Automation: Use automated invoicing and bookkeeping
//                   to save time.
//                 </h1>
//               </ul>
//               <ul className="list-inside list-disc  flex items-center">
//                 <li className="listStyle  text-[--blackish] "></li>
//                 <h1 className="text-[--blackish] font-normal text-font13">
//                   Schedule Regular Reviews: Analyze financial reports frequently
//                   to stay informed.
//                 </h1>
//               </ul>
//               <ul className="list-inside list-disc  flex items-center">
//                 <li className="listStyle  text-[--blackish] "></li>
//                 <h1 className="text-[--blackish] font-normal text-font13">
//                   Use Integrated Solutions: Connect accounting software with
//                   other business tools for a unified system.
//                 </h1>
//               </ul>
//               <ul className="list-inside list-disc  flex items-center">
//                 <li className="listStyle  text-[--blackish] "></li>
//                 <h1 className="text-[--blackish] font-normal text-font13">
//                   Ensure Scalability: Choose software that evolves as your
//                   business grows.
//                 </h1>
//               </ul>
//               <ul className="list-inside list-disc  flex items-center">
//                 <li className="listStyle  text-[--blackish] "></li>
//                 <h1 className="text-[--blackish] font-normal text-font13">
//                   Educate Teams: Provide training for employees to utilize all
//                   features effectively.
//                 </h1>
//               </ul>
//             </div>
//             <button className="lg:ml-14 ml-5 mb-10 my-3 text-font13 lg:text-font14 font-bold text-[--white] hover:opacity-90 cursor-pointer uppercase border bg-[--orange] border-[--orange] rounded-md px-[41px] py-[13px] relative overflow-hidden group">
//               Get Demo
//               <span className="absolute inset-0 bg-gradient-to-r hover:bg-none hover:animate-none from-[--orange] via-[--orangeback] to-[--orange] opacity-50 group-hover:animate-shimmer"></span>
//             </button>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturesCaresoul;
