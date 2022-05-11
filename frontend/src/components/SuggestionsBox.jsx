import { GiConfirmed } from "react-icons/gi";

const SuggestionsBox = () => {
  return (
    <div className="suggestions__box">
      <div className="suggestions__header">
        <div className="suggestion__title">
          <h3>Some Usefull Links</h3>
        </div>
        <div className="suggestion__list">
          <ul className="suggestion__menu">
            <li>
              <GiConfirmed size={25} />
              <a href="https://service.berlin.de/">
                How to get an appointement with Citzens Offices and read more
                aboutother services.
              </a>
            </li>
            <li>
              <GiConfirmed size={25} />
              <a href="https://service.berlin.de/" rel="noreferrer noopener">
                How to get an appointement with Citzens Offices and read more
                aboutother services.
              </a>
            </li>
            <li>
              <GiConfirmed size={25} />
              <a href="https://service.berlin.de/" rel="noreferrer noopener">
                How to get an appointement with Citzens Offices and read more
                aboutother services.
              </a>
            </li>
            <li>
              <GiConfirmed size={25} />
              <a href="https://service.berlin.de/" rel="noreferrer noopener">
                How to get an appointement with Citzens Offices and read more
                aboutother services.
              </a>
            </li>
            <li>
              <GiConfirmed size={25} />
              <a href="https://service.berlin.de/" rel="noreferrer noopener">
                How to get an appointement with Citzens Offices and read more
                aboutother services.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsBox;
