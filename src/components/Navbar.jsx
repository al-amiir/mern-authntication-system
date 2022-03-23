import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ loggInCondition, setloggInCondition }) => {
  const navigate = useNavigate();
  function handleLogout() {
    fetch("/logout")
      .then((res) => res.json())
      .then((res) => {
        setloggInCondition(false);
        navigate("/");
      });
  }
  return (
    <div>
      {loggInCondition ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <Link to="/">Home</Link>
          <Link to="/products">products</Link>
        </>
      ) : (
        <>
          <Link to="/">Home</Link>
          <Link to="/products">products</Link>
          <Link to="/login"> login</Link>
          <Link to="/signup">signup</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
