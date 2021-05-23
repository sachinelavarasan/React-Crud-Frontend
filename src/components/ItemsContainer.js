import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllTasks, deleteTask, selectedTask } from "../redux";
import ViewModal from "./ViewMoreModal";

function ItemsContainer({ itemsData, getAllTasks, deleteTask, selectedTask }) {
  useEffect(() => {
    getAllTasks();
  }, []);
  console.log(itemsData);
  return itemsData.loading ? (
    <h2>Loading</h2>
  ) : itemsData.error ? (
    <h2>{itemsData.error}</h2>
  ) : (
    <div>
      <div className="row">
        {itemsData &&
          itemsData.tasks &&
          itemsData.tasks.map((item) => (
            <div
              className="col-sm-4"
              key={item._id}
              style={{ width: "14rem", height: "300px" }}
            >
              <div className="card">
                <div>
                  <p className="card-title">{item.uid}</p>

                  <p className="card-subtitle">{item.time}</p>
                </div>
                <div className="card-body ">
                  <p className="card-subtitle mb-2 text-muted text-wrap">
                    {item.task}
                    <div>{item.type}</div>
                  </p>

                  <div className="bg-warning rounded">
                    <p className="card-title text-wrap">{item.describe}</p>
                  </div>
                  <div style={{ padding: "10px" }}>
                    <button
                      style={{ marginRight: "6px" }}
                      type="button"
                      className="btn btn-info btn-sm"
                      onClick={(e) => {
                        selectedTask(item._id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={(e) => {
                        deleteTask(item._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <div>
                    <ViewModal item={item} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemsData: state.tasks,
  };
};

const mapDispatchToProps = {
  getAllTasks,
  selectedTask,
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
