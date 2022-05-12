const TextArea = ({ value, onChange }) => {
  return (
    <div className="post__text">
      <textarea
        placeholder="Write your request here..."
        value={value}
        onChange={onChange}
        cols="73"
        rows="10"
      ></textarea>
      <div className="post__submit">
        <button className="btn btn-secondary submit" type="submit">
          Post
        </button>
      </div>
    </div>
  );
};

export default TextArea;
