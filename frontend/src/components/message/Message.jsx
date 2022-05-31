import { useSelector } from "react-redux";
import { format } from "timeago.js";
import "./message.scss";

const Message = ({ message, own }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="message__top">
        <p className="message__text">{message.text}</p>
      </div>
      <div className="message__bottom">{format(message.createdAt)}</div>
    </div>
  );
};

export default Message;
