import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrapper } from "./style"
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'


const HeaderRight = memo(() => {
  const [ifShow, setifShow] = useState(false)

  useEffect(()=>{
    function unShowPanel(){
      setifShow(false)
    }
    window.addEventListener('click',unShowPanel)
    return ()=>{
      window.removeEventListener('click',unShowPanel)
    }
  },[])

  function showPanel(e) {
    setifShow(true)
    e.stopPropagation();
  }
  return (
    <HeaderRightWrapper>
      <div className="btns">
        <div className="btn">登录</div>
        <div className="btn">注册</div>
        <div className="btn">
          <IconGlobal />
        </div>
      </div>
      <div className="profile" onClick={showPanel}>
        <IconMenu />
        <IconAvatar />
      </div>
      {ifShow && (<div className="panel">
        <div className="top">
          <div className="item">注册</div>
          <div className="item">登录</div>
        </div>
        <div className="bottom">
          <div className='item'>出租房源</div>
          <div className='item'>开展体验</div>
          <div className='item'>帮助</div>
        </div>
      </div>)}

    </HeaderRightWrapper>
  )
})

export default HeaderRight