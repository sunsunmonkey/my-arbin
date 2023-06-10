import { getHomeDiscount, getHomeGoodPriceData, getHomeHighscore } from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchGoodPriceInfo = createAsyncThunk("fetchdata", async (payload,{dispatch}) => {
  getHomeGoodPriceData().then((res)=>dispatch(changeGoodPriceInfoAction(res)));

  getHomeHighscore().then((res)=>dispatch(changeHomeHighscore(res)));

  getHomeDiscount().then((res)=>dispatch(changeHomeDiscount(res)));
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highscore:{},
    discount:{}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHomeHighscore(state, { payload }){
      state.highscore = payload
    },
    changeHomeDiscount(state, { payload }){
      state.discount = payload
    }
  }
});

export const { 
  changeGoodPriceInfoAction 
  , changeHomeHighscore 
  , changeHomeDiscount
} = homeSlice.actions;


export default homeSlice.reducer;