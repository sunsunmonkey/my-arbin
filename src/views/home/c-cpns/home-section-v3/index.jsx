import React, { memo } from 'react'
import {HomeSectionV3Wrapper} from "./style"
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeSectionV3 = memo((props) => {
    const { info:infoData } = props
  return (
    <HomeSectionV3Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
            <div className='room-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem item={item} listpercent="20%" key={item.id}/>
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name="plus"/>
    </HomeSectionV3Wrapper>
  )
})

export default HomeSectionV3