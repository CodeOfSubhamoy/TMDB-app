import React, { useState } from "react";

const Test = () => {
  const [userDetail, setUserDetail] = useState({
    username: "",
    password: "",
  });

  const handleFields = (e) => {
    setUserDetail((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    console.log("submit ", { ...userDetail });
  };
  return (
    <div style={{ padding: "10px", margin: "10px" }}>
      <label htmlFor="username">username: </label>
      <input
        type="text"
        name="username"
        value={userDetail.username}
        onChange={handleFields}
      />
      <br />
      <label htmlFor="username">password: </label>
      <input
        type="password"
        name="password"
        value={userDetail.password}
        onChange={handleFields}
      />
      <br />
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
};

export default Test;
