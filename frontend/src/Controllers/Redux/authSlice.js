import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'auth',
    initialState: {
        admin: false,
        loggedIn: false
    },
    reducers: {
        logIn: (state, actions) => {
            const { email, password } = actions.payload;
            state.loggedIn = true;
            state.admin = true;
            console.log(state);
        },
        logOut: (state) => {
            state.loggedIn = false;
            state.admin = false;
        },
        createUser: (state, actions) => {

        }
    }
})

export default slice.reducer;

export const { logIn, logOut, createUser } = slice.actions;