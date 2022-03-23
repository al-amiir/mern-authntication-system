import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
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
        if (res.message === "success") navigate("/");
      });
  }

  return (
    <div>
      <p>Login</p>
      <form>
        <label htmlFor="email">email</label>
        <input type="email" name="email" value={emailValue} onChange={(e) => setEmailValue(() => e.target.value)} />
        <br />

        <label htmlFor="password">password</label>
        <input type="password" name="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default LogInPage;
