import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <motion.p layout className="event__title">
        {title}
      </motion.p>
      {toggle ? children : ""}
      <div className="event__liner"></div>
    </motion.div>
  );
};

export default Toggle;
