import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";

import { Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import LogInPage from "./pages/LogInPage";
import About from "./pages/About";

const App = () => {
  const [loggInCondition, setloggInCondition] = useState(false);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((res) => {
        if (res.isLoggedIn) {
          setloggInCondition(true);
        } else {
          setloggInCondition(false);
        }
      });
  }, []);
  return (
    <div>
      <Navbar loggInCondition={loggInCondition} setloggInCondition={setloggInCondition} />

      <Routes>
        <Route path="/" element={<Home loggInCondition={loggInCondition} />} />
        <Route path="/login" element={<LogInPage setloggInCondition={setloggInCondition} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
