import React, { memo } from 'react'
import EntireFilter from './c-cpns/entire-filter'
import { EntireWrapper } from './style'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>


  )
})

export default Entire