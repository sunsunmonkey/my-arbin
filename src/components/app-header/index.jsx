import React, { memo, useRef, useState } from 'react'
import {HeaderWrapper, SearchAreaWrapper} from "./style"
import HeaderLeft from "./c-cpns/header-left"
import HeaderRight from "./c-cpns/header-right"
import HeaderCenter from "./c-cpns/header-center"
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'
const AppHeader = memo(() => {
  const [isSearch,setIsSearch] = useState(false)

  console.log(isSearch)
  const { headerConfig } =useSelector((state)=>({
    headerConfig:state.main.headerConfig
  }),shallowEqual)

  const {isFixed , topAlpha} =  headerConfig 
  

  const {scrollY} = useScrollPosition()
  const preY = useRef(0)


  const isAlpha = topAlpha && scrollY === 0

  if (!isSearch) {
    preY.current = scrollY 
    console.log('不在搜说')
  } 
  if (Math.abs(preY.current - scrollY) > 30 && isSearch){
    setIsSearch(false)
    console.log('在搜说')
  }
 
  return (
    <ThemeProvider theme={{isAlpha}}>
       <HeaderWrapper isAlpha={isAlpha} className={classNames({fixed: isFixed})}>
        <div className="content">
          <div className="top">
              <HeaderLeft/>
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e=>setIsSearch(true)}/>
            <HeaderRight/>
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch}/>
        </div>
        {isSearch && <div className="cover" onClick={e=>setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>

  )
})

export default AppHeader