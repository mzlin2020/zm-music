import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreator'

// antd
import { Carousel } from 'antd';
// 导入样式
import { 
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
 } from './style'

export default memo(function TopBanner() {


  // 1、state
  const [currentIndex, setCurrentIndex] = useState(0)
  // 2、reduex
  // 组件和redux关联：获取数据和进行操作
  const dispatch = useDispatch()
  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  // 获取轮播图数据
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])

  }), shallowEqual)

  // 3、其他hook
  // 获取轮播图的ref对象
  const topBannersRef = useRef()


  // 4、其他业务逻辑
  // 获取当前轮播图index
  const getCurrentIndex = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to)
    }, 0);
  }, [])

  // 根据currentIndex获取毛玻璃图片
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + '?imageView&blur=40x20')

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
        <Carousel effect="fade" autoplay ref={topBannersRef} beforeChange={getCurrentIndex}>
          {
            topBanners.map((item, index) => {
              return (
                <div key={item.imageUrl} className='banner-item'>
                  <img src={item.imageUrl} alt={item.typeTitle}  className='image'/>
                </div>
              )
            })
          }
        </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left' onClick={e => topBannersRef.current.prev()}></button>
          <button className='btn right' onClick={e => topBannersRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
