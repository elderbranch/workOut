import { instance } from "./api";

export const logInByToken = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await instance.get(`/users/profile/`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error during logInByToken:", error.message);
    return { error: error.message };
  }
};