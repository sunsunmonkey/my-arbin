import { useEffect, useState } from "react";
import { throttle } from "underscore";



export default function useScrollPosition(){
    const [ scrollX , setScrollX] = useState(0)
    const [ scrollY , setScrollY] = useState(0)
    
    useEffect(()=>{
       const handlerScroll=throttle(()=>{
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        },100)

        window.addEventListener("scroll",handlerScroll)

        return ()=>{
            window.removeEventListener("scroll",handlerScroll)
        }


    },[])

    return { scrollX ,  scrollY}
}

