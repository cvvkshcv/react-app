import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

let toggle = false;
export const Box4 = () => {
  const control = useAnimation();
  useEffect(() => {}, []);
  return (
    <>
      <motion.div
        className="box4"
        // viewport={{ once: true }}
        animate={control}
      ></motion.div>

      <motion.button
        className="bg-blue-600 text-white p-4"
        whileTap={{
          scale: 0.7,
        }}
        whileHover={{
          boxShadow: "0px 5px 10px #ccc",
        }}
        onClick={() => {
          toggle = !toggle;
          control.start({
            x: toggle ? 1000 : 0,
            rotate: toggle ? 360 : 0,
            transition: {
              type: "spring",
              stiffness: 50,
            },
          });
        }}
      >
        Move right
      </motion.button>
    </>
  );
};
