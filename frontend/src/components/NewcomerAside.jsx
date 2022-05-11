import { useState } from "react";
import { getEvents, getPrivat } from "../services/fakeservices";

const NewcomerAside = () => {
  const [events, setEvent] = useState(getEvents());
  const [privats, setPrivat] = useState(getPrivat());

  return (
    <div className="newcomer__aside">
      <div className="newcomer__aside__container">
        <div className="newcomer__events__card">
          {events.map((event) => (
            <div className="event__container" key={event._id}>
              <div className="event__content">
                <div className="event__image">
                  <img src={event.foto} alt="" />
                </div>
                <div className="event__header">
                  <h3>Event</h3>
                </div>
                <div className="event__menu">
                  <div className="event event__date">
                    <h4>Date:</h4>
                    <span>{event.date}</span>
                  </div>
                  <div className="event event__date">
                    <h4>Time:</h4>
                    <span>{event.time}</span>
                  </div>
                  <div className="event event__address">
                    <h4>Address:</h4>
                    <span>{event.adress}</span>
                  </div>
                  <div className="event event__description">
                    <h4>Description: </h4>
                    <span>{event.description}</span>
                  </div>
                </div>
              </div>
              <div className="btn btn-profile">
                <button>Interested</button>
                <button>Not Interested</button>
              </div>
            </div>
          ))}
        </div>

        <div className="privat__card">
          {privats.map((privat) => (
            <div
              className="privat__card__container privat-block"
              key={privat.key}
            >
              <div className="privat__card__content">
                <div className="privat__flex">
                  <div className="privat__image">
                    <img src={privat.foto} alt="" />
                  </div>
                  <div className="privat__info">
                    <p>{privat.name}</p>
                    <p>{privat.role}</p>
                  </div>
                </div>
                <div className="privat__date">
                  <p>Joined {privat.date}</p>
                </div>
              </div>

              <div className="privat__moreInfo">
                <div className="status">
                  <p>Status</p>
                  <span>{privat.status}</span>
                </div>
                <div className="city">
                  <p>City</p>
                  <span>{privat.city}</span>
                </div>
                <div className="country">
                  <p>Country</p>
                  <span>{privat.country}</span>
                </div>
              </div>

              <div className="privat__bio">
                <div className="btn btn-privat">
                  <button className="btn-secondary">Contact</button>
                </div>

                <div className="privat__textarea">
                  <textarea
                    className="resize__textarea"
                    name=""
                    id=""
                    cols="45"
                    rows="5"
                  >
                    {privat.text}
                  </textarea>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewcomerAside;
