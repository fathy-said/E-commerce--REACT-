import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducer/ProductReducer.jsx";
import StoresReducer from "./Reducer/StoresReducer.jsx";
import VideoReducer from "./Reducer/VideoReducer.jsx";
import PackageReducer from "./Reducer/PackageReducer.jsx";
import ReviewReducer from "./Reducer/ReviewReducer.jsx";
import PartnersReducer from "./Reducer/PartnersReducer.jsx";
import BlogReducer from "./Reducer/BlogReducer.jsx";
import HomeReducer from "./Reducer/HomeReducer.jsx";
import BlogDataReducer from "./Reducer/BlogDataReducer";
export let Store = configureStore({
    reducer: {
        ProductReducer,
        StoresReducer,
        VideoReducer,
        PackageReducer,
        ReviewReducer,
        PartnersReducer,
        BlogReducer,
        HomeReducer,
        BlogDataReducer,
    },
});
