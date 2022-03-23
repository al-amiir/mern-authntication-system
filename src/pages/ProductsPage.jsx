import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import treasurePhoto from "../styles/photos/treasure.png";
import "../styles/products.css";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [block, setblock] = useState(0);
  const [username, setUsername] = useState("");
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((res) => {
        if (res.isLoggedIn) {
          setblock(1);
          setUsername(res.username);
        } else {
          setblock(0);
          navigate("/login");
        }
      });
  }, []);

  return (
    <div className="products" style={{ filter: `brightness(${block})` }}>
      <p>
        Well Done <span style={{ color: "aqua" }}>{username} </span> You Find The <span style={{ color: "crimson" }}>Protected Treasure</span>.
      </p>
      <img src={treasurePhoto} alt="treasure photo" />
    </div>
  );
};

export default ProductsPage;
