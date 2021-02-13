import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "./AnimationVariants";
import ButtonMotion from "./ButtonMotion";
const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileTap={{
                textShadow: "0px 0px 8px #fff",
                scale: 1.1,
                type: "spring",
                originX: 0,
                color: "#fff",
                x: 20,
              }}
              whileHover={{
                textShadow: "0px 0px 8px #fff",
                scale: 1.1,
                type: "spring",
                originX: 0,
                color: "#fff",
              }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && <ButtonMotion to="/toppings">Next</ButtonMotion>}
    </motion.div>
  );
};

export default Base;
