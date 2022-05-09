function DropDownBoxes({ name, value, error, onChange }) {
  return (
    <div className="form-group">
      <select name={name} id={name} onChange={onChange} value={value}>
        <option value="select">--Select your profile--</option>
        <option value="newcomer">Newcomer</option>
        <option value="coach">Coach</option>
        <option value="volunteer">Volunteer</option>
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default DropDownBoxes;
