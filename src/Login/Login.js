import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // prevent page reload
    e.preventDefault();
    try {
      // fetch authorisation token
      const response = await fetch("/api/auth/login_check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // send credentials via input field values
        body: JSON.stringify({
          username: e.currentTarget.elements.name.value,
          password: e.currentTarget.elements.password.value,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message);
      } else {
        // if success get token
        const data = await response.json();
        // save token in local storage
        localStorage.setItem("token", data.token);
        // redirect to index page
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <form autoComplete="off" className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__form-header">
          Please sign in to see our project list
        </h1>
        <div className="login__form-group">
          <label htmlFor="name" className="login__form-label">
            user name
          </label>
          <input
            type="text"
            id="name"
            className="login__form-input"
            placeholder="user name"
          />
        </div>
        <div className="login__form-group">
          <label htmlFor="password" className="login__form-label">
            password
          </label>
          <input
            type="password"
            id="password"
            className="login__form-input"
            placeholder="password"
          />
        </div>
        <div className="login__form-submit">
          <button type="submit" className="login__form-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
