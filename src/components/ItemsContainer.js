import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllTasks, deleteTask, selectedTask } from "../redux";
import ViewModal from "./ViewMoreModal";

function ItemsContainer({ itemsData, getAllTasks, deleteTask, selectedTask }) {
  useEffect(() => {
    getAllTasks();
  }, [getAllTasks]);

  console.log(itemsData);
  return itemsData.loading ? (
    <h2>Loading</h2>
  ) : itemsData.error ? (
    <h2>{itemsData.error}</h2>
  ) : (
    <div>
      <h2>Blog List</h2>
      <div className="row">
        {itemsData &&
          itemsData.tasks &&
          itemsData.tasks.map((item) => (
            <div
              className="col-sm-4"
              key={item._id}
              style={{ width: "14rem", height: "200px" }}
            >
              <div className="card">
                <div>
                  <p className="card-title">{item.uid}</p>

                  <p className="card-subtitle">{item.time}</p>
                </div>
                <div className="card-body">
                  <p className="card-subtitle mb-2 text-muted">
                    {item.task}
                    <div>{item.type}</div>
                  </p>

                  <div className="bg-warning rounded">
                    <p className="card-title ">{item.describe}</p>
                  </div>
                  <div>
                    <button
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
                    <div>
                      <ViewModal />
                    </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTasks: () => dispatch(getAllTasks()),
    selectedTask: (id) => dispatch(selectedTask(id)),
    deleteTask: (id) => dispatch(deleteTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
