import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { MdOutlineClose } from "react-icons/md";
import Post from "../common/Post";
import "./model.scss";

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div className="background" ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="modal__wrapper" showModal={showModal}>
              <h3>
                Post and let your coachs and volunteers see where and how they
                can help you !
              </h3>
              <MdOutlineClose
                className="svg__close"
                size={25}
                onClick={() => setShowModal((prev) => !prev)}
              />
              <Post />
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
