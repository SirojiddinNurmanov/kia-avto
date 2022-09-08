import React from "react";

import "./model.css";
const Models = () => {
  return (
    <div className="models">
      <h1>Modellari</h1>
      <div className="automobiles">
        <div className="automobile">
          <img src="/img/models/chevrolet.png" alt="auto"></img>
          <span>Chevrolet</span>
        </div>
        <div className="automobile">
          <img src="/img/models/lada.png" alt="auto"></img>
          <span>Ladas</span>
        </div>
        <div className="automobile">
          <img src="/img/models/lamborghini.png" alt="auto"></img>
          <span>Lamborghini</span>
        </div>
        <div className="automobile">
          <img src="/img/models/ferari.png" alt="auto"></img>
          <span>Ferrari</span>
        </div>
      </div>
    </div>
  );
};

export default Models;
