import React, { memo, useCallback } from 'react'
import { EntireRoomsWrapper } from "./style"
import RoomItem from '@/components/room-item'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
    const { roomList, isLoading } = useSelector((state)=>({
        roomList: state.entire.roomList,
        isLoading:state.entire.isLoading
      }),shallowEqual)

    const navigate = useNavigate();
    const dispatech = useDispatch();

    const itemClickHandle = useCallback((item)=>{
        navigate("/detail");
        dispatech(changeDetailInfoAction(item))
    },[navigate,dispatech]) 
    
    
    return (
        <EntireRoomsWrapper>
            {isLoading  &&  <div className="cover"></div>}
          
            {roomList?.map((item)=>{
                return (
                        <RoomItem 
                        item={item} 
                        listpercent ="20%" 
                        key={item.id}
                        itemClick={e=>itemClickHandle(item)}
                        />
                )
            })}
        </EntireRoomsWrapper>
    )
})

export default EntireRooms