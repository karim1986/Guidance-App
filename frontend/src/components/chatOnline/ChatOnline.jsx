import { useSelector } from "react-redux";
import Online from "../../assets/images/online.jpg";
import "./chatOnline.scss";

const ChatOnline = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="chat__online">
      <div className="chat__online__profile">
        <div className="chat__online__img__container">
          <img
            className="chat__online__img"
            src={user && user.profilePicture}
            alt="profile"
          />
          <div className="chat__online__badge"></div>
        </div>
        <span className="hat__online__name">{user && user.username}</span>
      </div>
    </div>
  );
};

export default ChatOnline;
