import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postReaquest, _Authorization } from "../utils/fetchData";

import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [password, setPassword] = useState("");
  const [pnumber, setPnumber] = useState("");
  const fullName = name + fname;
  const body = {
    fullName,
    phoneNumber: pnumber,
    password,
    roleId: "631836e3e171de6c5c96186f",
  };
  const url = "https://cartestwebapp.herokuapp.com/employee";

  async function createEmployee() {
    postReaquest(url, body, _Authorization).then((data) => console.log(data));
    navigate("/login");
  }

  return (
    <main>
      <div className="container s-register">
        <form className="form" id="form">
          <h2>Ro`yxatdan O`tish</h2>
          <div className="form-control">
            <label htmlFor="username">Ism</label>
            <input
              type="username"
              id="fname"
              placeholder="Ismingizni Kiriting"
              onChange={(e) => setName(e.target.value)}
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="username">Familiya</label>
            <input
              type="username"
              id="lname"
              placeholder="Familiyangizni Kiriting"
              onChange={(e) => setFname(e.target.value)}
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="password">Telefon:</label>
            <input
              onChange={(e) => setPnumber(e.target.value)}
              type="number"
              id="password"
              placeholder="Telefon raqamingizni Kiriting"
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="password">Parol</label>
            <input
              type="password"
              id="password"
              placeholder="Parolni Kiriting"
              onChange={(e) => setPassword(e.target.value)}
            />
            <small>Error message</small>
          </div>

          <button type="button" onClick={createEmployee}>
            Davom Etish
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
