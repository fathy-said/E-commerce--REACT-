import { createSlice } from "@reduxjs/toolkit";
import { PartnersThunk } from "../Thunk/PartnersThunk";
let initState = {
    partnersLoading: false,
    partnersData: [],
};

let PartnersReducer = createSlice({
    name: "partners",
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(PartnersThunk.pending, (state, action) => {
                // console.log("loading");
                state.partnersLoading = true;
            })
            .addCase(PartnersThunk.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.partnersData = action.payload;
                state.partnersLoading = false;
            })
            .addCase(PartnersThunk.rejected, (state, action) => {
                console.log("rejected");
                state.partnersLoading = false;
            });
    },
});
// export let {  } = PartnersReducer.actions;
export default PartnersReducer.reducer;
