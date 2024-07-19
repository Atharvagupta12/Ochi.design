import React from "react";

const Eyes = () => {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="w-full relative h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute  flex gap-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-green-100">
            <div className="w-[8vw] h-[8vw] relative  rounded-full bg-black">
              <div className="w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-8 ">
              <div className="w-[2vw] h-[2vw] rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-green-100">
            <div className="w-[8vw] h-[8vw] relative rounded-full bg-black">
              <div className="w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  h-8">
              <div className="w-[2vw] h-[2vw] rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
