import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DataReview } from "../../assets/Data/Data";

export let ReviewThunk = createAsyncThunk(
    "review/ReviewThunk",
    async (arg, ThunkAPI) => {
        let { rejectWithValue } = ThunkAPI;
        try {
            // let res = await axios.get(``);
            let res = await DataReview;
            return res;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
