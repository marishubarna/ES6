import React from "react";
import { useState } from "react";

function Password({ children }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Data", formData);
  };

  return (
    <form action="" onClick={handelSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handelChange}
        placeholder="First Name"
      />
      <br />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handelChange}
        placeholder="Password"
      />
      <br />
      {children}
    </form>
  );
}

export default Password;
