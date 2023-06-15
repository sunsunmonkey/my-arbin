import React, { memo } from 'react'
import { EntireRoomsWrapper } from "./style"
import RoomItem from '@/components/room-item'
import { shallowEqual, useSelector } from 'react-redux'

const EntireRooms = memo((props) => {
    const { roomList, isLoading} = useSelector((state)=>({
        roomList: state.entire.roomList,
        isLoading:state.entire.isLoading
      }),shallowEqual)
     
    return (
        <EntireRoomsWrapper>
            {isLoading  &&  <div className="cover"></div>}
          
            {roomList?.map((item)=>{
                return (
                        <RoomItem item={item} listpercent ="20%" key={item.id}/>
                )
            })}
        </EntireRoomsWrapper>
    )
})

export default EntireRooms