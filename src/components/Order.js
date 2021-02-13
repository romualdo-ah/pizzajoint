import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {containerVariants} from "./AnimationVariants";

const Order = ({ pizza, setShowModal }) => {
  
  useEffect(() => {
    setTimeout(() => setShowModal(true), 3000)
  }, [setShowModal]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </motion.div>
  );
};

export default Order;
