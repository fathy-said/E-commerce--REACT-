import { createSlice } from "@reduxjs/toolkit";
import { HomeThunk } from "../Thunk/HomeThunk";
let initState = {
  homeLoadingData: true,
  productsHome: [],
  storesHome: [],
  packagesHome: [],
  commentHome: [],
  partnersHome: [],
  linkWebsite: [],
  homeAllData: [],
  homeFooter: [],
  StoreActivities: [],
  StoreCities: [],
  homeMedia: 'large'
};
let HomeReducer = createSlice({

  name: "home",
  initialState: initState,
  reducers: {
    storeFilterAction: (state, action) => {
      // console.log(action.payload)
      // console.log(state.homeAllData.stores[24].city.name)
      let data = state.homeAllData.stores
      state.storesHome = data.filter((el) => (action.payload.cities === el.city.name) && (action.payload.Type === el.activity[0].name)).slice(0, state.homeMedia === "large" ? 24 : 10)
    },
    storeIncrease: (state, action) => {
      // console.log(action.payload)
    },
    storeChangeSlice: (state, action) => {
      // console.log(action.payload)
      state.homeMedia = action.payload
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
        state.homeFooter = action.payload.data.footer
        state.productsHome = action.payload.data.products
        state.storesHome = action.payload.data.stores.slice(0, state.homeMedia === "large" ? 24 : 10)
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
export let { storeFilterAction, storeIncrease, storeChangeSlice } = HomeReducer.actions