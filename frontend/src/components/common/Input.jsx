const Input = ({ name, value, error, onChange }) => {
  return (
    <div className="form-group">
      <input
        autoFocus
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        className="form-control"
        placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
        type={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
