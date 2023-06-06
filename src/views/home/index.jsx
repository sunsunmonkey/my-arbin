import React, { memo, useEffect } from 'react'
import axios from '@/services'
const Home = memo(() => {
  
  useEffect(() => {
    axios.get({ url: "/home/highscore" }).then(res => {
      console.log(res)
    })
  }, [])

  return (
    <div>Home</div>
  )
})

export default Home