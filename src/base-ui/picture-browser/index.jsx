import React, { memo, useEffect, useState } from 'react'
import { CSSTransition,SwitchTransition } from 'react-transition-group'


import { PictureBrowserWrapper } from "./style"
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'
import Indicator from '../indicator'
import classNames from 'classnames'

const PictureBrowser = memo((props) => {
  const { picture_urls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext,setIsNext] = useState(true)
  const [isShowList,setIsShowList] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  })


  function controlClickHandle(isNext){
    let newIndex = isNext?currentIndex+1 :currentIndex-1
    if(newIndex === picture_urls.length) newIndex = 0
    if(newIndex === -1) newIndex = picture_urls.length-1

    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  function bottomItemClickHandle(index){
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <PictureBrowserWrapper isNext={isNext} isShowList={isShowList}>
      <div className="top">
        <div className="close-btn" onClick={closeClick}>
          <IconClose></IconClose>
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left"  onClick={()=>controlClickHandle(false)}>
            <IconArrowLeft width='77' height='77'></IconArrowLeft>
          </div>
          <div className="btn right" onClick={()=>controlClickHandle(true)}>
            <IconArrowRight width='77' height='77'></IconArrowRight>
          </div>
        </div>
        <div className="picture">
            <SwitchTransition 
            mode='in-out' >
              <CSSTransition 
              classNames='pic'
              timeout={100}
              key={picture_urls[currentIndex]}
              >
                
              <img src={picture_urls[currentIndex]} alt="" />
              </CSSTransition> 
            </SwitchTransition>

          </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex+1}/{picture_urls.length}</span>
              <span>room apartment图片{currentIndex+1}</span>
            </div>
            <div className="toggle" onClick={()=>{setIsShowList(!isShowList)}}>
              <span>{isShowList? "隐藏" : "显示" }照片列表</span>
              {isShowList?  <IconTriangleBottom/> : <IconTriangleTop/>}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {
                picture_urls?.map((item ,index) =>{
                  return (
                    <div 
                      className={classNames("item", {active: index === currentIndex})} 
                      key={item}
                      onClick={()=>bottomItemClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

export default PictureBrowser