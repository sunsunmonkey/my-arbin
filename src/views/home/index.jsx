import React, { memo, useCallback, useEffect, useState } from 'react'
import HomeBanner from './c-cpns/home-banner'


import { useDispatch, useSelector } from 'react-redux';
import { fetchGoodPriceInfo } from '@/store/modules/home';

import { HomeWrapper } from './style';

import HomeSectionV1 from './c-cpns/home-section-v1';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionTabs from '@/components/section-tabs';

const Home = memo(() => {

  const [name, setName] = useState("成都");


  const { goodPriceInfo,  highscore, discount } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highscore: state.home.highscore,
    discount : state.home.discount
  }))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoodPriceInfo())
  }, [dispatch])

  const tabNames = discount.dest_address?.map(item => item.name);

  const tabClick = useCallback(function (index, name) {
    setName(name)
  }, [])


  return (

    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="discount">
          <SectionHeader title={discount.title} subtitle={discount.subtitle}/>
          <SectionTabs tabNames={tabNames} tabClick={tabClick}/>
          <SectionRooms list={discount.dest_list?.[name]}  listpercent="33.33333%" />
        </div>

          <HomeSectionV1  info = {goodPriceInfo}/>
          <HomeSectionV1  info = {highscore}/>
      </div>

    </HomeWrapper>
  )
})

export default Home