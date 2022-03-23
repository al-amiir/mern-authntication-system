import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signUpPhoto1 from "../styles/photos/signup1.png";
import signUpPhoto2 from "../styles/photos/signup2.png";

import "../styles/signup.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: usernameValue,
        email: emailValue,
        password: passwordValue,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        res.usernameError ? setUsernameError(res.usernameError) : setUsernameError("");
        res.emailError ? setEmailError(res.emailError) : setEmailError("");
        res.passwordError ? setPasswordError(res.passwordError) : setPasswordError("");
        if (res.successMessage === "success") navigate("/login");
      });
  }

  return (
    <div className="signup">
      <img src={signUpPhoto1} alt="signup photo" />
      <form>
        <p>Sing Up</p>
        <label htmlFor="username">username</label>
        <input type="text" name="username" value={usernameValue} onChange={(e) => setUsernameValue(() => e.target.value)} />
        <p style={{ color: "red" }}>{usernameError}</p>
        <br />
        <label htmlFor="email">email</label>
        <input type="email" name="email" value={emailValue} onChange={(e) => setEmailValue(() => e.target.value)} />
        <span>{emailError}</span>
        <br />
        <label htmlFor="password">password</label>
        <input type="password" name="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />
        <span>{passwordError}</span>
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
      <img src={signUpPhoto2} alt="signup photo" />
    </div>
  );
};

export default SignUpPage;
