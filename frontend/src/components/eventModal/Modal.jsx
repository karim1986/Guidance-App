import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { MdOutlineClose } from "react-icons/md";
import Event from "../common/Event";
import "./modalTwo.scss";

export const Modal = ({ showModalTwo, setShowModalTwo }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showModalTwo ? 1 : 0,
    transform: showModalTwo ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModalTwo(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModalTwo) {
        setShowModalTwo(false);
      }
    },
    [setShowModalTwo, showModalTwo]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModalTwo ? (
        <div className="background" ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="modal__wrapper" showModalTwo={showModalTwo}>
              <h3>Create your event</h3>
              <MdOutlineClose
                className="svg__close"
                size={25}
                onClick={() => setShowModalTwo((prev) => !prev)}
              />
              <Event
                showModalTwo={showModalTwo}
                setShowModalTwo={setShowModalTwo}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
