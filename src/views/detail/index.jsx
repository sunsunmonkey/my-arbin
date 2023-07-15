import React, { memo, useEffect } from 'react'
import { DetailWrapper } from "./style"
import DetailInfos from './c-cpns/detail-infos'
import DetailPicture from './c-cpns/detail-pictures'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo((props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeHeaderConfigAction({  isFixed: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPicture></DetailPicture>
      <DetailInfos></DetailInfos>
    </DetailWrapper>
  )
})

export default Detail