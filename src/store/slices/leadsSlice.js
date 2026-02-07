import { createSlice } from "@reduxjs/toolkit";
import { leads as initialLeads } from "../../data/dummyData";
import { loadState } from "../localStorage";

const initialState = {
  leads:
    loadState("leads", null) ||
    initialLeads.map((l) => ({
      ...l,
      date: l.date || new Date().toISOString().split("T")[0],
      value: l.value || 5000,
    })),
};

const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    addLead: (state, action) => {
      const newLead = {
        id: Date.now(),
        ...action.payload,
        date: new Date().toISOString().split("T")[0],
      };
      state.leads.push(newLead);
    },
    deleteLead: (state, action) => {
      state.leads = state.leads.filter((lead) => lead.id !== action.payload);
    },
    updateLead: (state, action) => {
      const { id, data } = action.payload;
      const index = state.leads.findIndex((lead) => lead.id === id);
      if (index !== -1) state.leads[index] = { ...state.leads[index], ...data };
    },
  },
});

// Selectors
export const selectLeads = (state) => state.leads.leads;

export const selectLeadFunnel = (state) => {
  const leads = state.leads.leads;
  return {
    leads: leads.length,
    contacted: leads.filter((l) => l.status === "Contacted").length,
    qualified: leads.filter((l) => l.status === "Qualified").length,
    customers: leads.filter((l) => l.status === "Customer").length,
  };
};

export const { addLead, deleteLead, updateLead } = leadsSlice.actions;
export default leadsSlice.reducer;
