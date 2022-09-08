import React, { useState } from "react";
import "../register/register.css";
import { useNavigate } from "react-router-dom";
import { postReaquest } from "../utils/fetchData";
const Login = () => {
  const navigate = useNavigate();
  const [userPhoneNumber, setUserPhoneNumber] = useState();
  const [password, setPassword] = useState("");

  const body = {
    phoneNumber: userPhoneNumber,
    password,
  };
  const url = "https://cartestwebapp.herokuapp.com/employee/login";
  //   async function LoginPost() {
  //     const userPassword = document.getElementById("loginpassword")?.value;

  //     let inputData = {
  //       user_phone: userPhoneNumber,
  //       user_password: userPassword,
  //     };
  //     const validData = authValidations.loginValidation(inputData);

  //     if (!validData.status) return alert(validData.message);

  //     async function request(url, method, body, headerData, formDataStatus) {
  //       try {
  //         const response = await fetch(url, {
  //           method,
  //           body: JSON.stringify(body),
  //           headers: {
  //             ...headerData,
  //             "Content-Type": formDataStatus
  //               ? "application/x-www-form-urlencoded"
  //               : "application/json",
  //           },
  //         });

  //         const data = await response.json();

  //         return data;
  //       } catch (err) {
  //         return err.message;
  //       }
  //     }

  //     const data = await request(
  //       "https://cartestwebapp.herokuapp.com/employee/login",
  //       "POST",
  //       inputData
  //     );

  //     if (data.status !== 200) return alert(data.message);
  //     if (!alert("Success logged your account!")) console.log(data);
  //     localStorage.setItem("token", data.token);
  //   }

  async function sendLogin() {
    const request = postReaquest(url, body);
    console.log(request);
    navigate(/");
  }
  return (
    <main>
      <div className="container s-register">
        <form className="form" id="form">
          <h2>Tizimga Kirish</h2>
          <div className="pro-img"></div>

          <div className="form-control">
            <label htmlFor="password">Telefon:</label>
            <input
              onChange={(e) => setUserPhoneNumber(e.target?.value)}
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
              onChange={(e) => setPassword(e.target?.value)}
            />
            <small>Error message</small>
          </div>

          <button type="button" onClick={sendLogin}>
            Davom Etish
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
