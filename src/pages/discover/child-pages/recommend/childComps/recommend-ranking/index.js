import React, { memo, useEffect } from 'react'

// 样式
import { RankingWrapper } from './style'
import { getTopListAction } from '../../store/actionCreator'

// 头部导航
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HYTopRanking from '@/components/top-ranking';


export default memo(function RecomendRanking() {

  // redux hook
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])
  // other hook
  const {upRanking, newRanking, originRanking} = useSelector((state) => ({
    upRanking: state.getIn(["recommend", "upRanking"]) ,
    newRanking: state.getIn(["recommend", "newRanking"]), 
    originRanking: state.getIn(["recommend", "originRanking"]) 
  }), shallowEqual)

  return (
    <RankingWrapper>
      <ThemeHeaderRCM  title="榜单"/>
      <div className='tops'>
      <HYTopRanking info={upRanking}/>
      <HYTopRanking info={newRanking}/>
      <HYTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
