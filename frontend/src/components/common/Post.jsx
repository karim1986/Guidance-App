import { useState } from "react";
import TextArea from "./TextArea";

const Post = () => {
  const [dataArea, setDataArea] = useState({ body: "" });

  const { body } = dataArea;

  const handleChange = ({ currentTarget: input }) => {
    const details = { ...body };
    details[input.name] = input.value;
    setDataArea(details);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // call the server .....
    console.log("submitted");
  };

  return (
    <div className="post__container">
      <div className="post__text">
        <form onSubmit={handleSubmit}>
          <TextArea onChange={handleChange} value={body} />
        </form>
      </div>
    </div>
  );
};

export default Post;
