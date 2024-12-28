"use client";
import React, { useState } from "react";
import Image from "next/image";
import headerlogo from "@/Image/headerlogo.svg";
import { MdArrowDropDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log("pathname::: ", pathname);

  const handleClick = () => {
    router.push("/AboutUsPage"); // Navigate to About Page
  };

  // Function to determine active page style
  const getActiveClass = (page: string) => {
    return pathname === page
      ? "text-[--orange] font-bold uppercase" // Active page style
      : "text-[--black] hover:text-[--orange] font-bold uppercase"; // Default style
  };

  return (
    <section className="footer-container bg-gradient-to-b from-[--orangebacksss] via-[--whitish] to-[--orangebacksss] animate-gradient hidden lg:block ">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-7 h-[90px]">
        <button onClick={() => router.push("/")} className="cursor-pointer">
          <Image src={headerlogo} alt="headerlogo" />
        </button>
        <div className="flex gap-5 items-center">
          <h1
            onClick={() => router.push("/")} // Navigate to Home
            className={`text-font12 ${getActiveClass("/")}`}
          >
            Home
          </h1>
          <h1
            onClick={() => router.push("/FeaturesPage")} // Navigate to Features
            className={`text-font12 ${getActiveClass("/FeaturesPage")}`}
          >
            Features
          </h1>
          <h1
            onClick={handleClick} // Navigate to About Us
            className={`text-font12 ${getActiveClass("/AboutUsPage")}`}
          >
            About Us
          </h1>
          <button className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase flex gap-1">
            Product
            <MdArrowDropDown className="text-font18 text-[--orange]" />
          </button>
          <h1
            onClick={() => router.push("/ContactUsPage")} // Navigate to Contact Us
            className={`text-font12 ${getActiveClass("/ContactUsPage")}`}
          >
            Contact Us
          </h1>
          <h1 className="text-font14 font-bold text-[--black] hover:text-[--white] hover:bg-[--orange] hover:border-[--orange] cursor-pointer uppercase border border-[--blackish] rounded-md px-[21px] py-[9px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Log In
          </h1>

          <h1 className="relative overflow-hidden text-font14 font-bold text-[--white] hover:opacity-90 cursor-pointer uppercase border bg-[--orange] border-[--orange] rounded-md px-[21px] py-[9px]">
            Get Started
            <span className="absolute inset-0 bg-gradient-to-r hover:bg-none hover:animate-none from-[--orange] via-[--orangeback] to-[--orange] opacity-50 group-hover:animate-shimmer"></span>
          </h1>
        </div>
      </div>
    </section>
  );
};


const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/AboutUsPage"); // Navigate to About Page
    onClose(); // Close the sidebar after navigating
  };

  return (
    <>
      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 w-full z-20 "
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 left-0 h-full w-[240px] bg-[--white] z-30 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 ">
          <Image
            onClick={() => router.push("/")}
            src={headerlogo}
            alt="headerlogo"
          />
          <button onClick={onClose} className="text-[--black] text-2xl">
            <IoMdClose />
          </button>
        </div>
        <nav className="flex flex-col gap-5 p-5">
          <h1
            onClick={() => router.push("/")} // Navigate to Home
            className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase"
          >
            Home
          </h1>
          <h1
            onClick={() => router.push("/FeaturesPage")} // Navigate to Features
            className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase"
          >
            Features
          </h1>
          <h1
            onClick={handleClick} // Navigate to About Us
            className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase"
          >
            About Us
          </h1>
          <button className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase flex gap-1">
            Product
            <MdArrowDropDown className="text-font18 text-[--orange]" />
          </button>
          <h1
            onClick={() => router.push("/ContactUsPage")} // Navigate to Contact Us
            className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase"
          >
            Contact Us
          </h1>
          <h1 className="text-font14 font-bold text-[--black] hover:text-[--white] hover:bg-[--orange] hover:border-[--orange] cursor-pointer uppercase border border-[--blackish] rounded-md px-[21px] py-[9px]">
            Log In
          </h1>
          <h1 className="text-font14 font-bold text-[--white] hover:opacity-90 cursor-pointer uppercase border bg-[--orange] border-[--orange] rounded-md px-[21px] py-[9px]">
            Get Started
          </h1>
        </nav>
      </div>
    </>
  );
};

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Sidebar Toggle Button (visible on screens smaller than lg) */}
      {!isSidebarOpen && (
        <div className="flex justify-between p-5 lg:hidden ">
          <Image src={headerlogo} alt="headerlogo" />

          <button
            className="block lg:hidden top-4 right-4 z-50 text-2xl text-[--black]"
            onClick={openSidebar}
          >
            <FiMenu />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Layout;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import headerlogo from "@/Image/headerlogo.svg";
// import { MdArrowDropDown } from "react-icons/md";
// import { FiMenu } from "react-icons/fi";
// import { IoMdClose } from "react-icons/io";
// import { useRouter } from "next/navigation";

// const Header = () => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push("/AboutUsPage"); // Navigate to About Page
//   };

//   return (
//     <section className="footer-container bg-gradient-to-b   from-[--orangebacksss] via-[--whitish] to-[--orangebacksss] animate-gradient hidden lg:block ">
//       <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-7 h-[90px]">
//         <button onClick={() => router.push("/")} className="cursor-pointer">
//           <Image src={headerlogo} alt="headerlogo" />
//         </button>
//         <div className="flex gap-5 items-center">
//           <h1
//             onClick={() => router.push("/")} // Navigate to Home
//             className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase"
//           >
//             Home
//           </h1>
//           <h1
//             onClick={() => router.push("/FeaturesPage")} // Navigate to Features
//             className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase"
//           >
//             Features
//           </h1>
//           <h1
//             onClick={handleClick} // Navigate to About Us
//             className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase"
//           >
//             About Us
//           </h1>
//           <button className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase flex gap-1">
//             Product
//             <MdArrowDropDown className="text-font18 text-[--orange]" />
//           </button>
//           <h1
//             onClick={() => router.push("/ContactUsPage")} // Navigate to Contact Us
//             className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase"
//           >
//             Contact Us
//           </h1>
//           <h1 className="text-font14 font-bold text-[--black] hover:text-[--white] hover:bg-[--orange] hover:border-[--orange] cursor-pointer uppercase border border-[--blackish] rounded-md px-[21px] py-[9px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//             Log In
//           </h1>

//           <h1 className="relative overflow-hidden text-font14 font-bold text-[--white] hover:opacity-90 cursor-pointer uppercase border bg-[--orange] border-[--orange] rounded-md px-[21px] py-[9px]">
//             Get Started
//             <span className="absolute inset-0 bg-gradient-to-r hover:bg-none hover:animate-none from-[--orange] via-[--orangeback] to-[--orange] opacity-50 group-hover:animate-shimmer"></span>
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Sidebar = ({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push("/AboutUsPage"); // Navigate to About Page
//     onClose(); // Close the sidebar after navigating
//   };

//   return (
//     <>
//       {/* Sidebar Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 w-full z-20 "
//           onClick={onClose}
//         ></div>
//       )}

//       {/* Sidebar Content */}
//       <div
//         className={`fixed top-0 left-0 h-full w-[240px] bg-[--white] z-30 transition-transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between p-5 ">
//           <Image
//             onClick={() => router.push("/")}
//             src={headerlogo}
//             alt="headerlogo"
//           />
//           <button onClick={onClose} className="text-[--black] text-2xl">
//             <IoMdClose />
//           </button>
//         </div>
//         <nav className="flex flex-col gap-5 p-5">
//           <h1
//             onClick={() => router.push("/")} // Navigate to Home
//             className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase"
//           >
//             Home
//           </h1>
//           <h1
//             onClick={() => router.push("/FeaturesPage")} // Navigate to Features
//             className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase"
//           >
//             Features
//           </h1>
//           <h1
//             onClick={handleClick} // Navigate to About Us
//             className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase"
//           >
//             About Us
//           </h1>
//           <button className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase flex gap-1">
//             Product
//             <MdArrowDropDown className="text-font18 text-[--orange]" />
//           </button>
//           <h1
//             onClick={() => router.push("/ContactUsPage")} // Navigate to Contact Us
//             className="text-font12 font-bold text-[--black] hover:text-[--orange] cursor-pointer uppercase"
//           >
//             Contact Us
//           </h1>
//           <h1 className="text-font14 font-bold text-[--black] hover:text-[--white] hover:bg-[--orange] hover:border-[--orange] cursor-pointer uppercase border border-[--blackish] rounded-md px-[21px] py-[9px]">
//             Log In
//           </h1>
//           <h1 className="text-font14 font-bold text-[--white] hover:opacity-90 cursor-pointer uppercase border bg-[--orange] border-[--orange] rounded-md px-[21px] py-[9px]">
//             Get Started
//           </h1>
//         </nav>
//       </div>
//     </>
//   );
// };

// const Layout = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const openSidebar = () => setSidebarOpen(true);
//   const closeSidebar = () => setSidebarOpen(false);

//   return (
//     <>
//       {/* Header */}
//       <Header />

//       {/* Sidebar Toggle Button (visible on screens smaller than lg) */}
//       {!isSidebarOpen && (
//         <div className="flex justify-between p-5 lg:hidden ">
//           <Image src={headerlogo} alt="headerlogo" />

//           <button
//             className="block lg:hidden top-4 right-4 z-50 text-2xl text-[--black]"
//             onClick={openSidebar}
//           >
//             <FiMenu />
//           </button>
//         </div>
//       )}

//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
//     </>
//   );
// };

// export default Layout;
