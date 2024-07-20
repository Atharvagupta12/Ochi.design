import React from "react";

function Featured() {
  return (
    <div className="w-full py-10 bg-zinc-100">
      <div className="w-full px-20 border-b-[1px] border-zinc-500 pb-20">
        <h1 className="text-[4vw] text-black font-medium tracking-tighter">
          Featured Projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10  py-10 items-center justify-center">
          <div className="cardcontainer relative  w-1/2 h-[70vh] ">
            <h1 className="text-black text-[16px] uppercase m-1 font-semibold flex items-center gap-2 ">
              <div className="w-2 h-2 bg-black rounded-full"></div> fayde
            </h1>
            <h1 className="absolute text-[#CDEA68] left-full -translate-x-1/3 top-1/3 translate-y-1/2 z-[9] text-8xl tracking-tighter">
              Fayde
            </h1>
            <div className="card w-full h-full rounded-2xl  overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
            <div className="buttons">
              <button className="px-4  mt-2 border-[1px] uppercase border-zinc-900 rounded-full tracking-tight  text-black ">
                Audit
              </button>
              <button className="px-4  m-2 border-[1px] uppercase border-zinc-900 rounded-full  tracking-tight text-black ">
                Copywritting
              </button>
              <button className="px-4  mt-2 border-[1px] uppercase border-zinc-900 rounded-full tracking-tight  text-black ">
                sales deck
              </button>
              <button className="px-4  m-2 border-[1px] uppercase border-zinc-900 rounded-full  tracking-tight text-black ">
                slide design
              </button>
            </div>
          </div>

          <div className="cardcontainer relative  w-1/2 h-[70vh] ">
            <h1 className="text-black text-[16px] uppercase m-1 font-semibold flex items-center gap-2 ">
              <div className="w-2 h-2 bg-black rounded-full"></div> Vise
            </h1>
            <h1 className="absolute text-[#CDEA68] right-full translate-x-1/3 top-1/2 -translate-y-1/2 z-[9] text-8xl tracking-tighter">
              Vise
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
            <div className="buttons">
              <button className="px-4  mt-2 border-[1px] uppercase border-zinc-900 rounded-full tracking-tight  text-black ">
                Agency
              </button>
              <button className="px-4  m-2 border-[1px] uppercase border-zinc-900 rounded-full  tracking-tight text-black ">
                Company presentation
              </button>
            </div>
          </div>
        </div>

        <div className="cards w-full flex gap-10 my-[5vh] py-10 items-center justify-center">
          <div className="cardcontainer relative  w-1/2 h-[70vh] ">
            <h1 className="text-black text-[16px] uppercase m-1 font-semibold flex items-center gap-2 ">
              <div className="w-2 h-2 bg-black rounded-full"></div> Trawa
            </h1>
            <h1 className="absolute text-[#CDEA68] left-full -translate-x-1/3 top-1/3 translate-y-1/2 z-[9] text-8xl tracking-tighter">
              Trawa
            </h1>
            <div className="card w-full h-full rounded-2xl  overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
                alt=""
              />
            </div>
            <div className="buttons">
              <button className="px-4  mt-2 border-[1px] uppercase border-zinc-900 rounded-full tracking-tight  text-black ">
                Brand Identity
              </button>
              <button className="px-4  m-2 border-[1px] uppercase border-zinc-900 rounded-full  tracking-tight text-black ">
                Design Research
              </button>
              <button className="px-4  mt-2 border-[1px] uppercase border-zinc-900 rounded-full tracking-tight  text-black ">
                Investor deck
              </button>
            </div>
          </div>

          <div className="cardcontainer relative  w-1/2 h-[70vh] ">
            <h1 className="text-black text-[16px] uppercase m-1 font-semibold flex items-center gap-2 ">
              <div className="w-2 h-2 bg-black rounded-full"></div> Premium
              Blend
            </h1>
            <h1 className="absolute text-[#CDEA68] right-full translate-x-1/3 top-1/2 -translate-y-1/2 z-[9] text-8xl tracking-tighter">
              Premium
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
                alt=""
              />
            </div>
            <div className="buttons">
              <button className="px-4  mt-2 border-[1px] uppercase border-zinc-900 rounded-full tracking-tight  text-black ">
                Branded template
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-16">
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
