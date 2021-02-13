import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonVariants } from "./AnimationVariants";
function ButtonMotion(props) {

  return (
    <Link to={props.to} onClick={props.onClick}>
      <motion.button
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileTap="hover"
        whileHover="hover"
        className="next"
      >
        {props.children}
      </motion.button>
    </Link>
  );
}

export default ButtonMotion;
