import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { createPost } from "../features/posts/postsSlice";
import { FiLogOut } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdLocationCity } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";
import { HiStatusOffline } from "react-icons/hi";

function PrivatBox() {
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  console.log(user);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const handleChange = (evt) => {
    setMessage(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    //calling the server....
    dispatch(createPost({ message, creator: user._id }));
    setMessage(" ");
  };
  return (
    <div className="pofile-box">
      <div className="logout-bnt" onClick={onLogout}>
        <FiLogOut size={15} color="#fff" />
        <span>Log out</span>
      </div>
      <div className="guidance-logo">
        <h3>Guidance</h3>
      </div>
      <div className="profile-info">
        <div className="line-dec"></div>
        <div className="profile-image">
          <img src={user && user.profilePicture} alt="profile image" />
        </div>
        <div className="flex-position">
          <div className="profile-status">
            <p>{user && user.username}</p>
            <p>{user && user.selectedRole}</p>
          </div>
          <div className="creation-date">
            {/* <p>Joined Guidance {user.createdAt.split("T").shift()}</p> */}
          </div>
        </div>
      </div>
      <div className="profile-status-box">
        <div className="status">
          <span className="profile__p">Status</span>
          {user ? (
            <HiStatusOnline size={20} color="green" />
          ) : (
            <HiStatusOffline size={20} color="red" />
          )}
        </div>
        <div className="location">
          <span className="profile__p">City</span> Berlin
        </div>
        <div className="country">
          <span className="profile__p">Country</span> Germany
        </div>
      </div>
      <div className="profile-bio">
        <form className="" onSubmit={handleSubmit}>
          <textarea
            className="profile__textarea"
            name="textarea"
            placeholder="Post Where and how you can help..."
            cols="30"
            rows="5"
            onChange={handleChange}
            value={message}
          ></textarea>
          <button type="submit" className="btn btn-submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PrivatBox;
