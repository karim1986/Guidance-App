import { useSelector } from "react-redux";
import NewcomerAside from "../../components/NewcomerAside";
import NewcomerBox from "../../components/NewcomerBox";
import SearchBox from "../../components/SearchBox";
import SuggestionsBox from "../../components/SuggestionsBox";
import "./newcomerHome.scss";

const NewcomerHome = () => {
  const { user } = useSelector((state) => state.auth);
  const { events } = useSelector((state) => state.events);

  console.log(events);

  return (
    <div className="container">
      <div className="newcomerPage-container">
        <div className="grid__container grid__4x2">
          <NewcomerBox />
          <SearchBox />
          <SuggestionsBox />
          <NewcomerAside />
          <div className="chat__box">
            {/* {events?.data.map((event) => {
              if (user) {
                if (event.interesstedIn.includes(user._id))
                  return <p>{event.description}</p>;
              }
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewcomerHome;
