import axios from "axios";
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
    dispatch(fetchTasksRequest());
    axios
      .get("http://localhost:4000/tasks/tasks")
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
    axios
      .post("http://localhost:4000/tasks/tasks", obj)
      .then((response) => {
        // response.data is the users
        const Items = response.data;
        console.log(Items);
        dispatch(addTasksSuccess(obj));
      })
      .catch((error) => {
        // error.message is the error message
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
  console.log(id);
  return (dispatch) => {
    // dispatch(fetchItemsRequest());
    axios
      .get(`http://localhost:4000/tasks/tasks/${id}`)
      .then((response) => {
        // response.data is the users
        console.log(response.data);
        dispatch(selectedTasksSuccess(id));
      })
      .catch((error) => {
        // error.message is the error message
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
  //console.log(id)
  return (dispatch) => {
    // dispatch(fetchItemsRequest());
    axios
      .patch(`http://localhost:4000/tasks/tasks/${id}`, data)
      .then((response) => {
        // response.data is the users
        const Items = response.data;
        console.log(Items);
        dispatch(editItemsSuccess(data, id));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchTasksFailure(error.message));
      });
  };
};

export const editItemsSuccess = (data, id) => {
  return {
    type: EDIT_TASK,
    payload: data,
    id: id,
  };
};

export const deleteTask = (id) => {
  console.log(id);
  return (dispatch) => {
    // dispatch(fetchItemsRequest());
    axios
      .delete(`http://localhost:4000/tasks/tasks/${id}`)
      .then((response) => {
        // response.data is the users
        const Items = response.data;
        console.log(Items);
        dispatch(deleteItemsSuccess(id));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchTasksFailure(error.message));
      });
  };
};

export const deleteItemsSuccess = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
