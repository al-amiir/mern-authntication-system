import React, { useEffect, useState } from "react";

const App = () => {
  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return <div>App</div>;
};

export default App;
