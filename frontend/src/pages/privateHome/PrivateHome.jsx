import { BsCircle, BsCalendarEvent } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import profile from "../../assets/images/profile.jpg";
import { getNewComers } from "../../services/fakeservices";
import { useState } from "react";
import "./privateHome.scss";

const PrivateHome = () => {
  const [newComers, setNewcomers] = useState(getNewComers());

  console.log(newComers);
  return (
    <div className="privatePage-container">
      <div className="grid__container grid__2x3">
        <div className="pofile-box">
          <div className="logout-bnt">
            <button className="btn btn__logout">Log out</button>
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
                <p>Private</p>
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
            <textarea
              className="profile__textarea"
              name="bio"
              id=""
              cols="30"
              rows="5"
            >
              Where I can help...
            </textarea>
          </div>
        </div>
        <div className="notefication-container">
          <div className="messages__ntf">
            <p>Messages</p>
            <span className="absolute-position">
              <BsCircle size={20} color="#F47060" />
            </span>
          </div>
          <div className="post__ntf">
            <p>Post</p>
            <span>
              <RiShareForwardLine size={20} />
            </span>
          </div>
          <div className="editProfile__ntf">
            <p>Edit Profile</p>
            <span>
              <AiOutlineEdit size={20} />
            </span>
          </div>
          <div className="createEvent__ntf">
            <p>Create Event</p>
            <span>
              <BsCalendarEvent size={20} />
            </span>
          </div>
        </div>
        <div className="chat-box">
          <div className="chatBox__list">hier is box chat</div>
        </div>
        <div className="aside aside__profiles">
          {newComers.map((comer) => (
            <div className="comer-container">
              <div className="newComer-profile">
                <div className="newComer-foto">
                  <img src={comer.foto} alt="profile foto" />
                  <div className="column-flex">
                    <p>{comer.name}</p>
                    <p>{comer.role}</p>
                    <p>{comer.city}</p>
                  </div>
                </div>
                <div className="newComer-text">
                  <p>{comer.text}</p>
                </div>
              </div>
              <div className="btn btn-profile">
                <button>Contact</button>
                <button>I can't help</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivateHome;
