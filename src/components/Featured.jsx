import { motion } from "framer-motion";
import React from "react";

function Featured() {
  
  return (
    <div data-scroll data-scroll-speed="-.1" className="w-full py-10 bg-zinc-100">
      <div className="w-full md:px-20 px-10 border-b-[1px] border-zinc-500 md:pb-20 pb-8">
        <h1 className="md:text-[4vw] text-[8vw] text-black font-medium tracking-tighter">
          Featured Projects
        </h1>
      </div>

      <div className="md:px-20 px-10">
        <div className="cards w-full md:flex gap-10  py-10 items-center justify-center ">
          <div className="cardcontainer relative md:w-1/2 md:h-[70vh] h-[50vh] hover:scale-105 transition ease-in duration-200 ">
            <h1 className="text-black text-[16px] uppercase m-1 font-semibold flex items-center gap-2 ">
              <div className="w-2 h-2 bg-black rounded-full"></div> fayde
            </h1>
           
            <div className="card w-full h-full rounded-2xl  overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
            <div className="buttons">
              <button className="px-4  m-2 border-[1px] uppercase border-zinc-900 rounded-full tracking-tight  text-black ">
                Audit
              </button>
              <button className="px-4  m-2 border-[1px] uppercase border-zinc-900 rounded-full  tracking-tight text-black ">
                Copywritting
              </button>
              <button className="px-4  m-2 border-[1px] uppercase border-zinc-900 rounded-full tracking-tight  text-black ">
                sales deck
              </button>
              <button className="px-4  m-2 border-[1px] uppercase border-zinc-900 rounded-full  tracking-tight text-black ">
                slide design
              </button>
            </div>
          </div>

          <div className="cardcontainer relative mt-40 md:mt-0 md:w-1/2 md:h-[70vh] h-[50vh] hover:scale-105 transition ease-in duration-200 ">
            <h1 className="text-black text-[16px] uppercase m-1 font-semibold flex items-center gap-2 ">
              <div className="w-2 h-2 bg-black rounded-full"></div> Vise
            </h1>
            
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
            <div className="buttons">
              <button className="px-4  m-2 border-[1px] uppercase border-zinc-900 rounded-full tracking-tight  text-black ">
                Agency
              </button>
              <button className="px-4  m-2 border-[1px] uppercase border-zinc-900 rounded-full  tracking-tight text-black ">
                Company presentation
              </button>
            </div>
          </div>
        </div>

        <div className="cards w-full md:flex gap-10 mt-20 md:mt-10 py-10 items-center justify-center">
          <div className="cardcontainer relative  md:w-1/2  md:h-[70vh] h-[50vh] hover:scale-105 transition ease-in duration-200 ">
            <h1 className="text-black text-[16px] uppercase m-1 font-semibold flex items-center gap-2 ">
              <div className="w-2 h-2 bg-black rounded-full"></div> Trawa
            </h1>
            
            <div className="card w-full h-full rounded-2xl  overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
                alt=""
              />
            </div>
            <div className="buttons">
              <button className="px-4  m-2 border-[1px] uppercase border-zinc-900 rounded-full tracking-tight  text-black ">
                Brand Identity
              </button>
              <button className="px-4  m-2 border-[1px] uppercase border-zinc-900 rounded-full  tracking-tight text-black ">
                Design Research
              </button>
              <button className="px-4  m-2 border-[1px] uppercase border-zinc-900 rounded-full tracking-tight  text-black ">
                Investor deck
              </button>
            </div>
          </div>

          <div className="cardcontainer relative md:mt-0 mt-52 md:w-1/2 md:h-[70vh] h-[50vh] hover:scale-105 transition ease-in duration-200 ">
            <h1 className="text-black text-[16px] uppercase m-1 font-semibold flex items-center gap-2 ">
              <div className="w-2 h-2 bg-black rounded-full"></div> Premium
              Blend
            </h1>
            
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
                alt=""
              />
            </div>
            <div className="buttons">
              <button className="px-4  m-2 border-[1px] uppercase border-zinc-900 rounded-full tracking-tight  text-black ">
                Branded template
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-16">
          <button className="px-10 py-4  bg-zinc-900 rounded-full flex gap-4 items-center text-md uppercase text-white">
            view all case studies
            <div className="w-3 h-3  bg-zinc-100 rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
