import React, { memo, useEffect } from 'react'
import EntireFilter from './c-cpns/entire-filter'
import { EntireWrapper } from './style'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoomList } from '@/store/modules/entire/createActions'

const Entire = memo(() => {
  const dispatch = useDispatch();
  const {currentPage, roomList, totalCount} = useSelector((state)=>({
    currentPage:state.entire.currentPage,
    roomList: state.entire.roomList,
    totalCount:state.entire.totalCount
  }))

  useEffect(() => {
    dispatch(fetchRoomList())
  }, [dispatch])


  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms info={roomList}/>
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire