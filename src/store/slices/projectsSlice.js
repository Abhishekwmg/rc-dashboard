import { createSlice } from "@reduxjs/toolkit";
import { projects as initialProjects } from "../../data/dummyData";
import { loadState } from "../localStorage";

const initialState = {
  projects: loadState("projects", initialProjects),
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push({
        id: Date.now(),
        ...action.payload,
        stats: {
          upfront: 0,
          invoice: 0,
          received: 0,
          pending: 0,
        },
        milestones: [],
        team: [],
      });
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter((p) => p.id !== action.payload);
    },
    updateProject: (state, action) => {
      const { id, data } = action.payload;
      const index = state.projects.findIndex((p) => p.id === id);
      if (index !== -1)
        state.projects[index] = { ...state.projects[index], ...data };
    },
  },
});

// Selectors
export const selectProjects = (state) => state.projects.projects;

export const selectProjectStatus = (state) => {
  const projects = state.projects.projects;
  return {
    upcoming: projects.filter((p) => p.status === "Upcoming").length,
    inProgress: projects.filter((p) => p.status === "In Progress").length,
    completed: projects.filter((p) => p.status === "Completed").length,
  };
};

export const { addProject, deleteProject, updateProject } =
  projectsSlice.actions;
export default projectsSlice.reducer;
