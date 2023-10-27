import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'user',
    initialState: [{}],
    reducers: {
        getUser: (state) => {
            state.push({name: "Veronika", email: 'veronika@test.com'});
            state.push({name: "Jon W Jay", email: 'john342@email.com'});
            state.push({name: "Tony", email: 'motocyclelover@email.com'});
            state.push({name: "Amy S.", emai: 'amys@email.com'});
        }
    }
})

export default slice.reducer;

export const { getUser } = slice.actions;