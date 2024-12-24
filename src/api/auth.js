import toast from "react-hot-toast";
import { instance } from "./api";

export const registerUserOrAuthUser = async (where, userData, isRememberMeChecked) => {
  try {
    const result = await instance.post(`/auth/${where}`, userData);
    const storage = isRememberMeChecked ? localStorage : sessionStorage;
    storage.setItem("token", result.data.token);
    console.log(result.data)

    toast.success(`Registration successful: ${result.data.message || "Success!"}`);
    window.location.href = "/profile";
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred!";

    toast.error(`Registration failed: ${errorMessage}`);
  }
};