import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AllTasksContainer from "./AllTasksContainer";
import ItemsContainer from "./ItemsContainer";


function Header() {
  return (
    <div className="App">
      <h2>Task List</h2>
      <div className="row">
        <div className=" col-sm-7 offset-1">
          <ItemsContainer />
        </div>
        <div className=" col-sm-4">
          <AllTasksContainer />
        </div>
      </div>
    </div>
  );
}
export default Header;
