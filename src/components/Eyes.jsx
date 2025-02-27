import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle-180);

    });
  });

  return (
    <div className="eyes w-full md:h-screen h-[70vh]  overflow-hidden">
      <div data-scroll md:data-scroll-speed="-.3" data-scroll-speed="-.5" className="w-full relative h-[70vh] md:h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute  flex gap-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-green-100">
            <div className="w-[8vw] h-[8vw] relative  rounded-full bg-black"> 
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-8 ">
                <div className="md:w-[2vw] md:h-[2vw] w-[4vw] h-[4vw] rounded-full bg-white"></div> 
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-green-100">
            <div className="w-[8vw] h-[8vw] relative rounded-full bg-black">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}  className="w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  h-8">
                <div className="md:w-[2vw] md:h-[2vw] w-[4vw] h-[4vw] rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
