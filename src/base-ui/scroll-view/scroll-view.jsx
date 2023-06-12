import React, { memo, useRef, useState } from 'react'
import {ScrollViewWrapper} from "./style"
import { useEffect } from 'react'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)
    const [posIndex, setPosIndex] = useState(0)
    const totalDistanceRef = useRef()

    const scrollContentRef = useRef()
    useEffect(()=>{
        const srollContentScroll = scrollContentRef.current.scrollWidth;
        const srcollContentClient= scrollContentRef.current.clientWidth;
        const totalDistance = srollContentScroll - srcollContentClient;
        totalDistanceRef.current = totalDistance;
        setShowRight(srollContentScroll > srcollContentClient);   
    },[])

    function controlClickHandle(isRight){
        const newIndex = isRight ? posIndex + 1: posIndex - 1;
        const scollContent =  scrollContentRef.current.children[0]
        const  newEl =scollContent.children[newIndex];
        const newOffsetLeft = newEl.offsetLeft;
        scollContent.style.transform=`translate(-${newOffsetLeft}px)`;
        
        setPosIndex(newIndex);
        setShowRight(totalDistanceRef.current > newOffsetLeft);
        setShowLeft(newOffsetLeft > 0)


    }

  return (
    <ScrollViewWrapper>
  { showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft/>
        </div>
      ) }
      { showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight/>
        </div>
    )}   
      <div className="slot" ref={scrollContentRef}>
        {props.children}
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView