import { configureStore } from "@reduxjs/toolkit";
import leadsReducer from "./slices/leadsSlice";
import projectsReducer from "./slices/projectsSlice";
import { saveState } from "./localStorage";

export const store = configureStore({
  reducer: {
    leads: leadsReducer,
    projects: projectsReducer,
  },
});

// Save both slices to localStorage
store.subscribe(() => {
  const state = store.getState();
  saveState("leads", state.leads.leads);
  saveState("projects", state.projects.projects);
});

export default store;
