import React, { memo, useState } from 'react'
import {DetailPictureWrapper} from "./style"
import { shallowEqual, useSelector } from 'react-redux'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPicture = memo((props) => {
    const {detailInfo} = useSelector((state)=>({
        detailInfo: state.detail.detailInfo
    }),shallowEqual)

    const [showBrowser,setShowBrowser] = useState(false)

    const {picture_urls} = detailInfo
  return (
    <DetailPictureWrapper>
      <div className="top">
        <div className="left">
            <div className="item">
            <img src={picture_urls?.[0]} alt="" />
            <div className='cover'></div>
            </div>
        </div>
        <div className="right">
            {
                picture_urls?.slice(1, 5).map((item, index) => {
                    return (
                    <div className='item' key={item} >
                        <img src={item} alt=""/>
                        <div className='cover'></div>
                    </div>
                    )
                })
            }
        </div>
        
      </div>
      <div className="show-btn" onClick={e=>setShowBrowser(true)}>显示图片</div>
      {showBrowser && 
      <PictureBrowser 
      picture_urls={picture_urls}
      closeClick={()=>setShowBrowser(false)}
      ></PictureBrowser>}
    </DetailPictureWrapper>
  )
})

export default DetailPicture