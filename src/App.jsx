import React, { memo,useEffect} from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import  AppHeader  from '@/components/app-header';
import AppFooter  from "@/components/app-footer"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDataAction } from './store/modules/home';

const App = memo(() => {

  const dispatch = useDispatch();

  const { goodPriceInfo }  = useSelector((state)=>({
    goodPriceInfo: state.home.goodPriceInfo
  }),shallowEqual);

  useEffect(() => {
    dispatch(fetchHomeDataAction("XXXX"))
  }, [dispatch])

  return (
    <div className="app">
      <AppHeader />
      <div className="page">
        {useRoutes(routes)}
      </div>
      <AppFooter />
    </div>

  )
})

export default App