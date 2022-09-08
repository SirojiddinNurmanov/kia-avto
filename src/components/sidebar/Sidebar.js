import React from "react";

import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="navigation-bar">
        <li>
          <img src="img/icons/Subtract.png" alt="home" />
          <span>Bosh Sahifa</span>
        </li>
        <li>
          <img src="img/icons/Union.png" alt="home" />
          <span>E`lonlar</span>
        </li>
        <li>
          <img src="img/icons/light.png" alt="home" />
          <span>Savollar</span>
        </li>
      </ul>
      <div className="sun-moon">
        <div className="sun active">
          <img alt="sun" src="img/icons/filled.png" />
        </div>
        <div className="moon">
          <img alt="moon" src="img/icons/moon.png" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
