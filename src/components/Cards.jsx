import React from "react";

function Cards() {
  return (
    <div data-scroll data-scroll-speed=".1"  className="w-full h-screen flex items-center   gap-6 px-20 bg-zinc-900">
      <div className="cardcontainer h-[60vh]   w-1/2">
        <div className="card w-full rounded-xl flex items-center justify-center overflow-hidden h-full bg-[#307d73]">
          <img
            className="w-[10vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
        </div>
      </div>

      <div className="cardcontainer flex gap-6 h-[60vh] w-1/2">
        <div className="card w-full h-full rounded-xl overflow-hidden  bg-zinc-900">
          <img
            className="w-full h-full bg-cover "
            src="https://i.pinimg.com/564x/5d/4e/24/5d4e24ca5d30ae8abc5795e5533da94c.jpg"
            alt=""
          />
        </div>
        <div className="card w-full rounded-xl h-full overflow-hidden  bg-zinc-900">
          <img
            className="w-full h-full bg-cover"
            src="https://i.pinimg.com/564x/d1/92/10/d19210bcd9cfffc76b715fc61f7dc13f.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
