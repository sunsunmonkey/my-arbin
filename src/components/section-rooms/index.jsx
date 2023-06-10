import React, { memo } from 'react'
import {SectionRoomsWrapper} from "./style"
import RoomItem from '../room-item'

const SectionRooms = memo((props) => {
    const { list } = props
  return (
    <SectionRoomsWrapper>
      { list?.slice(0, 8).map((item)=>{
        return <RoomItem item={item} key={item.id}/>
      }) }
    </SectionRoomsWrapper>
  )
})

export default SectionRooms