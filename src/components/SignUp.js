import React, { useState } from "react";
import { Link ,useHistory} from "react-router-dom";
import { signUp } from "../redux/user/Process";

function SignUp() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, SetIcon] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    loading ? SetIcon(false) : SetIcon(true);
    let obj = { email: email, password: password, username: name };
    signUp(obj,() => {
      history.replace(`/signup`);
    });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="col-sm-4 offset-4 mt-5">
      <h2 className="col-sm-4 offset-4">SignUp</h2>
      <div className="signup">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className=" mt-2"
        >
          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
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
            <button type="submit" className="btn btn-info ml-2">
              {loading ? (
                <i className="fa fa-spinner fa-spin fa-pulse fa-1x"></i>
              ) : (
                <i className="fa fa-user-plus fa-1x" aria-hidden="true"></i>
              )}
              Sign-Up
            </button>
          </div>
          <p>Already User</p>
          <Link to="/" className="text-dark">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
