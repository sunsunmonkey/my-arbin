import React, { memo } from 'react'
import { RoomItemWrapper } from "./style"

const RoomItem = memo((props) => {
    const { item: itemData } = props
    return (
        <RoomItemWrapper>
            <div className="inner">
                <div className='cover'>
                    <img src={itemData.picture_url} alt="" />
                </div>
                <div className="desc">
                    {itemData.verify_info.messages.join(" · ")}
                </div>
                <div className='name'>{itemData.name}</div>
                <div className='price'>¥{itemData.price}/晚</div>
                <div className="bottom"></div>
            </div>
        </RoomItemWrapper>
    )
})

export default RoomItem
