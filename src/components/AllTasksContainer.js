import React, {  useState } from "react";
import { connect } from "react-redux";
import { addTask, editTask } from "../redux";

function AllTasksContainer({ tasksData, addTask, editTask }) {
  console.log(tasksData);
  const [task, newTask] = useState("");
  const [type, newType] = useState("");
  const [description, newDescription] = useState("");
  const [id, setId] = useState("");
  if (tasksData.edit) {
    newTask(tasksData.task);
    newType(tasksData.type);
    newDescription(tasksData.describe);
    setId(tasksData._id);
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let obj = { task: task, type: type, describe: description };
          console.log(obj);
          addTask(obj);
          e.target.reset();
          newTask("");
          newTask("");
          newDescription("");
        }}
        className="mt-5"
      >
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Task"
            required
            name="task-name"
            value={task}
            onChange={(e) => {
              newTask(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Task Type</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Task type"
            required
            name="task-type"
            value={type}
            onChange={(e) => {
              newType(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description about task"
            required
            value={description}
            onChange={(e) => newDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success ml-2">
          Add
        </button>
        <button
          type="submit"
          className="btn btn-success ml-2"
          onClick={(e) => {
            e.preventDefault();
            let obj = { task: task, type: type, describe: description};
            editTask(obj,id);
          }}
        >
          Edit
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasksData: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTask(obj)),
    editTask: (data,id) => dispatch(editTask(data,id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTasksContainer);
