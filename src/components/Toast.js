import {  toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify=(auth)=>{
  console.log(auth);
  toast.success(auth);
}


