import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  function handleLogout() {
    fetch("/logout")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/login"> login</Link>
      <Link to="/signup">signup</Link>
      <Link to="/products">products</Link>
    </div>
  );
};

export default Navbar;
