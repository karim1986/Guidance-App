import { useNavigate } from "react-router-dom";

function GoBackToLogin() {
  const navigate = useNavigate();
  return (
    <div className="sub-form-login">
      <p>
        Have an account?{" "}
        <span className="sub-form-logi-nav" onClick={() => navigate("/")}>
          Log in
        </span>
      </p>
    </div>
  );
}

export default GoBackToLogin;
