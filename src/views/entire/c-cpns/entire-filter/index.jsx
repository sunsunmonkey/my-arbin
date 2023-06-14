import React, { memo, useState } from 'react'
import {EntireFilterWrapper} from "./style"
import filter_data from'@/assets/data/filter_data.json'
import   classNames from "classnames"
const EntireFilter = memo((props) => {
    const [select ,setSelect] = useState([]);


    function handleSelect(item){
        const newSelect = [...select]; 

        if( newSelect.includes(item)){
            const rmindex =   newSelect.findIndex(element=>element===item);
            newSelect.splice(rmindex,1);
        }else{
            newSelect.push(item);
        }

        setSelect(newSelect);
    }


  return (
    <EntireFilterWrapper>
      {
        filter_data.map((item,index)=>{
            return(
                <div 
                key={index}
                className={classNames('item',{"active": select.includes(item) })} 
                onClick={e=>handleSelect(item)}>
                    {item}
                </div>
            )
        })
      }
    </EntireFilterWrapper>
  )
})

export default EntireFilter