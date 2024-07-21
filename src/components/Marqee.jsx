import { easeIn, motion } from "framer-motion";
import React from "react";

function Marqee() {
  return (
   
    <div className="w-full py-12 mt-10 md:mt-0 bg-[#004D43] ">
      <div
        className="text border-t-2 border-b-2
       border-zinc-300 flex overflow-hidden whitespace-nowrap"
      >
        <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:20}}
          className="text-[15vw] leading-none uppercase font-bold py-10  pr-10"
        >
          we are ochi  we are ochi we are ochi
        </motion.h1>
        {/* <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:5}}
          className="text-[15vw] leading-none uppercase font-bold py-10 "
        >
          we are ochi
        </motion.h1> */}
       
      </div>
    </div>
  );
}

export default Marqee;
