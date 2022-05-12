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
              <GiConfirmed size={15} />
              <a
                href="https://service.berlin.de/"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                Berlin Services
              </a>
            </li>
            <li>
              <GiConfirmed size={15} />
              <a
                href="https://www.kita-navigator.berlin.de/"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                Kita-Navigator-Berlin
              </a>
            </li>
            <li>
              <GiConfirmed size={15} />
              <a
                href="https://www.berlin.de/einwanderung/"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                Immigration Office (Landesamt für Einwanderung)
              </a>
            </li>
            <li>
              <GiConfirmed size={15} />
              <a
                href="https://www.doctolib.de/"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                Doctor's Appointments
              </a>
            </li>
            <li>
              <GiConfirmed size={15} />
              <a
                href="https://service.berlin.de/dienstleistung/305244/en/"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                Residence permit for the purpose of studying
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsBox;
