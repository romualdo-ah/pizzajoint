import React, { useEffect, useState } from "react";
import { headerBackdrop } from "./AnimationVariants";
import { motion } from "framer-motion";

const pathVariants = {
  initial: {
    x: "50vw",
    y: "50vh",
    pathLength: 0,
    scale: 3,
    delay: 2,
  },
  
  animate: {
    x: 0,
    y: 0,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
    scale: 1,
  },
};

const titleVariants = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1, ease: "easeInOut" },
  },
};

const Header = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <>
      <motion.header>
        <div
          variants={headerBackdrop}
          initial="visible"
          animate="hidden"
          className={"logo"}
        >
          <svg
            className="pizza-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <motion.path
              variants={pathVariants}
              initial="initial"
              animate="animate"
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <motion.path
              variants={pathVariants}
              initial="initial"
              animate="animate"
              fill="none"
              d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            />
          </svg>
        </div>
              <motion.div 
    variants={headerBackdrop}
    initial="visible"
    animate="hidden"
    className="headerbackdrop"/>
        <motion.div
          variants={titleVariants}
          initial="initial"
          animate="visible"
          className="title"
        >
          <h1>Pizza Joint</h1>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;
