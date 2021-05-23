import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { logIn } from "../redux/user/Process";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, SetIcon] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    loading ? SetIcon(false) : SetIcon(true);
    let obj = { email: email, password: password };
    logIn(obj, () => {
      history.replace(`/task`);
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="col-sm-6 offset-2 mt-5">
      <h2 className="col-sm-4 offset-5">Login</h2>
      <div className="login">
        <div className="login-1">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="email"
                required
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-warning ml-2">
                {loading ? (
                  <i className="fa fa-spinner fa-spin fa-pulse fa-1x"></i>
                ) : (
                  <i className="fa fa-sign-in fa-1x" aria-hidden="true"></i>
                )}
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="login-2">
          <h1>Welcome Buddy</h1>
          <p>Login Page </p>
          <h4>New User</h4>
          <Link
            to="/signup"
            className="nav-link text-white bg-dark rounded-pill"
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
