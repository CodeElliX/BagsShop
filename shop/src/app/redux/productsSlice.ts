import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

export const fetchBackpacks = createAsyncThunk("backpack/fetchBackpacksStatus", async (_, thankAPI) => {
    const { signal } = thankAPI;
    const { data } = await axios.get("/backpackData.json", { signal })
    return data;
})

export const fetchBags = createAsyncThunk("bag/fetchBagsStatus", async (_, thankAPI) => {
    const { signal } = thankAPI;
    const { data } = await axios.get("/bagsData.json", { signal })
    return data;
})

export const fetchWallets = createAsyncThunk("wallet/fetchWalletsStatus", async (_, thankAPI) => {
    const { signal } = thankAPI;
    const { data } = await axios.get("/walletsData.json", { signal })
    return data;
})

export interface BackpacksState {
    backpacksItems: [],
    bagsItems: [],
    walletsItems: []
}

const initialState: BackpacksState = {
    backpacksItems: [],
    bagsItems: [],
    walletsItems: []
}

const backpacksSlice = createSlice({
    name: "backpack",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBackpacks.pending, (state) => {
            state.backpacksItems = [];
        })
        builder.addCase(fetchBackpacks.fulfilled, (state, action) => {
            state.backpacksItems = action.payload;
        })
        builder.addCase(fetchBackpacks.rejected, (state) => {
            state.backpacksItems = [];
        })

        builder.addCase(fetchBags.pending, (state) => {
            state.bagsItems = [];
        });
        builder.addCase(fetchBags.fulfilled, (state, action) => {
            state.bagsItems = action.payload;
        });
        builder.addCase(fetchBags.rejected, (state) => {
            state.bagsItems = [];
        });

        builder.addCase(fetchWallets.pending, (state) => {
            state.walletsItems = [];
        });
        builder.addCase(fetchWallets.fulfilled, (state, action) => {
            state.walletsItems = action.payload;
        });
        builder.addCase(fetchWallets.rejected, (state) => {
            state.walletsItems = [];
        });
    }
})

export const selectBackpackData = (state: RootState) => state.backpack.backpacksItems || [];
export const selectBagsData = (state: RootState) => state.backpack.bagsItems || [];
export const selectWalletsData = (state: RootState) => state.backpack.walletsItems || [];

export default backpacksSlice.reducer;