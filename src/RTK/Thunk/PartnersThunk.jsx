import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DataPartner } from "../../assets/Data/Data";

export let PartnersThunk = createAsyncThunk(
    "partners/PartnersThunk",
    async (arg, ThunkAPI) => {
        let { rejectWithValue } = ThunkAPI;
        try {
            // let res = await axios.get(``);
            let res = await DataPartner;
            return res;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
