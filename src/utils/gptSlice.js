import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPTSearch: false,
    },
    reducers: {
        hideGPTSearchView: (state) => {
            state.showGPTSearch = false;
        },
        setGPTSearchView: (state) => {
            state.showGPTSearch = true;
        }
    }
});

export const { hideGPTSearchView, setGPTSearchView } = gptSlice.actions;

export default gptSlice.reducer;