import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.isLoggedIn);
        if (res.isLoggedIn) {
          navigate("/products");
        } else {
          navigate("/login");
        }
      });
  }, []);

  return <div>ProductsPage</div>;
};

export default ProductsPage;
