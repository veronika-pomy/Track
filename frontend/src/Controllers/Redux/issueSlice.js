import { createSlice } from '@reduxjs/toolkit';
import { getIssuesData } from '../../Data/issues';

const slice = createSlice({
    name: 'issue',
    initialState: [],
    reducers: {
        getIssues: (state) => {
            getIssuesData();
        },
        createIssue: (state, actions) => {

        },
        updateIssue: (state, actions) => {

        },
        markIssueComplete: (state, actions) => {

        }
    }
})

export default slice.reducer;

export const { getIssues, createIssue, updateIssue, markIssueComplete } = slice.actions;