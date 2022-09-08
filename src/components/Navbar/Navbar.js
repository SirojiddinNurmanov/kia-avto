import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(true);
  return (
    <div>
      <div className="navbar">
        <div className="notification">
          <img src="img/icons/Notification.png" alt="not"></img>
        </div>
        <div onClick={() => setValue(!value)} className="profile">
          <img src="img/icons/userl.png" alt="auth" />
          <div className={value ? "profile-page active " : "profile-page"}>
            <div className="p-wrapper">
              <div className="profile-img">
                <img src="img/icons/user.png" alt="auth1" />
              </div>
              <div className="p-line"></div>
              <div className="profile-name">
                <span>Sirojiddin Nurmanov</span>
              </div>
              <div className="profile-auth">
                <span
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="p-register"
                >
                  Ro'yxatdan o'tish
                </span>
                <span
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="p-login"
                >
                  Tizimga kirish
                </span>
              </div>
              <div onClick={() => setValue(false)}>
                <img src="img/icons/close.png" alt="close" className="close" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
