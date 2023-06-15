import React, { memo, useEffect } from 'react'
import EntireFilter from './c-cpns/entire-filter'
import { EntireWrapper } from './style'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch} from 'react-redux'
import { fetchRoomList } from '@/store/modules/entire/createActions'

const Entire = memo(() => {

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchRoomList())
  }, [dispatch])


  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms/>
     <EntirePagination/>
  
    </EntireWrapper>
  )
})

export default Entire