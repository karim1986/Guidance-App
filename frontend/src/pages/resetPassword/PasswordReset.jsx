import { useNavigate } from "react-router-dom";
import "./resetPassword.scss";

const PasswordReset = () => {
  const navigate = useNavigate();
  return (
    <div className="resetPassword_container">
      <div className="resetForm_container">
        <div className="resetPassword__header">
          <h3>Trouble Logging In?</h3>
        </div>
        <div className="resetPassword__text">
          <p>
            Enter your email and we'll send you a link to get back inot your
            account
          </p>
        </div>
        <form>
          <div className="form-group">
            <input
              autoFocus
              id="email"
              type="text"
              className="form-control"
              placeholder="Email"
            />
          </div>
        </form>
        <div>
          <button className="btn btn-primary btn__link">Send Login Link</button>
        </div>

        <div className="login-register-container">
          <div
            className="backTo__register"
            onClick={() => navigate("/register")}
          >
            <p>Create New Account</p>
          </div>
          <div className="backTo__login" onClick={() => navigate("/")}>
            <p>Back to Log In</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
