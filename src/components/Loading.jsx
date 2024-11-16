import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.8, ease: "easeInOut" },
    },
  };

  const bracketVariant = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      id="loading"
      className="w-[100vw] h-[100vh] flex justify-center items-center bg-primary"
      initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{ scale: 1.2, opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {/* SVG Animation */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="100"
        viewBox="0 0 300 100"
        fill="none"
      >
        {/* Left Bracket */}
        <motion.path
          d="M50 20 L30 50 L50 80"
          stroke="#00bcd4"
          strokeWidth="3"
          variants={bracketVariant}
          initial="hidden"
          animate="visible"
        />
        {/* Right Bracket */}
        <motion.path
          d="M250 20 L270 50 L250 80"
          stroke="#00bcd4"
          strokeWidth="3"
          variants={bracketVariant}
          initial="hidden"
          animate="visible"
        />
        {/* Animated Text */}
        <motion.text
          x="150"
          y="60"
          textAnchor="middle"
          fill="white"
          fontSize="24"
          fontWeight="bold"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          Kumar Rajan
        </motion.text>
      </svg>
    </motion.div>
  );
};

export default Loading;
