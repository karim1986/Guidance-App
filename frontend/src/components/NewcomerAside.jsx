import { useState } from "react";
import { useSelector } from "react-redux";
import { getEvents, getPrivat } from "../services/fakeservices";
import { AiOutlineReload } from "react-icons/ai";

const NewcomerAside = () => {
  const [events, setEvent] = useState(getEvents());

  const { posts } = useSelector((state) => state.posts);
  const { data } = posts;

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="newcomer__aside">
      <AiOutlineReload onClick={refreshPage} />
      <div className="newcomer__aside__container">
        <div className="newcomer__events__card">
          {events.map((event) => (
            <div className="event__container" key={event._id}>
              <div className="event__content">
                <div className="event__image">
                  <img src={event.foto} alt="" />
                </div>
                <div className="event__header">
                  <h3>Event</h3>
                </div>
                <div className="event__menu">
                  <div className="event event__date">
                    <h4>Date:</h4>
                    <span>{event.date}</span>
                  </div>
                  <div className="event event__date">
                    <h4>Time:</h4>
                    <span>{event.time}</span>
                  </div>
                  <div className="event event__address">
                    <h4>Address:</h4>
                    <span>{event.adress}</span>
                  </div>
                  <div className="event event__description">
                    <h4>Description: </h4>
                    <span>{event.description}</span>
                  </div>
                </div>
              </div>
              <div className="btn btn-profile">
                <button>Interested</button>
                <button>Not Interested</button>
              </div>
            </div>
          ))}
        </div>

        <div className="privat__card">
          {data &&
            data
              .filter((post) => post.creator.selectedRole !== "newcomer")
              .sort((a, b) => a.createdAt > b.createdAt)
              .reverse()
              .map((post) => (
                <div
                  className="privat__card__container privat-block"
                  key={post._id}
                >
                  <div className="privat__card__content">
                    <div className="privat__flex">
                      <div className="privat__image">
                        <img src={post.creator.profilePicture} alt="" />
                      </div>
                      <div className="privat__info">
                        <p>{post.creator.username}</p>
                        <p>{post.creator.selectedRole}</p>
                      </div>
                    </div>
                    <div className="privat__date">
                      <p>Joined {post.createdAt.split("T").shift()}</p>
                    </div>
                  </div>

                  <div className="privat__moreInfo">
                    <div className="status">
                      <p>Status</p>
                      <span>online</span>
                    </div>
                    <div className="city">
                      <p>City</p>
                      <span>Berlin</span>
                    </div>
                    <div className="country">
                      <p>Country</p>
                      <span>Germany</span>
                    </div>
                  </div>

                  <div className="privat__bio">
                    <div className="btn btn-privat">
                      <button className="btn-secondary">Contact</button>
                    </div>

                    <div className="privat__textarea">
                      <textarea
                        className="resize__textarea"
                        name=""
                        id=""
                        cols="45"
                        rows="5"
                      >
                        {post.message}
                      </textarea>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default NewcomerAside;

/* <div
className="privat__card__container privat-block"
key={post._id}
>
<div className="privat__card__content">
  <div className="privat__flex">
    <div className="privat__image">
      <img src={post.creator.profilePicture} alt="" />
    </div>
    <div className="privat__info">
      <p>{post.creator.username}</p>
      <p>{post.creator.selectedRole}</p>
    </div>
  </div>
  <div className="privat__date">
    <p>Joined {post.creator.createdAt}</p>
  </div>
</div>

<div className="privat__moreInfo">
  <div className="status">
    <p>Status</p>
    <span>online</span>
  </div>
  <div className="city">
    <p>City</p>
    <span>Berlin</span>
  </div>
  <div className="country">
    <p>Country</p>
    <span>Germany</span>
  </div>
</div>

<div className="privat__bio">
  <div className="btn btn-privat">
    <button className="btn-secondary">Contact</button>
  </div>

  <div className="privat__textarea">
    <textarea
      className="resize__textarea"
      name=""
      id=""
      cols="45"
      rows="5"
    >
      {post.message}
    </textarea>
  </div>
</div>
</div> */
