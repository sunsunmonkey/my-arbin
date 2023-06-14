import { CHANGE_CURRENT_PAGE, CHANGE_ROOM_LIST, CHANGE_TOTAL_COUNT } from "./constants"

const initialState = {
  currentPage: 0,
  roomList: [],
  totalCount: 0
}

function reducer(state = initialState, action) {

  switch (action.type) {
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList };
    case CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    default:
      return state
  }
}


export default reducer
