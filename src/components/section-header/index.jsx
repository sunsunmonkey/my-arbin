import React, { memo } from 'react'
import {SectionHeaderWrapper} from "./style"

const SectionHeader = memo((props) => {
  const { title, subtitle } = props
  return (
    <SectionHeaderWrapper>
      <h2 className='section-title'>{title}</h2>
      {subtitle&&<div className="section-subtitle">{subtitle}</div>}
    </SectionHeaderWrapper>
  )
})

export default SectionHeader