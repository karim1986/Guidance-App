import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <div className="account create-account">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => navigate("/register")}
      >
        Join & create new account
      </button>
    </div>
  );
};

export default CreateAccount;
