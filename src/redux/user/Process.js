import instance from "./Api";
import { toast } from "react-toastify";

export const signUp = async (obj,callback) => {
  instance
    .post(`/users/signup`, obj)
    .then((response) => {
      const user = response.data;
      toast.success(user, {
        position: "top-center",
        autoClose: 2000,
      });
      if (callback) {
        callback();
      }
    })
    .catch((error) => {
      toast.warning(error.message, {
        position: "top-center",
        autoClose: 2000,
      });
    });
};
export const logIn = async (obj, callback) => {
  instance
    .post(`/users/login`, obj)
    .then((response) => {
      const user = response.data;
      localStorage.setItem("auth", JSON.stringify(user));
      toast.success("Login success", {
        position: "top-center",
        autoClose: 2000,
      });
      if (callback) {
        callback();
      }
    })
    .catch((error) => {
      toast.error("Unauthorised user", {
        position: "top-center",
        autoClose: 2000,
      });
    });
};
