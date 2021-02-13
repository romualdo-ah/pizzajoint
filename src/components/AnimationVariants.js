const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px #fff",
    boxShadow: "0px 0px 8px #fff",
    transition: { duration: 0.3, yoyo: Infinity },
  },
  initial: { x: "-100vw" },
  animate: { x: 0 },
};
const backdropModal = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const headerBackdrop = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    display: "none",
    transition: { delay: 2, duration: 2 },
  },
};

const animatedModal = {
  initial: { y: "-100vh", transition: { type: "spring" } },
  animate: { y: "20vh" },
  exit: {
    y: "-80vh",
    opacity: 0,
    transition: { type: "spring" },
  },
};

const toppingsVariants = {
  highlight: {
    textShadow: "0px 0px 8px #fff",
    scale: 1.3,
    type: "spring",
    originX: 0,
    color: "#fc7b03",
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    transition: { type: "spring" },
    x: 0,
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export {
  buttonVariants,
  containerVariants,
  animatedModal,
  backdropModal,
  toppingsVariants,
  headerBackdrop,
};
