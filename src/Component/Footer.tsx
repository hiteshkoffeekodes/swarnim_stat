import Image from "next/image";
import React from "react";
import footerlogo from "@/Image/footerlogo.svg";
import { FaWhatsapp } from "react-icons/fa6";
import {
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

// Add custom CSS for the gradient animation
const Footer = () => {
  return (
    <div className="footer-container bg-gradient-to-b  via-[--goldenborder] from-[--whitish] to-[--orangeback] lg:pt-[120px] lg:pb-[50px] py-[24px] animate-gradient">
      <div className="flex flex-col justify-center items-center text-center relative">
        <div className="flex justify-center items-center w-full h-full">
          <Image src={footerlogo} alt="footerlogo" className="" />
        </div>

        <div className="flex gap-4 my-5">
          <FaWhatsapp className="text-font22 hover:text-[--orange] text-[--blackish]" />
          <FaLinkedin className="text-font22 hover:text-[--orange] text-[--blackish]" />
          <FaInstagram className="text-font22 hover:text-[--orange] text-[--blackish]" />
          <FaTelegramPlane className="text-font22 hover:text-[--orange] text-[--blackish]" />
          <FaTwitter className="text-font22 hover:text-[--orange] text-[--blackish]" />
        </div>

        <h1 className="font-normal text-font12 lg:text-font16 text-[--blackish] mb-3">
          Privacy | Terms | Legal | Cookie Preferences
        </h1>
        <h1 className="font-normal text-font12 lg:text-font16 text-[--blackish] mb-3">
          ©2020 All Rights Reserved. Koffeekodes® is a registered trademark.
        </h1>
      </div>
    </div>
  );
};

export default Footer;

// import Image from "next/image";
// import React from "react";
// import footerlogo from "@/Image/footerlogo.svg";
// // import logo1 from "@/Image/logo1.svg";
// // import logo2 from "@/Image/logo2.svg";
// // import logo3 from "@/Image/logo3.svg";
// // import logo4 from "@/Image/logo4.svg";
// // import logo5 from "@/Image/logo5.svg";
// // import logo6 from "@/Image/logo6.svg";
// import { FaWhatsapp } from "react-icons/fa6";
// import {
//   FaInstagram,
//   FaLinkedin,
//   FaTelegramPlane,
//   FaTwitter,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="bg-[--white] lg:pt-[120px] lg:pb-[50px] py-[24px]">
//       <div className="flex flex-col justify-center items-center text-center relative ">
//         <div className=" flex justify-center items-center w-full h-full">
//           <Image src={footerlogo} alt="footerlogo " className="" />

//           {/* <Image
//             src={logo1}
//             alt="logo1"
//             className="lg:block hidden absolute top-[8px] left-[43.1%] animate-left-to-right"
//           />
//           <Image
//             src={logo2}
//             alt="logo2"
//             className="lg:block hidden absolute -top-[5px] left-[45.85%] animate-left-to-right"
//           />
//           <Image
//             src={logo3}
//             alt="logo3"
//             className="lg:block hidden absolute top-[17px] left-[49.2%] animate-left-to-right"
//           />
//           <Image
//             src={logo4}
//             alt="logo4"
//             className="lg:block hidden absolute top-[1px] left-[52%] animate-left-to-right"
//           />
//           <Image
//             src={logo5}
//             alt="logo5"
//             className="lg:block hidden absolute top-[17px] left-[53.2%] animate-left-to-right"
//           />
//           <Image
//             src={logo6}
//             alt="logo6"
//             className="lg:block hidden absolute top-[32%] left-[42.5%] animate-left-to-right"
//           /> */}
//         </div>

//         <div className="flex gap-4 my-5">
//           <FaWhatsapp className="text-font22 hover:text-[--orange] text-[--blackish]" />
//           <FaLinkedin className="text-font22 hover:text-[--orange] text-[--blackish]" />
//           <FaInstagram className="text-font22 hover:text-[--orange] text-[--blackish]" />
//           <FaTelegramPlane className="text-font22 hover:text-[--orange] text-[--blackish]" />
//           <FaTwitter className="text-font22 hover:text-[--orange] text-[--blackish]" />
//         </div>

//         <h1 className="font-normal text-font12 lg:text-font16 text-[--blackish] mb-3">
//           Privacy | Terms | Legal | Cookie Preferences
//         </h1>
//         <h1 className="font-normal text-font12 lg:text-font16 text-[--blackish] mb-3">
//           ©2020 All Rights Reserved. Koffeekodes® is a registered trademark.{" "}
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Footer;
