import Online from "../../assets/images/online.jpg";
import "./chatOnline.scss";

const ChatOnline = () => {
  return (
    <div className="chat__online">
      <div className="chat__online__profile">
        <div className="chat__online__img__container">
          <img className="chat__online__img" src={Online} alt="" />
          <div className="chat__online__badge"></div>
        </div>
        <span className="hat__online__name">John Doe</span>
      </div>
    </div>
  );
};

export default ChatOnline;
