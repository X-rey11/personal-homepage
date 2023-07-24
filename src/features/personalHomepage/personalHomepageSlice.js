import { createSlice } from '@reduxjs/toolkit';

const personalHomePagesSlice = createSlice({
    name: "personalHomepage",
    initialState: {
        repositories: null,
        status: "initial",
    },
    reducers: {
        fetchRepositories: () => ({
            status: "loading",
            repositories: null,
        }),
        fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
            status: "success",
            repositories,
        }),
        fetchRepositoriesError: () => ({
            status: "error",
            repositories: null,
        }),
    },
});

export const {
    fetchRepositories,
    fetchRepositoriesError,
    fetchRepositoriesSuccess
} = personalHomePagesSlice.actions;

const selectPersonalHomepageState = state => state.personalHomepage;

export const selectRepositories = state => selectHomepageState(state).status;
export const selectRepositoriesStatus = state => selectPersonalHomepageState(state).status;

export default personalHomePagesSlice.reducer;