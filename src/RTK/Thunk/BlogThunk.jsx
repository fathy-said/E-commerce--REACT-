import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DataBlog } from "../../assets/Data/Data";
export let BlogThunk = createAsyncThunk(
    "blog/BlogThunk",
    async (arg, thunkAPI) => {
        let { rejectWithValue } = thunkAPI;
        try {
            // let res = await axios.get(``);
            let res = await DataBlog;
            return res;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
