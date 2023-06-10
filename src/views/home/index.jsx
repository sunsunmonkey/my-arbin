import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'


import { useDispatch, useSelector } from 'react-redux';
import { fetchGoodPriceInfo } from '@/store/modules/home';

import { HomeWrapper } from './style';

import HomeSectionV1 from './c-cpns/home-section-v1';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';

const Home = memo(() => {
  const { goodPriceInfo,  highscore, discount } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highscore: state.home.highscore,
    discount : state.home.discount
  }))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoodPriceInfo())
  }, [dispatch])

  return (

    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="discount">
          <SectionHeader title={discount.title} subtitle={discount.subtitle}/>
          <SectionRooms list={discount.dest_list?.["成都"]}  listpercent="33.33333%" />
        </div>

          <HomeSectionV1  info = {goodPriceInfo}/>
          <HomeSectionV1  info = {highscore}/>
      </div>

    </HomeWrapper>
  )
})

export default Home