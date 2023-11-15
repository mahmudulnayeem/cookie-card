"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useFollowPointer } from "../_util/use-follow-pointer";

const FollowPointer = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="w-4 h-4 bg-red-400 rounded-full"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
};

export default FollowPointer;
