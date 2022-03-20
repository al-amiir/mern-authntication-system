import React, { useEffect, useState } from "react";

const App = () => {
  useEffect(() => {
    // fetch("/home")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    fetch("/home", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: "alamir",
        age: 27,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return <div>App</div>;
};

export default App;
