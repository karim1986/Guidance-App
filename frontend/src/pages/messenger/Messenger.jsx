import ChatOnline from "../../components/chatOnline/ChatOnline";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import "./messenger.scss";

const Messenger = () => {
  return (
    <div className="messenger">
      <div className="chat__menu">
        <div className="chat__menu__wrapper">
          <input placeholder="Search..." className="chat__menu__Input" />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </div>
      </div>
      <div className="chat__box__messenger">
        <div className="chat__box__wrapper">
          <div className="chat__box__top">
            <Message />
            <Message />
            <Message own={true} />
            <Message own={true} />
            <Message own={true} />
            <Message own={true} />
            <Message own={true} />
            <Message />
            <Message own={true} />
            <Message own={true} />
            <Message own={true} />
            <Message own={true} />
            <Message own={true} />
            <Message own={true} />
          </div>
          <div className="chat__box__bottom">
            <textarea
              className="chat__message__input"
              placeholder="write something..."
            ></textarea>
            <button className="chat__submit__button">Send</button>
          </div>
        </div>
      </div>
      <div className="chat__online">
        <div className="chat__online__wrapper">
          <ChatOnline />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
