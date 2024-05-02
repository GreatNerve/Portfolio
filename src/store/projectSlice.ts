import { createSlice } from "@reduxjs/toolkit";
import initialState from "@/Data/Projects.json";

export interface projectType {
  name: string;
  image: string;
  summary: string;
  description : string;
  techStack?: string[];
  status?: string;
  live?: string;
  git?: string;
  slug?: string;
}
export interface projectStateType {
  data: projectType[];
}

const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    initializeProduct: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { initializeProduct } = projectSlice.actions;
export const projectData = initialState;
export default projectSlice.reducer;
