import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import TextArea from "./common/TextArea";
import profile from "../assets/images/profile.jpg";

function PrivatBox() {
  const handleChange = () => {};

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className="pofile-box">
      <div className="logout-bnt">
        <FiLogOut size={15} color="#fff" />
        <span>Log out</span>
      </div>
      <div className="guidance-logo">
        <h3>Guidance</h3>
      </div>
      <div className="profile-info">
        <div className="line-dec"></div>
        <div className="profile-image">
          <img src={profile} alt="profile image" />
        </div>
        <div className="flex-position">
          <div className="profile-status">
            <p>Karim Afettouche</p>
            <p>Coach or Volunteer</p>
          </div>
          <div className="creation-date">
            <p>Joined 27 Apr 2022</p>
          </div>
        </div>
      </div>
      <div className="profile-status-box">
        <div className="status">
          <span>Status</span>
          Online
        </div>
        <div className="location">
          <span>City</span> Berlin
        </div>
        <div className="country">
          <span>Country</span> Germany
        </div>
      </div>
      <div className="profile-bio">
        <form className="" onSubmit={handleSubmit}>
          <textarea
            className="profile__textarea"
            name="post"
            placeholder="Post Where and how you can help..."
            cols="30"
            rows="5"
            onChange={handleChange}
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
