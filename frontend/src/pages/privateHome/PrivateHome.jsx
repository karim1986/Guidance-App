import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AnimateSharedLayout, motion } from "framer-motion";
import { GiPartyPopper } from "react-icons/gi";
import Toggle from "../../components/common/Toggle";
import PrivatBox from "../../components/PrivatBox";
import PrivatNotificationBox from "../../components/PrivatNotificationBox";
import PrivatAside from "../../components/PrivatAside";
import "./privateHome.scss";

const PrivateHome = () => {
  const { user } = useSelector((state) => state.auth);
  const { events } = useSelector((state) => state.events);

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
    <div className="privatePage-container">
      <div className="grid__container grid__2x3">
        <PrivatBox />
        <PrivatNotificationBox />
        <div className="events__holder privat__evt__holder">
          <div className="events__header">
            <h3>Events</h3>
          </div>

          {events.data &&
            events.data.map((event, index) => {
              if (user) {
                if (event.interesstedIn.includes(user._id)) {
                  return (
                    <div className="event__flex" key={event._id}>
                      <GiPartyPopper />
                      <AnimateSharedLayout>
                        <Toggle title={event.description}>
                          <div className="event__info">
                            <p>{event.date}</p>
                            <p>{event.address}</p>
                          </div>
                        </Toggle>
                      </AnimateSharedLayout>
                    </div>
                  );
                } else {
                  return null;
                }
              }
            })}
        </div>
        <PrivatAside />
      </div>
    </div>
  );
};

export default PrivateHome;
