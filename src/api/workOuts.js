import { instance } from "./api";

export const workOuts = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await instance.post(`/workouts`, {
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

export const createWorkOut = async ({ nameOfWorkOut, selectedExersizes }) => {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`,
    };

    const body = {
      name: nameOfWorkOut,
      exerciseIds: selectedExersizes,
    };

    console.log('Request Body:', body);

    const res = await instance.post(`/workouts`, body, { headers });
    console.log('Response:', res.data);
    return res.data;
  } catch (error) {
    console.error("Error during createWorkOut:", error.message);
    return { error: error.message };
  }
};