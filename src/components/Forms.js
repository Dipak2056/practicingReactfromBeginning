import React, { useState } from "react";

export const Forms = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    newsletter: true,
  });
  const handleOnChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevformData) => {
      return {
        ...prevformData,
        [name]: type == "checkbox" ? checked : value,
      };
    });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (formData.password === formData.confirmpassword) {
      console.log("successfully signed up");
    } else {
      console.log("password didnot matched");
      return;
    }
    if (formData.newsletter) {
      console.log("thanks for subscribing");
    } else {
      console.log("why you would miss our newsletter");
    }
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="email"
        onChange={handleOnChange}
        value={formData.email}
      />{" "}
      <br />
      <input
        type="password"
        name="password"
        onChange={handleOnChange}
        value={formData.password}
      />{" "}
      <br />
      <input
        type="password"
        name="confirmpassword"
        placeholder="confirm password"
        onChange={handleOnChange}
        value={formData.confirmpassword}
      />
      <br />
      <input
        onChange={handleOnChange}
        type="checkbox"
        name="newsletter"
        id="newsletter"
        checked={formData.newsletter}
      />
      <label htmlFor="newsletter">I want to join the newsletter</label>
      <button>Sign Up</button>
    </form>
  );
};
