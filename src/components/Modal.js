import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animatedModal, backdropModal } from "./AnimationVariants";
import ButtonMotion from "./ButtonMotion";

function Modal({ showModal, setShowModal, resetData }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          variants={backdropModal}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="backdrop"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            variants={animatedModal}
            initial="initial"
            animate="animate"
            exit="exit"
            className="modal"
          >
            <p>Make another pizza?</p>
            <ButtonMotion
              to="/"
              onClick={() => {
                resetData();
              }}
            >
              Yes
            </ButtonMotion>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
