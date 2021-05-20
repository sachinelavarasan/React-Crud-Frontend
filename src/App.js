import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import AllTasksContainer from "./components/AllTasksContainer";
import ItemsContainer from "./components/ItemsContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="row">
          <div className="col-sm-6">
            <ItemsContainer />
          </div>
          <div className="col-sm-6 container">
            <AllTasksContainer />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
