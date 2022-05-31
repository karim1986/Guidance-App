import { useState } from "react";
import { useSelector } from "react-redux";
import NewcomerAside from "../../components/NewcomerAside";
import NewcomerBox from "../../components/NewcomerBox";
import SearchBox from "../../components/SearchBox";
import SuggestionsBox from "../../components/SuggestionsBox";
import "./newcomerHome.scss";

const NewcomerHome = () => {
  const [counter, setCounter] = useState(0);
  const { user } = useSelector((state) => state.auth);
  const { events } = useSelector((state) => state.events);
  console.log(events);

  let count;
  if (events.data) {
    if (user) {
      for (let i = 0; i < events.data.length; i++) {
        count = events.data.filter((blog) =>
          blog.interesstedIn.includes(user._id)
        ).length;
        console.log("count", count);
      }
    }
  }

  return (
    <div className="container">
      <div className="newcomerPage-container">
        <div className="grid__container grid__4x2">
          <NewcomerBox counter={count} />
          <SearchBox />
          <SuggestionsBox />
          <NewcomerAside />
          <div className="chat__box">
            {events.data &&
              events.data.map((blog, index) => {
                if (user) {
                  if (blog.interesstedIn.includes(user._id)) {
                    return <p>{blog.description}</p>;
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
