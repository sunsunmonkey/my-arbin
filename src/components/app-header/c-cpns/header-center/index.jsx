import React, { memo, useState } from 'react'
import {HeaderCenterWrapper} from "./style"
import { CSSTransition } from 'react-transition-group'
import SearchTitles from '@/assets/data/search_titles'

import SearchTabs from './c-cpns/search-tabs'
import IconSearch from "@/assets/svg/icon-search-bar"
import SearchSections from './c-cpns/search-sections'
const HeaderCenter = memo((props) => {
    const { isSearch , searchBarClick} =props
    const [tabIndex,setTabIndex] = useState(0)

  function searchBarClickHandle(e){
    e.preventDefault() 
    searchBarClick?.()
  }

  return (
    <HeaderCenterWrapper>
      <CSSTransition
      in={isSearch}
      classNames="bar"
      timeout={250}
      unmountOnExit={true}
      >
      <div className="search-detail">
        <SearchTabs titles={['搜索房源','搜索体验']} tabClick={setTabIndex}></SearchTabs>
        <div className="infos">
          <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos}></SearchSections>
        </div>
      </div>
      </CSSTransition>
      
      <CSSTransition
      in={!isSearch}
      classNames='detail'
      timeout={250}
      unmountOnExit={true}
      >
       <div className='search-bar' onClick={e => searchBarClickHandle(e)}>
          <div className='text'>搜索房源和体验</div>
          <span className='icon'>
            <IconSearch/>
          </span>
        </div>
      </CSSTransition>
          
      

   
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter