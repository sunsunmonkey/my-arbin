import React, { memo } from 'react'
import {DetailWrapper} from "./style"
import DetailInfos from './c-cpns/detail-infos'
import DetailPicture from './c-cpns/detail-pictures'

const Detail = memo((props) => {
  return (
    <DetailWrapper>
      <DetailPicture></DetailPicture>
      <DetailInfos></DetailInfos>
    </DetailWrapper>
  )
})

export default Detail