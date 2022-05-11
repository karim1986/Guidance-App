const SearchBox = () => {
  return (
    <div className="search__box">
      <input className="search" type="search" placeholder="search..." />
      <select name="" id="">
        <option value="">Fields...</option>
        <option value="citizens">Citizen's Offices</option>
        <option value="kitas">Kitas</option>
        <option value="students">Students</option>
        <option value="workers">Workers</option>
        <option value="immigration">Immigration</option>
        <option value="events">administration</option>
        <option value="events">events</option>
      </select>
      <select name="" id="">
        <option value="">Caochs</option>
        <option value="">Private</option>
        <option value="">Volunteer</option>
      </select>
    </div>
  );
};

export default SearchBox;
