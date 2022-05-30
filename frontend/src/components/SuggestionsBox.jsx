import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
import { getLinks } from "../services/usefulLinks";

const SuggestionsBox = () => {
  const [links, setLinks] = useState(getLinks());

  return (
    <div className="suggestions__box">
      <div className="suggestions__header">
        <div className="suggestion__title">
          <motion.h3>Some Usefull Links</motion.h3>
        </div>
        <div className="suggestion__list">
          <AnimatePresence>
            {links.map((link, i) => (
              <motion.ul
                className="suggestion__menu"
                key={link._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.35 }}
                custom={i}
              >
                <li>
                  <IoMdArrowDropright size={20} />
                  <a
                    href={link.web}
                    target={"_blank"}
                    rel="noreferrer noopener"
                  >
                    {link.title}
                  </a>
                </li>
              </motion.ul>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsBox;

{
  /* <li>
                <IoMdArrowDropright size={20} />
                <a
                  href="https://service.berlin.de/"
                  target={"_blank"}
                  rel="noreferrer noopener"
                >
                  Berlin Services
                </a>
              </li>
              <li>
                <IoMdArrowDropright size={20} />
                <a
                  href="https://www.kita-navigator.berlin.de/"
                  target={"_blank"}
                  rel="noreferrer noopener"
                >
                  Kita-Navigator-Berlin
                </a>
              </li>
              <li>
                <IoMdArrowDropright size={20} />
                <a
                  href="https://www.berlin.de/einwanderung/"
                  target={"_blank"}
                  rel="noreferrer noopener"
                >
                  Immigration Office (Landesamt für Einwanderung)
                </a>
              </li>
              <li>
                <IoMdArrowDropright size={20} />
                <a
                  href="https://www.doctolib.de/"
                  target={"_blank"}
                  rel="noreferrer noopener"
                >
                  Doctor's Appointments
                </a>
              </li>
              <li>
                <IoMdArrowDropright size={20} />
                <a
                  href="https://service.berlin.de/dienstleistung/305244/en/"
                  target={"_blank"}
                  rel="noreferrer noopener"
                >
                  Residence permit for the purpose of studying
                </a>
              </li> */
}
