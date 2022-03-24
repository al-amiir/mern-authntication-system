import React from "react";
import "../styles/about.css";
const About = () => {
  return (
    <div className="about">
      <p>This simple app is about user authentication, authorization, and protecting a specific page so that if you do not log in you can't navigate to it.</p>
      <p>Using React, Node, Express, MongoDB, JWT, Bcrypt and Cookies</p>
      <div>
        <img src="https://img.icons8.com/plasticine/65/000000/react.png" />
        <img src="https://img.icons8.com/fluency/60/000000/node-js.png" />
        <img src="https://img.icons8.com/color/60/000000/mongodb.png" />
        <img src="https://img.icons8.com/color/60/000000/java-web-token.png" />
        <img src="https://img.icons8.com/flat-round/55/000000/lock--v1.png" />
        <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/60/000000/external-cookie-christmas-flatart-icons-lineal-color-flatarticons.png" />
      </div>
    </div>
  );
};

export default About;
