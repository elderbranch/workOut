import { create } from "zustand";
import { getAllExersizes } from "../api/Exersizes";

export const useExersizeWorkOutStore = create((set, get) => ({
  exersizes: [],
  selectedExersizes: [],
  nameOfWorkOut: '',
  nameOfSearchingExToAdd: '',
  nameOfSearchingExIcon: '',
  loading: true,
  error: null,

  fetchExersizes: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getAllExersizes();
      set({ exersizes: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  selectExersizes: (newExersizeID) => set((state) => {
    const isAlreadySelected = state.selectedExersizes.includes(newExersizeID);
    return {
      selectedExersizes: isAlreadySelected
        ? state.selectedExersizes.filter((id) => id !== newExersizeID)
        : [...state.selectedExersizes, newExersizeID],
    };
  }),

  setNameOfSearchingExToAdd: (value) => set(() => ({ nameOfSearchingExToAdd: value })),
  setNameOfSearchingExIcon: (value) => set(() => ({ nameOfSearchingExIcon: value })),
  setNameOfWorkOut: (value) => set(() => ({ nameOfWorkOut: value })),

}));
