import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { getEvents, getPrivat } from "../services/fakeservices";
import {
  interesstedEvents,
  resetInteressted,
} from "../features/interessted/interesstedSlice";
import { AiOutlineReload } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const NewcomerAside = () => {
  // const [event, setEvent] = useState(getEvents());
  const { user } = useSelector((state) => state.auth);

  const { posts } = useSelector((state) => state.posts);
  const { data } = posts;

  const { events } = useSelector((state) => state.events);
  const { data: files } = events;

  const dispatch = useDispatch();

  const getInterEvents = (eventId, interesstedIn) => {
    dispatch(interesstedEvents({ eventId, interesstedIn: user._id }));
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="newcomer__aside">
      <div className="newcomer__aside__container">
        <div className="newcomer__events__card">
          <AnimatePresence>
            {files &&
              files
                .map((event, i) => (
                  <motion.div
                    className="event__container"
                    key={event._id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.5 }}
                    custom={i}
                  >
                    <div className="event__image">
                      <img src={event.profilePicture} alt="event picture" />
                    </div>
                    <div className="event__content">
                      <div className="event__menu">
                        <div className="date__time__flex">
                          <div className="event event__date">
                            <p>{event.date}</p>
                          </div>
                          <div className="event event__time">
                            <p>{event.time}</p>
                          </div>
                        </div>
                        <div className="event event__description">
                          <h3>{event.description}</h3>
                        </div>
                        <div className="event event__address">
                          <GoLocation color="#34475C" size={18} />
                          <p>{event.address}</p>
                        </div>
                      </div>
                      <div className="btn btn-profile">
                        <div className="btn__flex__event interessted--btn">
                          <AiOutlineCheck />
                          <button onClick={() => getInterEvents(event._id)}>
                            Interested
                          </button>
                        </div>
                        <div className="btn__flex__event not--interessted--btn">
                          <AiOutlineClose />
                          <button>Not interessted</button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
                .reverse()}
          </AnimatePresence>
        </div>
        {/* <div className="privat__card">
          {data &&
            data
              .filter((post) => post.creator.selectedRole !== "newcomer")
              .sort((a, b) => a.createdAt > b.createdAt)
              .reverse()
              .map((post) => (
                <div
                  className="privat__card__container privat-block"
                  key={post._id}
                >
                  <div className="privat__card__content">
                    <div className="privat__flex">
                      <div className="privat__image">
                        <img src={post.creator.profilePicture} alt="" />
                      </div>
                      <div className="privat__info">
                        <p>{post.creator.username}</p>
                        <p>{post.creator.selectedRole}</p>
                      </div>
                    </div>
                    <div className="privat__date">
                      <p>Joined {post.createdAt.split("T").shift()}</p>
                    </div>
                  </div>

                  <div className="privat__moreInfo">
                    <div className="status">
                      <p>Status</p>
                      <span>online</span>
                    </div>
                    <div className="city">
                      <p>City</p>
                      <span>Berlin</span>
                    </div>
                    <div className="country">
                      <p>Country</p>
                      <span>Germany</span>
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
                        {post.message}
                      </textarea>
                    </div>
                  </div>
                </div>
              ))}
        </div> */}
      </div>
      <div className="navigator__aside">
        <AiOutlineReload onClick={refreshPage} />
      </div>
    </div>
  );
};

export default NewcomerAside;

/* <div
className="privat__card__container privat-block"
key={post._id}
>
<div className="privat__card__content">
  <div className="privat__flex">
    <div className="privat__image">
      <img src={post.creator.profilePicture} alt="" />
    </div>
    <div className="privat__info">
      <p>{post.creator.username}</p>
      <p>{post.creator.selectedRole}</p>
    </div>
  </div>
  <div className="privat__date">
    <p>Joined {post.creator.createdAt}</p>
  </div>
</div>

<div className="privat__moreInfo">
  <div className="status">
    <p>Status</p>
    <span>online</span>
  </div>
  <div className="city">
    <p>City</p>
    <span>Berlin</span>
  </div>
  <div className="country">
    <p>Country</p>
    <span>Germany</span>
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
      {post.message}
    </textarea>
  </div>
</div>
</div> */
