import React from "react";

const Navbar = () => {
  function handleLogout() {
    fetch("/logout")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;
