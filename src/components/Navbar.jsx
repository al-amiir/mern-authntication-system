import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

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
  function handleProductsRequest() {
    fetch("/products")
      .then((res) => res.json())
      .then((res) => {
        if (res.isLoggedIn) {
        } else {
          navigate("/login");
        }
      });
  }
  return (
    <div className="navbar">
      {loggInCondition ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/products">
            <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/45/000000/external-treasure-pirates-justicon-lineal-color-justicon.png" /> Treasure
          </Link>
          <Link onClick={handleLogout} to="/">
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/">Home</Link>
          <button onClick={handleProductsRequest}>
            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/45/000000/external-treasure-map-in-the-wild-flaticons-lineal-color-flat-icons.png" />
            Treasure
          </button>
          <Link to="/signup">signup</Link>
          <Link to="/login"> login</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
