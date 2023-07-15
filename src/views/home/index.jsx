import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'


import { useDispatch, useSelector } from 'react-redux';
import { fetchGoodPriceInfo } from '@/store/modules/home';

import { HomeWrapper } from './style';

import HomeSectionV1 from './c-cpns/home-section-v1';
import HomeSectionV2 from './c-cpns/home-section-v2';
import { isEmptyObj } from '@/utils/isEmptyObj';
import HomeLongfor from './c-cpns/home-longfor';
import HomeSectionV3 from './c-cpns/home-section-v3';
import { changeHeaderConfigAction } from '@/store/modules/main';

const Home = memo(() => {
  const { goodPriceInfo, highscore, discount, recommenddest,Longfor,plusData} = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highscore: state.home.highscore,
    discount: state.home.discount,
    recommenddest: state.home.recommenddest,
    Longfor:state.home.Longfor,
    plusData:state.home.plusData
  }))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoodPriceInfo())
    dispatch(changeHeaderConfigAction({ isFixed : true }))
  }, [dispatch])

  return (

    <HomeWrapper>
      <HomeBanner />
      <div className="content">

        {isEmptyObj(discount) && <HomeSectionV2 info={discount} />}
        {isEmptyObj(recommenddest) && <HomeSectionV2 info={recommenddest} />}
        {isEmptyObj(goodPriceInfo) && <HomeSectionV1 info={goodPriceInfo} />}
        {isEmptyObj(highscore) && <HomeSectionV1 info={highscore} />}
        
        {isEmptyObj(Longfor) && <HomeLongfor info={Longfor}/>}
        {isEmptyObj(plusData) && <HomeSectionV3 info={plusData}/>}
      </div>
    </HomeWrapper>
  )
})

export default Home