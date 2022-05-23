import { useState } from "react";
import { useSelector } from "react-redux";
import { getPosts, reset } from "../features/posts/postsSlice";
import { AiOutlineReload } from "react-icons/ai";
import { GiConsoleController } from "react-icons/gi";
import profile from "../assets/images/profile.jpg";

const PrivatAside = () => {
  const { posts } = useSelector((state) => state.posts);
  const { data } = posts;

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="aside aside__profiles">
      <AiOutlineReload onClick={refreshPage} />
      {data &&
        data
          .filter((post) => post.creator.selectedRole === "newcomer")
          .sort((a, b) => a.createdAt > b.createdAt)
          .reverse()
          .map((post) => (
            <div className="comer-container">
              <div className="newComer-profile">
                <div className="newComer-foto">
                  <img src={post.creator.profilePicture} alt="profile foto" />
                  <div className="column-flex">
                    <p>{post.creator.username}</p>
                    <p>{post.creator.selectedRole}</p>
                    <p>Berlin</p>
                  </div>
                </div>
                <div className="newComer-text">
                  <p>{post.message}</p>
                </div>
              </div>
              <div className="btn btn-profile">
                <button>Contact</button>
                <button>I can't help</button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default PrivatAside;
