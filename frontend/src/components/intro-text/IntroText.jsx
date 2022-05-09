import { motion } from "framer-motion";
import "./introText.scss";

function IntroText() {
  return (
    <div className="text-container">
      <div className="text-logo">
        <motion.h1
          className="text-header"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Guidance
        </motion.h1>
      </div>
      <div className="text-introduction">
        <motion.h3>
          Guidance is a peer-to-peer platform for newcomers looking for help and
          citizens providing support in online applications, appointments with
          authorities and getting in contact with Citizens Offices
        </motion.h3>
      </div>
    </div>
  );
}

export default IntroText;
