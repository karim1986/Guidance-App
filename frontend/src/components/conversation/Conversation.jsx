import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Profile from "../../assets/images/profile.jpg";
import "./conversation.scss";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState();

  console.log(conversation);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    console.log(friendId);

    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:2300/api/users/${friendId}`
        );
        console.log(res);
        setUser(res.data.user);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [conversation]);

  return (
    <div className="conversation">
      <img src={user ? user.profilePicture : ""} alt="" />
      <span className="conversation__name">{user ? user.username : ""}</span>
    </div>
  );
};

export default Conversation;
