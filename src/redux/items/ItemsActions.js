import axios from "axios";
import { toast } from "react-toastify";
import swal from "sweetalert";
import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASKS,
  EDIT_TASK,
  SELECTED_TASK,
  DELETE_TASK,
} from "./ItemsActionTypes";

export const getAllTasks = () => {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem("auth"));
    dispatch(fetchTasksRequest());
    axios
      .get(`http://localhost:4000/tasks/tasks/${token.user}`)
      .then((response) => {
        // response.data is the users
        const Tasks = response.data;
        dispatch(fetchTasksSuccess(Tasks));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchTasksFailure(error.message));
      });
  };
};

export const fetchTasksRequest = () => {
  return {
    type: FETCH_TASKS_REQUEST,
  };
};

export const fetchTasksSuccess = (Tasks) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: Tasks,
  };
};

export const fetchTasksFailure = (error) => {
  return {
    type: FETCH_TASKS_FAILURE,
    payload: error,
  };
};

export const addTask = (obj) => {
  return (dispatch) => {
    // dispatch(fetchItemsRequest());
    const token = JSON.parse(localStorage.getItem("auth"));
    obj.uid = token.user;
    axios
      .post(`http://localhost:4000/tasks/tasks/`, obj)
      .then((response) => {
        // response.data is the users
        const Items = response.data;
        toast.success("Task Added successfully", {
          position: "top-center",
          autoClose: 2000,
        });
        dispatch(addTasksSuccess(Items));
      })
      .catch((error) => {
        // error.message is the error message
        toast.error(error.message, {
          position: "top-center",
          autoClose: 2000,
        });
        dispatch(fetchTasksFailure(error.message));
      });
  };
};
export const addTasksSuccess = (items) => {
  return {
    type: ADD_TASKS,
    payload: items,
  };
};

export const selectedTask = (id) => {
  return (dispatch) => {
    // dispatch(fetchItemsRequest());
    axios
      .get(`http://localhost:4000/tasks/tasks/one/${id}`)
      .then((response) => {
        dispatch(selectedTasksSuccess(response.data._id));
      })
      .catch((error) => {
        dispatch(fetchTasksFailure(error.message));
      });
  };
};

export const selectedTasksSuccess = (id) => {
  return {
    type: SELECTED_TASK,
    payload: id,
  };
};

export const editTask = (data, id) => {
  return (dispatch) => {
    axios
      .patch(`http://localhost:4000/tasks/tasks/${id}`, data)
      .then((response) => {
        // response.data is the users
        const Items = response.data;
        toast.info("Updated Successfully", {
          position: "top-right",
          autoClose: 2000,
        });
        dispatch(editItemsSuccess(Items, id));
      })
      .catch((error) => {
        toast.warning(error.message, {
          position: "top-right",
          autoClose: 2000,
        });
        dispatch(fetchTasksFailure(error.message));
      });
  };
};

export const editItemsSuccess = (data, id) => {
  return {
    type: EDIT_TASK,
    payload: { data: data, id: id },
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    swal({
      title: "Do You Want To delete the Task?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:4000/tasks/tasks/${id}`)
          .then((response) => {
            toast.warning("Deleted Successfully", {
              position: "top-right",
              autoClose: 2000,
            });
            dispatch(deleteItemsSuccess(id));
          })
          .catch((error) => {
            // error.message is the error message
            toast.error(error.message, {
              position: "top-right",
              autoClose: 2000,
            });
            dispatch(fetchTasksFailure(error.message));
          });
      } else {
        swal("You Cancelling task deleting process!");
      }
    });
  };
};

export const deleteItemsSuccess = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
