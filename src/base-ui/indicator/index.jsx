import React, { memo, useEffect, useRef } from 'react'
import {IndicatorWrapper} from "./style"

const Indicator = memo((props) => {
  const {selectIndex} = props;
  const scrollRef = useRef();
 
  useEffect(()=>{
    const selectItemEl = scrollRef.current.children[selectIndex];
    const selectElOffsetLeft =  selectItemEl.offsetLeft;
    const selectElWidth=  selectItemEl.clientWidth;
    const contentWidth = scrollRef.current.clientWidth;
    const totalWidth = scrollRef.current.scrollWidth;

    const totalDistance = totalWidth - contentWidth;
    let distance = selectElOffsetLeft - contentWidth*0.5 + selectElWidth*0.5;
    if( distance < 0) distance = 0;
    if( distance > totalDistance ) distance =  totalDistance;
    
    scrollRef.current.style.transform = `translate(${-distance}px)`;

  },[selectIndex])
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={scrollRef}>
        {
            props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

export default Indicator