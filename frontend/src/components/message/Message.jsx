import Messager from "../../assets/images/messager.jpg";
import "./message.scss";

const Message = ({ own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="message__top">
        <img className="message__image" src={Messager} alt="messager" />
        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          voluptatibus magni nesciunt ea cupiditate consequatur veritatis .
        </p>
      </div>
      <div className="message__bottom">1 hour ago</div>
    </div>
  );
};

export default Message;
