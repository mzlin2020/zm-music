import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommendsAction } from '../../store/actionCreator'

// 样式
import { HotRecommendWrapper } from './style'

// 头部导航
import ThemeHeaderRCM from '@/components/theme-header-rcm'
// songs-cover组件
import SongsCover from '@/components/songs-cover'


export default memo(function HotRecommend() {

  // 1.hook
  //获取数据
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)


  // 2.otherHook
  //发送网络请求，请求、保存数据
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendsAction())
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}/>
      <div className='recommend-list'>
        {
          hotRecommends.map((item, index) => {
            return (<SongsCover key={item.id}  info={item} />)
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
