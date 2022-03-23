import React from "react";
import "../styles/home.css";
import homePhoto from "../styles/photos/home.png";
const Home = () => {
  return (
    <div className="home">
      <img src={homePhoto} alt="home photo" />
      <p>
        You Can't Find Your <span style={{ color: "crimson" }}>Protected Treasure </span> Before Login, Or Signup If You Don't Have An Account Yet.{" "}
      </p>
    </div>
  );
};

export default Home;
