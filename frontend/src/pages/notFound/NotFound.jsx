import { useNavigate } from "react-router-dom";
import PageNotFound from "../../assets/images/pageNotFound.svg";
import "./notFound.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound__container">
      <div className="notfound__content">
        <div className="notfound__text">
          <h2>Page not Found</h2>
        </div>
        <div className="notfound__image">
          <img src={PageNotFound} alt="" />
        </div>
        <div className="backto__login">
          <button className="btn-primary" onClick={() => navigate("/")}>
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
