import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name:'main',
    initialState:{
        headerConfig:{
            isFixed : false
        }
    },
    reducers:{
        changeHeaderConfigAction(state,{payload}){
            state.headerConfig = payload
        }
    }
})

export default mainSlice.reducer
export const { changeHeaderConfigAction} = mainSlice.actions