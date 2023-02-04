import { createSlice } from "@reduxjs/toolkit";
import { BlogDataThunk } from "../Thunk/BlogDataThunk";
let initState = {
  BlogLoadingData: true,

  BlogAllData: [],
  pagesData: [],
  pagesTargetData: [],
  postCategory: [],

};
let BlogDataReducer = createSlice({

  name: "blog",
  initialState: initState,
  reducers: {
    blogType: (state, action) => {
      // console.log(action.payload.type);

      if (action.payload.type === "all") {
        let data = state.pagesData;
        state.pagesTargetData = data;
      }
      if (action.payload.type === "التجارة الالكترونية") {
        let data = state.pagesData
        state.pagesTargetData = data.filter((el) => action.payload.type === el.postCategory.name);
      }
      if (action.payload.type === "التسويق الرقمي") {
        let data = state.pagesData
        state.pagesTargetData = data.filter((el) => action.payload.type === el.postCategory.name);
      }
      if (action.payload.type === "ادارة الاسواق") {

        let data = state.pagesData
        state.pagesTargetData = data.filter((el) => action.payload.type === el.postCategory.name);

      }

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(BlogDataThunk.pending, (state, action) => {
        state.BlogLoadingData = true
      })
      .addCase(BlogDataThunk.fulfilled, (state, action) => {
        state.BlogLoadingData = false
        state.BlogAllData = action.payload.data
        state.pagesData = action.payload.data.pages
        state.pagesTargetData = action.payload.data.pages
        state.postCategory = action.payload.data.postCategory

      })
      .addCase(BlogDataThunk.rejected, (state, action) => {
        state.BlogLoadingData = false
      })
  }
})
export let { blogType } = BlogDataReducer.actions;
export default BlogDataReducer.reducer