import { createSlice } from "@reduxjs/toolkit";
import { ReviewThunk } from "../Thunk/ReviewThunk";
let initState = {
    reviewLoading: false,
    reviewData: [],
};

let ReviewReducer = createSlice({
    name: "review",
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ReviewThunk.pending, (state, action) => {
                // console.log("loading");
                state.reviewLoading = true;
            })
            .addCase(ReviewThunk.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.reviewData = action.payload;
                state.reviewLoading = false;
            })
            .addCase(ReviewThunk.rejected, (state, action) => {
                console.log("rejected");
                state.reviewLoading = false;
            });
    },
});
// export let {  } = StoresReducer.actions;
export default ReviewReducer.reducer;
