import { createSlice } from "@reduxjs/toolkit";

const userSlce = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        },
    }, 
});

export const {addUser, removeUser} = userSlce.actions;
export default userSlce.reducer;