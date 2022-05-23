import Loader from "../../assets/images/spinner-icon.jpg";
const Spinner = () => {
  return (
    <div className="loading__spinner__container">
      <div className="laoding__spinner">
        <img src={Loader} alt="loading spinner" />
      </div>
    </div>
  );
};

export default Spinner;
