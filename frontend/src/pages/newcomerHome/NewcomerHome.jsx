import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AnimateSharedLayout, motion } from "framer-motion";
import { GiPartyPopper } from "react-icons/gi";
import NewcomerAside from "../../components/NewcomerAside";
import NewcomerBox from "../../components/NewcomerBox";
import SearchBox from "../../components/SearchBox";
import SuggestionsBox from "../../components/SuggestionsBox";
import Toggle from "../../components/common/Toggle";
import berlinTwo from "../../videos/berlin2.mp4";
import "./newcomerHome.scss";

const NewcomerHome = () => {
  const [category, setCategory] = useState("coach");
  const [field, setField] = useState("");
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState();
  const { user } = useSelector((state) => state.auth);
  const { events } = useSelector((state) => state.events);

  const handleCategory = (evt) => {
    setCategory(evt.target.value);
  };

  const handleField = (evt) => {
    setField(evt.target.value);
  };

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
  };

  const handleSubmitSearch = (evt) => {
    evt.preventDefault();
    setSearch(search);
    console.log("submited");
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
    <div className="container">
      <div className="newcomerPage-container">
        <div className="grid__container grid__4x2">
          <div className="berlin__vidoe">
            <video
              className="video"
              controls
              muted
              autoPlay={true}
              src={berlinTwo}
            ></video>
          </div>
          <NewcomerBox counter={count} setCounter={setCounter} />
          <SearchBox
            category={category}
            handleCategory={handleCategory}
            field={field}
            handleField={handleField}
            handleSubmitSearch={handleSubmitSearch}
            handleSearch={handleSearch}
          />
          <SuggestionsBox />
          <NewcomerAside
            category={category}
            field={field}
            search={search}
            handleSearch={handleSearch}
          />
          <div className="events__holder">
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
        </div>
      </div>
    </div>
  );
};

export default NewcomerHome;
