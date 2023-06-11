import React, { memo, useCallback, useState } from 'react'
import {SectionTabsWrapper} from "./style"
import classNames from 'classnames'

const SectionTabs = memo((props) => {

const [currentIndex, setCurrentIndex] = useState(0)
const {tabNames, tabClick} = props

    
 const itemClickHandle = useCallback((index, item) =>{
    setCurrentIndex(index)
    tabClick(index, item)
  },[])  


  return (
    <SectionTabsWrapper >
      {
        tabNames?.map((item,index)=>{
            return (
                <div 
                key={index}
                className={classNames("item", { active: index === currentIndex })}
                onClick={e=>{itemClickHandle(index,item)}}
                >{item}</div>
            )
        })
      }
    </SectionTabsWrapper>
  )
})

export default SectionTabs