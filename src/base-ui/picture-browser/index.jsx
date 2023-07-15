import React, { memo, useEffect, useState } from 'react'
import { CSSTransition,SwitchTransition } from 'react-transition-group'


import { PictureBrowserWrapper } from "./style"
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const PictureBrowser = memo((props) => {
  const { picture_urls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext,setIsNext] = useState(true)

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

  return (
    <PictureBrowserWrapper isNext={isNext}>
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
      <div className="preview"></div>
    </PictureBrowserWrapper>
  )
})

export default PictureBrowser