import React, { memo, useRef } from 'react'
import { RoomItemWrapper } from "./style"


import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const RoomItem = memo((props) => {
    const swiperRef =useRef();

    function controlClickHandle(isNext = true) {
        if (isNext) swiperRef.current.next()
        else swiperRef.current.prev()
      }
      
      
    const { item: itemData, listpercent = "25%" } = props
    return (
        <RoomItemWrapper listpercent={listpercent}>
            <div className="inner">
        {
          !itemData.picture_urls ? (<div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div> ):
        (<div className='slider'>
        <div className='control'>
            <div className="btn left" onClick={e => controlClickHandle(false)}>
              <IconArrowLeft width="24" height="24"/>
            </div>
            <div className="btn right" onClick={e => controlClickHandle(true)}>
              <IconArrowRight width="24" height="24"/>
            </div>
        </div>
          <Carousel dots={false} ref={swiperRef}>
            {
              itemData.picture_urls.map((item, index) => {
                return (
                  <div key={index} className="cover">
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </Carousel>
        </div>)
        }
                </div>
                <div className="desc">
                    {itemData?.verify_info?.messages.join(" · ")}
                </div>
                <div className='name'>{itemData.name}</div>
                <div className='price'>¥{itemData.price}/晚</div>
                <div className="bottom">
                    <Rating
                        value={itemData.star_rating ?? 5}
                        precision={0.1}
                        readOnly
                        sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
                    ></Rating>
                    <span className='count'>{itemData?.reviews_count}</span>
                    {
                        itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
                    }
                </div>
        </RoomItemWrapper>
    )
})

export default RoomItem
