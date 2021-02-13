import React from "react";
import { motion } from "framer-motion";
import ButtonMotion from "./ButtonMotion";

import { containerVariants, toppingsVariants } from "./AnimationVariants";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="toppings container"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              variants={toppingsVariants}
              whileTap="highlight"
              whileHover="highlight"
              key={topping}
              onClick={() => {
                addTopping(topping);
              }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>
      {pizza.toppings.length > 0 && (
        <ButtonMotion to="/order">
          {`Order ${pizza.toppings.map((p) => " " + p)}`}
        </ButtonMotion>
      )}
    </motion.div>
  );
};

export default Toppings;
