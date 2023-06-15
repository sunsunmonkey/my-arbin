import Indicator from '@/base-ui/indicator'
import React, { memo } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
    const name = ["abc","abc1","abc2","ab8","ab2c","a2bc","ab8","ab2c","a2bc"]
  return (
    <DemoWrapper>
           <div className='control'>
        <button>上一个</button>
        <button>下一个</button>        
    </div>

    <div className="list">
    <Indicator>
        {
            name.map(item=>{
                return <button>{item}</button>
            })
        }
    </Indicator>
    </div>
   
    </DemoWrapper>
 
 
  

  )
})

export default Demo