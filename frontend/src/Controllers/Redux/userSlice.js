import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'user',
    initialState: [{}],
    reducers: {
        getUser: (state) => {
            state.push({name: "Veronika"});
            state.push({name: "Jon W Jay"});
            state.push({name: "Tony"});
            state.push({name: "Amy S."});
        }
    }
})

export default slice.reducer;

export const { getUser } = slice.actions;