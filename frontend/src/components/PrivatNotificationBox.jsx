import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { TiMessages } from "react-icons/ti";
import { BsCalendar2Event } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Modal from "../components/postModal/Modal";
import EventModal from "../components/eventModal/Modal";

function PrivatNotificationBox() {
  const [showModal, setShowModal] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const { events } = useSelector((state) => state.events);

  const navigate = useNavigate();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openModalTwo = () => {
    setShowModalTwo((prev) => !prev);
  };

  let count;

  if (events.data) {
    if (user) {
      for (let i = 0; i < events.data.length; i++) {
        count = events.data.filter((blog) =>
          blog.interesstedIn.includes(user._id)
        ).length;
      }
    }
  }

  return (
    <div className="notefication-container">
      <div className="messages__ntf" onClick={() => navigate("/messenger")}>
        <p>Messages</p>
        <span className="absolute-position">
          <TiMessages size={21} color="F47060" />
        </span>
      </div>
      <div className="createEvent__ntf">
        <p>Create Event</p>
        <span>
          <BsCalendar2Event color="#F47060" size={20} onClick={openModalTwo} />
        </span>
        <EventModal
          showModalTwo={showModalTwo}
          setShowModalTwo={setShowModalTwo}
        />
      </div>
      <div className="interessted__in">
        <p>Interested In</p>
        <span className="event__count">
          {count <= 1 ? `${count} event` : `${count} events`}
        </span>
      </div>
    </div>
  );
}

export default PrivatNotificationBox;
