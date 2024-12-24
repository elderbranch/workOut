import { create } from "zustand";
import { logInByToken } from "../api/logInByToken";

const useUserStore = create((set) => ({
  user: {},
  loading: true,
  error: null,
  loginUser: async () => {
    set({ loading: true, error: null });
    try {
      const data = await logInByToken();
      set({ user: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  setUser: (userData) => set({ user: userData }),
}));

export default useUserStore;
