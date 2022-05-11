import NewcomerAside from "../../components/NewcomerAside";
import NewcomerBox from "../../components/NewcomerBox";
import SearchBox from "../../components/SearchBox";
import SuggestionsBox from "../../components/SuggestionsBox";
import "./newcomerHome.scss";

const NewcomerHome = () => {
  return (
    <div className="container">
      <div className="newcomerPage-container">
        <div className="grid__container grid__4x2">
          <NewcomerBox />
          <SearchBox />
          <SuggestionsBox />
          <NewcomerAside />
          <div className="chat__box"></div>
        </div>
      </div>
    </div>
  );
};

export default NewcomerHome;
