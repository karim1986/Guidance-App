import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createEvent } from "../../features/events/eventsSlice";
import FileBase from "react-file-base64";
import EventPost from "../../assets/images/events.svg";

const Event = () => {
  const [data, setData] = useState({
    date: "",
    time: "",
    address: "",
    description: "",
    profilePicture: "",
    // user: user._id,
  });
  const { date, time, address, description, profilePicture } = data;

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(createEvent(data));
    setData(" ");
  };

  const handleChange = ({ currentTarget: input }) => {
    const details = { ...data };
    details[input.name] = input.value;
    setData(details);
  };

  return (
    <div className="event__container">
      <div className="flex__container">
        <div className="event__image">
          <img src={EventPost} alt="event" />
        </div>
        <form className="form__flex" onSubmit={handleSubmit}>
          <div className="upload__foto">
            <div className="load_foto">
              <FileBase
                className="input__file"
                name="selectedFile"
                id="file"
                value="selectedFile"
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setData({ ...data, profilePicture: base64 })
                }
              />
            </div>
          </div>
          <div className="event__date__selection">
            <label htmlFor="date">Date</label>
            <input
              onChange={handleChange}
              type="text"
              id="date"
              name="date"
              value={date}
            />
          </div>
          <div className="event__time">
            <label htmlFor="time">Time</label>
            <input
              onChange={handleChange}
              type="text"
              id="time"
              name="time"
              value={time}
            />
          </div>
          <div className="event__address">
            <label htmlFor="">Address</label>
            <input
              onChange={handleChange}
              type="text"
              name="address"
              value={address}
            />
          </div>
          <div className="event__description">
            <lable>Description</lable>
            <input
              onChange={handleChange}
              type="text"
              name="description"
              value={description}
            />
            <div className="post__submit">
              <button className="btn btn-secondary submit" type="submit">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Event;
