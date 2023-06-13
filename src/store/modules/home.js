import { getHomeDiscount, getHomeGoodPriceData, getHomeHighscore, getHomeLongfor, getHomeRecommenddest } from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchGoodPriceInfo = createAsyncThunk("fetchdata", async (payload, { dispatch }) => {
  getHomeGoodPriceData().then((res) => dispatch(changeGoodPriceInfoAction(res)));

  getHomeHighscore().then((res) => dispatch(changeHomeHighscore(res)));

  getHomeDiscount().then((res) => dispatch(changeHomeDiscount(res)));

  getHomeRecommenddest().then((res) => dispatch(chageHomerecommenddest(res)));

  getHomeLongfor().then((res) => dispatch(chageHomeLongfor(res)));
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highscore: {},
    discount: {},
    recommenddest: {},
    Longfor: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHomeHighscore(state, { payload }) {
      state.highscore = payload
    },
    changeHomeDiscount(state, { payload }) {
      state.discount = payload
    },
    chageHomerecommenddest(state, { payload }) {
      state.recommenddest = payload
    },
    chageHomeLongfor(state, { payload }) {
      state.Longfor = payload
    }
  }
});

export const {
  changeGoodPriceInfoAction
  , changeHomeHighscore
  , changeHomeDiscount
  , chageHomerecommenddest
  , chageHomeLongfor
} = homeSlice.actions;


export default homeSlice.reducer;