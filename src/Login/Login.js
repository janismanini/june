import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <form className="login__form">
        <h1 className="login__form-title">
          Please sign in to see our project list
        </h1>
        <div className="login__form-group">
          <label for="name" className="login__form-label">
            user name
          </label>
          <input
            type="text"
            id="name"
            className="login__form-input"
            placeholder="name"
          />
        </div>
        <div className="login__form-group">
          <label for="password" className="login__form-label">
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
