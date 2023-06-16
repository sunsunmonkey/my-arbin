import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
    const [selectIndex,setSelectIndex] = useState(0);

    const name = ["111","222","333","444","555","666","777","888","999"]

    function handleSelectIndex(isNext,photoLength){
      let newIndex = isNext? selectIndex + 1 : selectIndex-1;
      if(newIndex < 0) newIndex = photoLength.length -1
      if(newIndex > photoLength.length -1) newIndex = 0

      setSelectIndex(newIndex) 
    }


  return (
    <DemoWrapper>
      <div className='control'>
        <button onClick={e=>handleSelectIndex(false,name)}>上一个</button>
        <button onClick={e=>handleSelectIndex(true,name)}>下一个</button>        
     </div>

    <div className="list">
    <Indicator selectIndex={selectIndex}>
        {
            name.map((item,index)=>{
                return <button key={index}>{item}</button>
            })
        }
    </Indicator>
    </div>
   
    </DemoWrapper>
 
 
  

  )
})

export default Demo