import { createSlice } from "@reduxjs/toolkit";
import { productThunk } from "../Thunk/ProductThunk";
let initState = {
    productLoading: false,
    productData: [],
};

let productReducer = createSlice({
    name: "product",
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productThunk.pending, (state, action) => {
                // console.log("loading");
                state.productLoading = true;
            })
            .addCase(productThunk.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.productData = action.payload;
                state.productLoading = false;
            })
            .addCase(productThunk.rejected, (state, action) => {
                console.log("rejected");
                state.productLoading = false;
            });
    },
});
// export let {  } = productReducer.actions;
export default productReducer.reducer;
