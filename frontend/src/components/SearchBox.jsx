const SearchBox = ({
  category,
  field,
  search,
  handleCategory,
  handleField,
  handleSearch,
  handleSubmitSearch,
}) => {
  return (
    <div className="search__box">
      <input
        value={search}
        onChange={handleSearch}
        className="search"
        type="search"
        placeholder="search..."
      />
      {/* <button onClick={handleSubmitSearch}>Search</button> */}

      <select value={field} onChange={handleField} name="" id="">
        <option value="">Fields...</option>
        <option value="office bürgeramt">Office</option>
        <option value="kitas">Kitas</option>
        <option value="mario">kkk</option>
        <option value="students">Students</option>
        <option value="workers">Workers</option>
        <option value="immigration">Immigration</option>
        <option value="events">administration</option>
        <option value="events">events</option>
      </select>
      <select value={category} onChange={handleCategory} name="" id="">
        <option value="coach">Caoch</option>
        <option value="volunteer">Volunteer</option>
      </select>
    </div>
  );
};

export default SearchBox;
