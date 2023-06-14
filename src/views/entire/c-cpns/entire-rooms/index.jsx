import React, { memo } from 'react'
import { EntireRoomsWrapper } from "./style"
import RoomItem from '@/components/room-item'

const EntireRooms = memo((props) => {
    const { info } = props
    return (
        <EntireRoomsWrapper>
            {info.map((item)=>{
                return (
                        <RoomItem item={item} listpercent ="20%" />
                )
            })}
        </EntireRoomsWrapper>
    )
})

export default EntireRooms