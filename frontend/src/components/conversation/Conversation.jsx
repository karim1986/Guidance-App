import Profile from "../../assets/images/profile.jpg";
import "./conversation.scss";

const Conversation = () => {
  return (
    <div className="conversation">
      <img className="conversation__img" src={Profile} alt="profile picture" />
      <span className="conversation__name">John Doe</span>
    </div>
  );
};

export default Conversation;
