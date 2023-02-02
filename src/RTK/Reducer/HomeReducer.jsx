import { createSlice } from "@reduxjs/toolkit";
import { HomeThunk } from "../Thunk/HomeThunk";
let initState = {
  homeLoadingData: true,
  productsHome: [],
  storesHome: [],
  packagesHome: [],
  commentHome: [],
  partnersHome: [],
  footerHome: [],
  linkWebsite: [],
  homeAllData: [],

};
let HomeReducer = createSlice({

  name: "home",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(HomeThunk.pending, (state, action) => {
        state.homeLoadingData = true
      })
      .addCase(HomeThunk.fulfilled, (state, action) => {
        state.homeLoadingData = false
        state.homeAllData = action.payload.data
        state.productsHome = action.payload.data.products
        state.storesHome = action.payload.data.stores
        state.packagesHome = action.payload.data.packages
        state.commentHome = action.payload.data.comment
        state.partnersHome = action.payload.data.partners
        state.linkWebsite = action.payload.data.website_socialmedia
        console.log(action.payload)

      })
      .addCase(HomeThunk.rejected, (state, action) => {
        state.homeLoadingData = false
      })
  }
})
export default HomeReducer.reducer