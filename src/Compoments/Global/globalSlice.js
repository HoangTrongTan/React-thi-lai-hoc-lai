import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name:'global',
    initialState:{
        user: false,
    },
    reducers:{
        setUser: (state,action) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = globalSlice.actions;
export default globalSlice.reducer;