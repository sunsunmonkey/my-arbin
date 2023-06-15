import React, { memo } from 'react'
import { EntirePaginationWrapper } from "./style"
import { Pagination } from '@mui/material'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeCurrentPageAction, fetchRoomList } from '@/store/modules/entire/createActions'


const EntirePagination = memo((props) => {
  const dispatch = useDispatch()

  const { currentPage, roomList, totalCount } = useSelector((state) => ({
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
  }), shallowEqual)


  const totalPage = Math.ceil(totalCount / 20);
  const start = currentPage * 20 + 1;
  const end = (currentPage + 1) * 20 + 1;

  function pageChangeHandle(e, pageCount) {
    window.scrollTo(0, 0);
    dispatch(changeCurrentPageAction(pageCount - 1));
    dispatch(fetchRoomList())
  }

  return (

    <EntirePaginationWrapper>

      {
        !!roomList.length && <div className='page-info'>
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className='info'>
            第 {start} - {end} 个房源, 共超过 {totalCount} 个
          </div>
        </div>
      }
    </EntirePaginationWrapper>
  )
})

export default EntirePagination