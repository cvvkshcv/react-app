import { useState } from "react";
import "../App.css";
import { motion } from "framer-motion";

export const Box1 = () => {
  const [isAnim, setAnim] = useState(false);

  return (
    <motion.div
      animate={{
        x: isAnim ? 1000 : 0,
        rotate: isAnim ? "360deg" : 0,
      }}
      transition={{
        type: "",
        stiffness: 100,
      }}
      className="box1"
      onClick={() => setAnim(!isAnim)}
    >
      <div></div>
    </motion.div>
  );
};
