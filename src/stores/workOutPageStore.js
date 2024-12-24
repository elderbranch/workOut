import { create } from "zustand";
import { instance } from "../api/api";

export const useWorkOutStore = create((set, get) => ({
  workOuts: [],
  singleWorkOut: {},
  loading: true,
  error: null,

  fetchWorkOuts: async () => {
    set({ loading: true, error: null })
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const response = await instance.get('/workouts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);

      set({ workOuts: response.data, loading: false })
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  fetchSinglehWorkOuts: async (id) => {
    set({ loading: true, error: null })
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const response = await instance.get(`/workouts/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);

      set({ singleWorkOut: response.data, loading: false })
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));