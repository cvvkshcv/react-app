import { motion } from "framer-motion";
import { useState } from "react";

const BoxLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <motion.div
        className="outer-div"
        data-open={open}
        layout
        onClick={() => setOpen(!open)}
      >
        <motion.div layout className="inner-circle"></motion.div>
      </motion.div>
    </div>
  );
};

export default BoxLayout;
