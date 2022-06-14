import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../features/posts/postsSlice";
import postImg from "../../assets/images/post.svg";

const Post = () => {
  const [message, setMessage] = useState();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // call the server .....
    dispatch(createPost({ message, creator: user._id }));
    setMessage(" ");
  };

  const resetMessage = () => {
    setMessage(" ");
  };

  return (
    <div className="post__container">
      <div className="post__text post-flex">
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              autoFocus
              className="post__input"
              type="text"
              name="text"
              id="text"
              value={message}
              onChange={(evt) => setMessage(evt.target.value)}
            />
          </div>
          <div className="post__submit">
            <button className="btn btn-secondary submit" type="submit">
              Post
            </button>
            <button
              onClick={resetMessage}
              type="button"
              className="btn-secondary"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
