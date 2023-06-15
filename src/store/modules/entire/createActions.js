import { getEntireRoomList } from "@/services/modules/entire";
import { CHANGE_CURRENT_PAGE, CHANGE_LOADING, CHANGE_ROOM_LIST, CHANGE_TOTAL_COUNT } from "./constants";

export const changeCurrentPageAction = (currentPage) => ({
    type: CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomList = (roomList) => ({
    type: CHANGE_ROOM_LIST,
    roomList
})

export const changeTotalCount = (totalCount) => ({
    type: CHANGE_TOTAL_COUNT,
    totalCount
})

export const changeLoading = (isLoading)=>({
    type:CHANGE_LOADING,
    isLoading
})

export const fetchRoomList = () => {
    return async (dispatch, getState) => {
        const currentPage = getState().entire.currentPage;
        dispatch(changeLoading(true));
        const res = await getEntireRoomList(currentPage * 20);
        dispatch(changeLoading(false));
        const roomList = res.list;
        const totalCount = res.totalCount;

        dispatch(changeRoomList(roomList));
        dispatch(changeTotalCount(totalCount));
    }
}