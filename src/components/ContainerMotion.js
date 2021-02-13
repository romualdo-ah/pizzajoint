import React from "react";
import { containerVariants } from "./AnimationVariants";
import {motion} from "framer-motion";

function ContainerMotion({children}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container"
    >
{children}
    </motion.div>
  );
}

export default ContainerMotion;
