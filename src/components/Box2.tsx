import { motion } from "framer-motion";

export const Box2 = () => {
  return (
    <motion.div
      className="box2"
      whileHover={{
        scale: 1.1,
      }}
      drag
      dragConstraints={{
        left: -20,
        top: 5,
        bottom: 5,
        right: 20,
      }}
      whileTap={{
        scale: 0.9,
      }}
      whileDrag={{
        opacity: 0.5,
      }}
    ></motion.div>
  );
};
