import { useState } from "react";
import { BsCircle, BsCalendarEvent } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineExclamationCircle } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { getEvents, getPrivat } from "../../services/fakeservices";
import profile from "../../assets/images/profile.jpg";
import deco from "../../assets/images/deco.svg";
import "./newcomerHome.scss";

const NewcomerHome = () => {
  const [events, setEvent] = useState(getEvents());
  const [privats, setPrivat] = useState(getPrivat());

  return (
    <div>
      <div className="newcomerPage-container">
        <div className="grid__container grid__4x2">
          <div className="newcomer-profile-box">
            <div className="logout-bnt">
              <button className="btn btn__logout">Log out</button>
            </div>
            <div className="guidance-logo">
              <h3>Guidance</h3>
            </div>
            <div className="newcomer-profile">
              <div className="newComer__profile__image">
                <img src={profile} alt="" />
              </div>
              <div className="flex-column">
                <div className="newComer__profile__name">
                  <p>Karim Afettouche</p>
                </div>
                <div className="newComer__profile_status">
                  <p>Newcomer</p>
                </div>
                <div className="newComer__city">
                  <p>Berlin</p>
                </div>
              </div>
            </div>
            <div className="profile__functionalties">
              <div className="newcomer-messages add__style">
                <p>Messages</p>
                <span>
                  <TiMessages color="#fff" size={20} />
                </span>
              </div>
              <div className="newcomer-posts add__style">
                <p>Post</p>
                <span>
                  <AiOutlineEdit color="#fff" size={20} />
                </span>
              </div>
              <div className="newcomer-events add__style">
                <p>Create Event</p>
                <span>
                  <BsCalendarEvent color="#fff" size={20} />
                </span>
              </div>
              <div className="newcomer-events add__style">
                <p>Interested in</p>
                <span>
                  <AiOutlineExclamationCircle color="#fff" size={20} />
                </span>
              </div>
            </div>
          </div>
          <div className="search__box">
            <input className="search" type="search" placeholder="search..." />
            <select name="" id="">
              <option value="">Fields...</option>
              <option value="citizens">Citizen's Offices</option>
              <option value="kitas">Kitas</option>
              <option value="students">Students</option>
              <option value="workers">Workers</option>
              <option value="immigration">Immigration</option>
              <option value="events">administration</option>
              <option value="events">events</option>
            </select>
            <select name="" id="">
              <option value="">Caochs</option>
              <option value="">Private</option>
              <option value="">Volunteer</option>
            </select>
          </div>
          <div className="suggestions__box">
            <div className="suggestions__header">
              <div className="suggestion__title">
                <h3>Some Usefull Links</h3>
              </div>
              <div className="suggestion__list">
                <ul className="suggestion__menu">
                  <li>
                    <GiConfirmed size={25} />
                    <a href="https://service.berlin.de/">
                      How to get an appointement with Citzens Offices and read
                      more aboutother services.
                    </a>
                  </li>
                  <li>
                    <GiConfirmed size={25} />
                    <a
                      href="https://service.berlin.de/"
                      rel="noreferrer noopener"
                    >
                      How to get an appointement with Citzens Offices and read
                      more aboutother services.
                    </a>
                  </li>
                  <li>
                    <GiConfirmed size={25} />
                    <a
                      href="https://service.berlin.de/"
                      rel="noreferrer noopener"
                    >
                      How to get an appointement with Citzens Offices and read
                      more aboutother services.
                    </a>
                  </li>
                  <li>
                    <GiConfirmed size={25} />
                    <a
                      href="https://service.berlin.de/"
                      rel="noreferrer noopener"
                    >
                      How to get an appointement with Citzens Offices and read
                      more aboutother services.
                    </a>
                  </li>
                  <li>
                    <GiConfirmed size={25} />
                    <a
                      href="https://service.berlin.de/"
                      rel="noreferrer noopener"
                    >
                      How to get an appointement with Citzens Offices and read
                      more aboutother services.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chat__box">chat hier</div>
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
        </div>
      </div>
    </div>
  );
};

export default NewcomerHome;
