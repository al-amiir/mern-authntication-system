import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginPhoto from "../styles/photos/login.png";
import "../styles/login.css";

const LogInPage = ({ setloggInCondition }) => {
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        res.emailError ? setEmailError(res.emailError) : setEmailError("");
        res.passwordError ? setPasswordError(res.passwordError) : setPasswordError("");
        if (res.successMessage === "success") {
          setloggInCondition(true);
          navigate("/");
        }
      });
  }

  return (
    <div className="login">
      <div className="login_form">
        <p>Login</p>
        <form>
          <label htmlFor="email">email</label>
          <input type="email" name="email" value={emailValue} onChange={(e) => setEmailValue(() => e.target.value)} />
          <span className="login_form-error">{emailError}</span>
          <br />
          <label htmlFor="password">password</label>
          <input type="password" name="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />
          <span className="login_form-error">{passwordError}</span>
          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
      <div>
        <img src={loginPhoto} alt="login photo" />
      </div>
    </div>
  );
};

export default LogInPage;
