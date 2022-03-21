import React, { useState, useEffect } from "react";

const Login = () => {
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
        console.log(res);
        // const now = new Date();
        // const time = now.getTime();
        // const expireTime = time + 86400000;
        // now.setTime(expireTime);
        // document.cookie = `token=${res.token}; expires=${now.toUTCString()}`;
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

export default Login;
