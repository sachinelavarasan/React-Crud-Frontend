import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import store from "./redux/store";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./redux/user/auth";

const Navbar = () => {
  const history = useHistory();
  return (
    <>
      <div>
        <ToastContainer />
        <nav className="navigation navbar navbar-expand-lg navbar-light bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item ps-5">
              <Link to="/" className="navbar-brand nav-link text-white">
                Task Manager
              </Link>
            </li>
          </ul>
        </nav>
        
          <form className="form-inline float-end">
            <div className="form-group">
              <button
                className="btn btn-primary btn-lg"
                type="submit"
                onClick={() => {
                  localStorage.clear();
                  history.push(`/login`);
                }}
              >
                Log out
              </button>
            </div>
          </form>
       
      </div>
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route>
            <Navbar />
          </Route>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/login" />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <SignUp />
            </Route>
            <PrivateRoute path="/task" exact>
              <Header />
              <ToastContainer />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
