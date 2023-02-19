import React from "react";
import { motion } from "framer-motion";
import { ImSpinner9 } from "react-icons/im";
;

function SuccessMsg({successMsg}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { type: "spring", stiffness: 120 },
      }}
      className="absolute bottom-10 left-[15%] mdl:left-[30%] lgl:left-[40%] bg-bodyColor py-4 px-10 font-titleFont
    tracking-wide shadow-todoShadow text-green-500 rounded-sm text-lg  border-b-[6px] border-b-green-500"
    >
      <p
        className=" flex items-center gap-4
    
        "
      >
        <span className="animate-spin text-xl">
          <ImSpinner9 />
        </span>
      {successMsg}
      </p>
    </motion.div>
  );
}

export default SuccessMsg;
