import { useState } from "react";
import { BsCircle, BsCalendarEvent } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Modal from "../components/postModal/Modal";
import EventModal from "../components/eventModal/Modal";

function PrivatNotificationBox() {
  const [showModal, setShowModal] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openModalTwo = () => {
    setShowModalTwo((prev) => !prev);
  };

  return (
    <div className="notefication-container">
      <div className="messages__ntf">
        <p>Messages</p>
        <span className="absolute-position">
          <BsCircle size={20} color="#fff" />
        </span>
      </div>
      {/* <div className="post__ntf">
        <p>Post</p>
        <span>
          <RiShareForwardLine size={20} onClick={openModal} />
        </span>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div> */}
      <div className="createEvent__ntf">
        <p>Create Event</p>
        <span>
          <BsCalendarEvent color="#fff" size={20} onClick={openModalTwo} />
        </span>
        <EventModal
          showModalTwo={showModalTwo}
          setShowModalTwo={setShowModalTwo}
        />
      </div>
      <div className="interessted__in">
        <p>Interested in</p>
        <span>
          <AiOutlineExclamationCircle color="#fff" size={20} />
        </span>
      </div>
    </div>
  );
}

export default PrivatNotificationBox;
