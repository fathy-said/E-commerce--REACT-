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
  StoreActivities: [],
  StoreCities: [],

};
let HomeReducer = createSlice({

  name: "home",
  initialState: initState,
  reducers: {
    storeFilterAction: (state, action) => {
      // console.log(action.payload)
      // console.log(state.homeAllData.stores[24].city.name)
      let data = state.homeAllData.stores
      state.storesHome = data.filter((el) => (action.payload.cities === el.user.city.name) && (action.payload.Type === el.activity[0].name))
    }
  },
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
        state.StoreCities = action.payload.data.cities
        state.StoreActivities = action.payload.data.store_activities
        // console.log(action.payload)

      })
      .addCase(HomeThunk.rejected, (state, action) => {
        state.homeLoadingData = false
      })
  }
})
export default HomeReducer.reducer
export let { storeFilterAction } = HomeReducer.actions