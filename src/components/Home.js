import React from "react";
import ContainerMotion from "./ContainerMotion";
import ButtonMotion from "./ButtonMotion";
import { motion } from "framer-motion";
const Home = () => {

  return (
    <ContainerMotion>
      <motion.h2 animate={{ fontSize: 50 }}>Welcome to Pizza Joint</motion.h2>
      <ButtonMotion to="/base">
      Create Your Pizza
      </ButtonMotion>
    </ContainerMotion>
  );
};

export default Home;
