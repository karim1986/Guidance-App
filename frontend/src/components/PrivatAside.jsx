import { useState } from "react";
import { getNewComers } from "../services/fakeservices";

const PrivatAside = () => {
  const [newComers, setNewcomers] = useState(getNewComers());

  return (
    <div className="aside aside__profiles">
      {newComers.map((comer) => (
        <div className="comer-container">
          <div className="newComer-profile">
            <div className="newComer-foto">
              <img src={comer.foto} alt="profile foto" />
              <div className="column-flex">
                <p>{comer.name}</p>
                <p>{comer.role}</p>
                <p>{comer.city}</p>
              </div>
            </div>
            <div className="newComer-text">
              <p>{comer.text}</p>
            </div>
          </div>
          <div className="btn btn-profile">
            <button>Contact</button>
            <button>I can't help</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrivatAside;
