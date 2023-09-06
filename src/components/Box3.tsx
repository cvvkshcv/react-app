import { motion } from "framer-motion";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export const Box3 = () => {
  return (
    <motion.div
      className="box3"
      variants={list}
      initial="hidden"
      animate="visible"
    >
      {[1, 2, 3].map(() => {
        return <motion.li className="list" variants={item}></motion.li>;
      })}
    </motion.div>
  );
};
