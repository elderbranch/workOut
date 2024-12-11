import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null, 

  setUser: (userData) => set({ user: userData }),

  // updateStatistics: (newStatistics) =>
  //   set((state) => ({
  //     user: {
  //       ...state.user,
  //       statistics: state.user.statistics.map((stat, index) => ({
  //         ...stat,
  //         value: newStatistics[index]?.value || stat.value,
  //       })),
  //     },
  //   })),

}));

export default useUserStore;
