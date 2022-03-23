import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";

import { Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import LogInPage from "./pages/LogInPage";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products" exact element={<ProductsPage />} />
      </Routes>
    </div>
  );
};

export default App;
