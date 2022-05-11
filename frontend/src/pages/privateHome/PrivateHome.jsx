import PrivatBox from "../../components/PrivatBox";
import PrivatNotificationBox from "../../components/PrivatNotificationBox";
import PrivatAside from "../../components/PrivatAside";
import "./privateHome.scss";

const PrivateHome = () => {
  return (
    <div className="privatePage-container">
      <div className="grid__container grid__2x3">
        <PrivatBox />
        <PrivatNotificationBox />
        <div className="chat-box">
          <div className="chatBox__list">hier is box chat</div>
        </div>
        <PrivatAside />
      </div>
    </div>
  );
};

export default PrivateHome;
