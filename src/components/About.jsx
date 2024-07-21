import React from "react";
import Image from "../assets/about2.png";


const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="" className="w-full  bg-[#CDEA68] text-black">
      <h1 className="md:text-[4vw] text-[6vw] md:p-20 p-10 font-medium tracking-tight md:leading-[4vw] leading-[6vw] ">
        Ochi is a strategic partner for fast-growing tech buisness that need to
        raise funds, sell product, explain complexing ideas, and hire great
        people.
      </h1>

      <div
        className=" border-t-[1px] text-white border-[#a1b562]  md:flex 
        items-center py-5 md:gap-80 md:px-20 px-10"
      >
        <div className="my-20 ">
          <div className="text-zinc-800 font-regular text-lg">
            <h1>What can you expect :</h1>
            <p className="pt-4 text-md tracking-tight md:w-[30vw]">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="pt-4 text-md tracking-tight md:w-[30vw]">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
          </div>
        </div>
        <div className="image md:w-[45vw]">
          <img src={Image} alt="" />
        </div>
      </div>

      <div className="w-full border-t-[1px] md:flex gap-40  py-16 md:px-20 px-10 border-[#a1b562]">
        <div className="md:w-1/2   ">
          <h1 className="md:text-[4vw] text-[7vw] font-medium tracking-tighter">Our Approach:</h1>
          <button className="md:px-10 px-5 py-4 mt-3 bg-zinc-900 rounded-full flex gap-4 items-center text-md uppercase text-white">
            Read more
            <div className="w-3 h-3  bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="md:w-1/2 h-[50vh] mt-5 rounded-3xl bg-[#b8cd6f]">
        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
