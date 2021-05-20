import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASKS,
  EDIT_TASK,
  SELECTED_TASK,
  DELETE_TASK,
} from "./ItemsActionTypes";

const initialState = {
  loading: false,
  tasks: [],
  task: [],
  edit: false,
  error: "",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TASKS_SUCCESS:
      return {
        loading: false,
        tasks: action.payload,
        error: "",
      };
    case FETCH_TASKS_FAILURE:
      return {
        loading: false,
        tasks: [],
        error: action.payload,
      };
    case ADD_TASKS:
      return {
        loading: false,
        tasks: [...state.tasks, action.payload],
        error: "",
      };
    case DELETE_TASK:
      return {
        loading: false,
        tasks: state.tasks.filter((task) => task._id != action.payload),
        error: "",
      };
    case EDIT_TASK:
      return {
        loading: false,
        tasks: state.tasks.map((task) =>
          task._id == action.id ? action.payload : task
        ),
        error: "",
      };
    case SELECTED_TASK:
      return {
        loading: false,
        tasks: state.tasks,
        task: state.tasks.find((task) => task._id == action.payload),
        edit: true,
        error: "",
      };
    default:
      return state;
  }
};

export default taskReducer;
