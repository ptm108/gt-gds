import React from "react";
import { motion } from "framer-motion";

const AnimateWrapper = ({ children, motionKey, initial, animate, exit, transition, ...props }) => {
  return (
    <motion.div key={motionKey} initial={initial} animate={animate} exit={exit} transition={transition} {...props}>
      {children}
    </motion.div>
  );
};

AnimateWrapper.defaultProps = {
  initial: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  transition: { delay: 5 },
};

export default AnimateWrapper;
