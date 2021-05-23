import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  let token = JSON.parse(localStorage.getItem("auth"));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
