import React from "react";
import { SlActionRedo } from "react-icons/sl";
import Image from "../assets/landing.png";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full h-full md:h-screen bg-zinc-900 pt-1">
      <div className="landing md:flex justify-center">
        <div className="textstructure md:mt-56 mt-40">
          <div className="masker">
            <h1
              className=" md:text-[7vw] text-[10vw] font-medium uppercase px-12 md:leading-[6vw] leading-[10vw] tracking-tighter
            "
            >
              We Create
            </h1>
          </div>
          <div className="masker flex">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "8vw" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className="w-[8vw] md:h-[5vw] h-[8vw] mt-3 ml-12 md:ml-16 rounded-md bg- bg-orange-500"
            ></motion.div>
            <h1
              className="md:text-[7vw] text-[10vw] font-medium uppercase  px-2 md:leading-[6vw] leading-[10vw] tracking-tighter
            "
            >
              Eye-Opening
            </h1>
          </div>
          <div className="masker">
            <h1
              className="md:text-[7vw] text-[10vw] font-medium uppercase  px-12 md:leading-[6vw] leading-[10vw] tracking-tighter
            "
            >
              Presentations
            </h1>
          </div>
        </div>

        <div className="image flex justify-center md:py-[11vh]  ">
          <img className="w-[80vw] md:w-full" src={Image} alt="Image" />
        </div>
      </div>
      <div
        className="border-t-2 text-white border-zinc-800 md:flex
       justify-between items-start py-5 md:px-24  px-10"
      >
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light py-3 leading-none px-1 ">{item}</p>
        ))}
        <div className="start flex gap-4">
          <div
            className="px-4 py-1 text-md border-[2px] border-zinc-600   
          rounded-full cursor-pointer uppercase "
          >
            Start The Project
          </div>
          <div
            className="w-9 h-9 text-[20px] border-[2px] border-zinc-600 items center
             justify-center rounded-full py-1 px-2"
          >
            <SlActionRedo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
