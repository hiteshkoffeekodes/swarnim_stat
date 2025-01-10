"use client";
import Image from "next/image";
import React, { useState } from "react";
import call from "@/Image/call.svg";
import mail from "@/Image/mail.svg";
import contactusgirl from "@/Image/contactusgirl.svg";
import AnimatedPlaceholderInput from "@/Component/AnimatedInputField";

const ContactPage = () => {
  // -----------------------------
  const placeholders = ["Full Name", "Email", "Subject"];
  const [currentField, setCurrentField] = useState(0);

  const handleAnimationEnd = () => {
    setCurrentField((prev) => (prev + 1) % placeholders.length); // Move to the next field or restart
  };
  return (
    <div className="max-w-screen-xl mx-auto container p-2">
      <div className="grid md:grid-cols-12 relative">
        <div className="col-span-6">
          <h1 className="font-extrabold uppercase text-[24px] text-[--orange]">
            contact us{" "}
          </h1>
          <div className="max-w-[470px]">
            <h1 className="relative font-extrabold uppercase text-font18 leading-[29px] lg:text-font24 text-[--blackish]  ">
              We value your input <br className="hidden lg:block" /> share with
              us
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
            <div className="flex gap-5 ml-7 mb-7">
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
                  Address{" "}
                </h1>
                <h1 className="text-font20 font-extrabold text-[--blackish]">
                  info@swarnim.com{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="contactusbg absolute h-[361px] z-50 -ml-40"></div>
        <div className="col-span-6">
          <Image
            src={contactusgirl}
            alt="contactusgirl"
            className="lg:max-w-[567px] h-[455px]"
          />
        </div>
      </div>

      <div className="lg:py-10 p-3">
        <div className="max-w-screen-xl mx-auto container relative">
          <div className="bg-[--white] border border-[--bordercolor] shadow-lg rounded-[10px] mt-3 lg:-mt-5 lg:-mb-[89px]">
            <div className="grid md:grid-cols-2">
              {/* <div className="bg-[--white] border border-[--bordercolor] shadow-lg rounded-[10px] mt-3 lg:-mt-5 lg:-mb-[89px]"> */}
              <div className="justify-center items-center flex">
                <div className=" lg:max-w-[560px] w-full space-y-5 lg:py-5 m-2">
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

              <div className="flex justify-center items-center w-full p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13735.40987764886!2d73.12782123030716!3d25.11536597681942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39429451e5c8b98d%3A0xe63fbd0579e8e80d!2sJawai%20Bandh%2C%20Rajasthan%20306126!5e1!3m2!1sen!2sin!4v1736521371472!5m2!1sen!2sin"
                  width={"100%"}
                  max-width="566"
                  height="490"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
