import React, { memo } from 'react'
import {SectionRoomsWrapper} from "./style"
import RoomItem from '../room-item'

const SectionRooms = memo((props) => {
    const { list, listpercent } = props
  return (
    <SectionRoomsWrapper listpercent = {listpercent}>
      { list?.slice(0, 8).map((item)=>{
        return <RoomItem item={item} key={item.id} listpercent = {listpercent}/>
      }) }
    </SectionRoomsWrapper>
  )
})

export default SectionRooms