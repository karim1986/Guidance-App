const Post = () => {
  return (
    <div className="post__container">
      <div className="post__text">
        <textarea
          placeholder="Write your request here..."
          name=""
          id=""
          cols="73"
          rows="10"
        ></textarea>
      </div>
      <div className="post__submit">
        <button className="btn btn-secondary submit" type="submit">
          Post
        </button>
      </div>
    </div>
  );
};

export default Post;
