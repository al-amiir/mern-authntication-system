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
          navigate("/products");
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
          <Link to="/about">About</Link>
          <Link onClick={handleLogout} to="/">
            Logout
            <img style={{ marginLeft: "5px" }} src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/e2cfa6/external-logout-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya.png" />
          </Link>
        </>
      ) : (
        <>
          <Link to="/">Home</Link>
          <button onClick={handleProductsRequest}>
            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/45/000000/external-treasure-map-in-the-wild-flaticons-lineal-color-flat-icons.png" />
            Treasure
          </button>
          <Link to="/about">About</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">
            Login <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-logout-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya.png" />
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
