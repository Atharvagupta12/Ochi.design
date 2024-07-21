import React from "react";

function Cards() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"  className=" md:h-[80vh] w-full h-full md:flex items-center gap-6 px-10 md:px-20 bg-zinc-900">
      <div className="cardcontainer pt-20 md:pt-0 h-[60vh] md:w-1/2">
        <div className="card w-full rounded-xl flex items-center justify-center overflow-hidden h-full bg-[#307d73]">
          <img
            className="w-[10vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
        </div>
      </div>

      <div className="cardcontainer mt-10 md:mt-0 md:flex gap-6 md:w-1/2 md:h-[60vh] ">
        <div className="card w-full h-full my-10 md:my-0 rounded-xl overflow-hidden  bg-zinc-900">
          <img
            className="md:w-full md:h-full h-[60vh] w-full bg-cover "
            src="https://i.pinimg.com/564x/5d/4e/24/5d4e24ca5d30ae8abc5795e5533da94c.jpg"
            alt=""
          />
        </div>
        <div className="card w-full my-10 md:my-0 rounded-xl h-full overflow-hidden  bg-zinc-900">
          <img
            className="md:w-full md:h-full h-[60vh] w-full bg-cover"
            src="https://i.pinimg.com/564x/d1/92/10/d19210bcd9cfffc76b715fc61f7dc13f.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
