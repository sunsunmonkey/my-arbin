import React, { memo, useState } from 'react'
import {HeaderWrapper, SearchAreaWrapper} from "./style"
import HeaderLeft from "./c-cpns/header-left"
import HeaderRight from "./c-cpns/header-right"
import HeaderCenter from "./c-cpns/header-center"
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
const AppHeader = memo(() => {
  const [isSearch,setIsSearch] = useState(false)


  const { headerConfig } =useSelector((state)=>({
    headerConfig:state.main.headerConfig
  }),shallowEqual)
  const {isFixed} =  headerConfig 
 
  return (
    <HeaderWrapper className={classNames({fixed: isFixed})}>
      <div className="content">
        <div className="top">
            <HeaderLeft/>
          <HeaderCenter isSearch={isSearch} searchBarClick={e=>setIsSearch(true)}/>
          <HeaderRight/>
        </div>
        <SearchAreaWrapper isSearch={isSearch}/>
      </div>
      {isSearch && <div className="cover" onClick={e=>setIsSearch(false)}></div>}
    </HeaderWrapper>
  )
})

export default AppHeader