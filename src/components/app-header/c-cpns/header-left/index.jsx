import React, { memo } from 'react'
import {HeaderLeftWrapper} from "./style"
import IconLogo from "@/assets/svg/icon_logo"

const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWrapper>
        <IconLogo/>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft