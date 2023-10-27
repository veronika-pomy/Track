import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'auth',
    initialState: {
        admin: false,
        loggedIn: false
    },
    reducers: {
        signIn: (state, actions) => {
            const { name, password } = actions.payload;
            state.loggedIn = true;
            state.admin = true;
        },
        signOut: (state) => {
            state.loggedIn = false;
            state.admin = false;
        },
        createUser: (state, actions) => {

        }
    }
})

export default slice.reducer;

export const { signIn, signOut, createUser } = slice.actions;