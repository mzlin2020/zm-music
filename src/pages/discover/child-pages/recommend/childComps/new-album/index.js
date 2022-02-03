import React, { memo, useEffect, useRef} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getNewAlbumAction } from '../../store/actionCreator'
// 头部导航
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import AlbumCover from '@/components/album-cover'
// css样式
import { AlbumWrapper } from './style'
import { Carousel } from 'antd';


export default memo(function NewAlbum() {

  // redux hook
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual);
  const dispatch = useDispatch()

  // other hook
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);

  // 获取轮播图dom对象
  const pageRef = useRef()

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title="新碟上架" />
      
      <div className='content'>
        {/* 向左箭头 */}
      <button className="arrow arrow-left sprite_02" 
      onClick={e => pageRef.current.prev()}></button>
      <div className='album'>
        <Carousel ref={pageRef} dots={false} >
          {
            [0, 1].map(item => {
              return (
                <div key={item} className='page'>
                  {
                    newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                      return <AlbumCover info={iten} 
                                         key={iten.id} 
                                         size={100} 
                                         width={118} 
                                         bgp="-570px"/>
                    })
                  }
                </div>
              )
            })
          }
        </Carousel>
      </div>
        {/* 向右箭头 */}
      <button className="arrow arrow-right sprite_02" 
      onClick={e => pageRef.current.next()}></button>
      </div>
      
    </AlbumWrapper>
  )
})
