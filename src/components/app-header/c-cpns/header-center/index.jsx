import React, { memo } from 'react'
import {HeaderCenterWrapper} from "./style"
import IconSearch from "@/assets/svg/icon-search-bar"
const HeaderCenter = memo(() => {
  return (
    <HeaderCenterWrapper>
        <div className="searchBar">
           <input type="text" placeholder='搜索房源和体验'/>
            <div className="searchIcon">
                <IconSearch/>
            </div>
        </div>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter