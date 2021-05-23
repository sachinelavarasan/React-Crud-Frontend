import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTask, editTask } from "../redux";

function AllTasksContainer({ tasksData, addTask, editTask }) {
  const [task, setTask] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (tasksData.edit) {
      setTask(tasksData.task.task);
      setType(tasksData.task.type);
      setDescription(tasksData.task.describe);
      setId(tasksData.task._id);
    }
  }, [tasksData.edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = { task: task, type: type, describe: description };
    addTask(obj);
    e.target.reset();
    setTask("");
    setType("");
    setDescription("");
  };
  const handleEdit = (e) => {
    e.preventDefault();
    let obj = { task: task, type: type, describe: description };
    editTask(obj, id);
    setTask("");
    setType("");
    setDescription("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="Details mt-5"
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
              setTask(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Task Type</label>
          <select
            className="form-select"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value=" "> Select Task Type</option>
            <option value="Billable">Billable</option>
            <option value="NonBillable">NonBillable</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description about task"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {tasksData.edit ? (
          <button
            type="submit"
            className="btn btn-info ml-2"
            onClick={(e) => {
              handleEdit(e);
            }}
          >
            Edit
          </button>
        ) : (
          <button type="submit" className="btn btn-success ml-2">
            Add
          </button>
        )}
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasksData: state.tasks,
  };
};

const mapDispatchToProps = {
  addTask,
  editTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTasksContainer);
