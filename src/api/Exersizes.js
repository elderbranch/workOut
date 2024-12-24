import toast from "react-hot-toast";
import { instance } from "./api";

export const addNewExersize = async (data) => {
  try {
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` }
    const res = await instance.post(`/exercises/ `, { data }, { headers });
    toast.success('Exersize was created');
    return res.data;
  } catch (error) {
    toast.error("Exersize wasn't created");
    console.error("Error during logInByToken:", error.message);
    return { error: error.message };
  }
};


// export const updateExersize = async ({ data, id }) => {
//   try {
//     const token = localStorage.getItem('token');
//     const headers = { 'Authorization': `Bearer ${token}` }
//     const res = await instance.post(`/exercises/${id} `, { data }, { headers });
//     console.log(res.data);
//     return res.data;
//   } catch (error) {
//     console.error("Error during logInByToken:", error.message);
//     return { error: error.message };
//   }
// };

// export const deleteExersize = async ({ id }) => {
//   try {
//     const token = localStorage.getItem('token');
//     const headers = { 'Authorization': `Bearer ${token}` }
//     const res = await instance.post(`/exercises/${id} `, {}, { headers });
//     console.log(res.data);
//     return res.data;
//   } catch (error) {
//     console.error("Error during logInByToken:", error.message);
//     return { error: error.message };
//   }
// };
export const getAllExersizes = async () => {
  try {
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` }
    const res = await instance.get(`/exercises/ `,{ headers });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error during logInByToken:", error.message);
    return { error: error.message };
  }
};