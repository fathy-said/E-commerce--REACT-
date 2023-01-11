import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productSwiper } from "../../assets/Data/Data";

export let productThunk = createAsyncThunk(
    "product/productThunk",
    async (arg, ThunkAPI) => {
        let { rejectWithValue } = ThunkAPI;
        try {
            // let res = await axios.get(``);
            let res = await productSwiper;
            return res;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
