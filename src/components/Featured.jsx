import React from "react";

function Featured() {
  return (
    <div className="w-full py-10 bg-zinc-100">
      <div className="w-full px-20 border-b-[1px] border-zinc-500 pb-20">
        <h1 className="text-[4vw] text-black font-medium tracking-tighter">Featured Projects</h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-20  py-10 items-center justify-center">
          <div className="cardcontainer relative  w-1/2 h-[75vh] ">
          <h1 className="absolute text-[#CDEA68] left-full -translate-x-1/3 top-1/3 translate-y-1/2 z-[9] text-8xl tracking-tighter">Fayde</h1>
            <div className="card w-full h-full rounded-2xl  overflow-hidden ">
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
            </div>
          </div>

          <div className="cardcontainer relative  w-1/2 h-[75vh] ">
          <h1 className="absolute text-[#CDEA68] right-full translate-x-1/3 top-1/2 -translate-y-1/2 z-[9] text-8xl tracking-tighter">Vise</h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
