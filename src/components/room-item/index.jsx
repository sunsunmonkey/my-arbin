import React, { memo, useRef ,useState} from 'react'
import classNames from 'classnames';

import { RoomItemWrapper } from "./style"
import Indicator from '@/base-ui/indicator'


import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const RoomItem = memo((props) => {
    const [selectIndex, setSelectIndex] = useState(0)
    const swiperRef =useRef();

    function controlClickHandle(isNext = true) {
        if (isNext) swiperRef.current.next()
        else swiperRef.current.prev()

        let newIndex = isNext ? selectIndex + 1: selectIndex - 1
        if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
        if (newIndex > itemData.picture_urls.length - 1) newIndex = 0
        setSelectIndex(newIndex)
      }
      
      
    const { item: itemData , listpercent = "25%", itemClick } = props

    function handleClick(){
      if(itemClick) itemClick()
    }
    return (
        <RoomItemWrapper listpercent={listpercent} onClick={handleClick}>
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
        <div className='indicator'>
            <Indicator selectIndex={selectIndex}>
              {
                itemData.picture_urls.map((item, index) => {
                  return (
                    <div className='item' key={item}>
                      <span className={classNames("dot", {active: selectIndex === index})}></span>
                    </div>
                  )
                })
              }
            </Indicator>
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
