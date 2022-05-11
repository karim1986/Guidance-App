import { FaCameraRetro } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const Event = () => {
  return (
    <div className="event__container">
      <div className="upload__foto">
        <FaCameraRetro className="svg__camera" size={25} color="#f3796b" />
        <label for="inputTag">
          Select Image
          <input
            type="file"
            id="inputTag"
            accept="image/png, image/jpg, image/gif, image/jpeg"
          />
        </label>
      </div>
      <div className="event__date__selection">
        <label htmlFor="date">
          <BsCalendarDate size={25} color="#f3796b" />{" "}
        </label>
        <input type="date" id="date" name="selectDate" />
      </div>
      <div className="event__time">
        <label htmlFor="time">
          <MdAccessTime size={25} color="#f3796b" />{" "}
        </label>
        <input type="time" id="time" name="selectTime" />
      </div>
      <div className="event__address">
        <GoLocation size={25} color="#f3796b" />
        <input type="text" />
      </div>
      <div className="event__description">
        <p>Event description</p>
        <textarea
          placeholder="What is the event about..."
          name=""
          id=""
          cols="60"
          rows="5"
        ></textarea>
        <div className="post__submit">
          <button className="btn btn-secondary submit" type="submit">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
