import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { MdOutlineClose } from "react-icons/md";
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

  return (
    <>
      {showModal ? (
        <div className="background" ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="modal__wrapper" showModal={showModal}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, officiis?
              </p>
              <MdOutlineClose
                size={25}
                onClick={() => setShowModal((prev) => !prev)}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
