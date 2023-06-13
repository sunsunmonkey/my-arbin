import React, { memo } from 'react'
import { HomeSectionV1Wrapper } from "./style"

import SectionRooms from '@/components/section-rooms';
import SectionHeader from '@/components/section-header';
import SectionFooter from '@/components/section-footer';

const HomeSectionV1 = memo((props) => {
    const { info } = props
    return (
        <HomeSectionV1Wrapper>
            <SectionHeader title={info.title}  subtitle={info.subtitle}></SectionHeader>
            <SectionRooms list={info.list} ></SectionRooms>
            <SectionFooter/>
        </HomeSectionV1Wrapper>
    )
})

export default HomeSectionV1