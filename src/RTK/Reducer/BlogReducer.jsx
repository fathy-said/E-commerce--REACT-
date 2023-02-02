import { createSlice } from "@reduxjs/toolkit";
import { BlogThunk } from "../Thunk/BlogThunk";
let initState = {
    blogLoading: false,
    blogAllData: [],
    blogData: [],
};

let BlogReducer = createSlice({
    name: "blogK",
    initialState: initState,
    reducers: {
        blogDatatype: (state, action) => {
            // console.log(action.payload.type);
            if (action.payload.type === "all") {
                let data = state.blogAllData;
                state.blogData = data;
            }
            if (action.payload.type === "trade") {
                let data = state.blogAllData.filter(
                    (el) => el.type === "trade"
                );
                state.blogData = data;
            }
            if (action.payload.type === "shop") {
                let data = state.blogAllData.filter((el) => el.type === "shop");
                state.blogData = data;
            }
            if (action.payload.type === "stores") {
                let data = state.blogAllData.filter(
                    (el) => el.type === "stores"
                );
                state.blogData = data;
            }
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(BlogThunk.pending, (state, action) => {
                // console.log("pending");
                state.blogLoading = true;
            })
            .addCase(BlogThunk.fulfilled, (state, action) => {
                state.blogAllData = action.payload;
                state.blogData = action.payload;
                // console.log("fulfilled");
                state.blogLoading = false;
            })
            .addCase(BlogThunk.rejected, (state, action) => {
                // console.log("rejected");
                state.blogLoading = false;
            });
    },
});
export let { blogDatatype } = BlogReducer.actions;
export default BlogReducer.reducer;
