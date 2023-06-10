import { getHomeGoodPriceData } from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchGoodPriceInfo = createAsyncThunk("fetchdata", async (payload) => {
  const result = getHomeGoodPriceData();
  return result;
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchGoodPriceInfo.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload
    }
  }
});

export const { changeGoodPriceInfoAction } = homeSlice.actions;
export default homeSlice.reducer;