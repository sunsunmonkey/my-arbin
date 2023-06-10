import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'


import { useDispatch, useSelector } from 'react-redux';
import { fetchGoodPriceInfo } from '@/store/modules/home';
import SectionHeader from '@/components/section-header';
import { HomeWrapper } from './style';
import SectionRooms from '@/components/section-rooms';

const Home = memo(() => {
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoodPriceInfo())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRooms list={goodPriceInfo.list}></SectionRooms>
        </div>
      </div>

    </HomeWrapper>
  )
})

export default Home