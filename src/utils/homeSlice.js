import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        showHomePage: true,
    },
    reducers: {
        hideHomePageView: (state) => {
            state.showHomePage = false;
        },
        setHomePageView: (state) => {
            state.showHomePage = true;
        }
    }
});

export const { hideHomePageView, setHomePageView } = homeSlice.actions;

export default homeSlice.reducer;