import React, { memo, useCallback, useState } from 'react'
import { HomeSectionV2Wrapper } from "./style"

import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionTabs from '@/components/section-tabs';

const HomeSectionV2 = memo((props) => {
    const { info: discount } = props;
    
    const initialName = Object.keys(discount.dest_list)[0];
    const [name, setName] = useState(initialName);

    const tabNames = discount.dest_address?.map(item => item.name);

    const tabClick = useCallback(function (index, name) {
        setName(name)
    }, [])

    return (
        <HomeSectionV2Wrapper>
            <SectionHeader title={discount.title} subtitle={discount.subtitle} />
            <SectionTabs tabNames={tabNames} tabClick={tabClick} />
            <SectionRooms list={discount.dest_list?.[name]} listpercent="33.33333%" />
        </HomeSectionV2Wrapper>
    )
})

export default HomeSectionV2