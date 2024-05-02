
import initialState from "@/Data/Services.json";
import { createSlice } from "@reduxjs/toolkit";

export interface serviceType {
    title: string;
    description: string;
    to : string;
}

export interface serviceStateType {
    data: serviceType[];
}

const serviceSlice = createSlice({
    name: 'Service',
    initialState: initialState,
    reducers: {
        initializeService: (state, action) => {
            state.data = action.payload;
        }
    }
});

export const { initializeService } = serviceSlice.actions;

export default serviceSlice.reducer;