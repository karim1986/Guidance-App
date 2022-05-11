import profile from "../assets/images/profile.jpg";

function PrivatBox() {
  return (
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
  );
}

export default PrivatBox;
