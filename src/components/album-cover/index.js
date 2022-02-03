import React, { memo } from 'react'
import { getSizeImage } from '@/utils/format-utils';
// 样式
import { AlbumWrapper } from './style'

export default memo(function AlbumCover(props) {
  // 由外部传递数据进来
  const { info, size= 130, width = 153, bgp = "-845px" } = props
  return (
    // 由外部决定图片等大小
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className='album-image'>
        <img src={getSizeImage(info.picUrl, size)} alt=''/>
        <a href='/' className='cover image_cover'>{info.name}</a>
      </div>
      <div className='album-info'>
        <div className='name text-nowrap'>{info.name}</div>
        <div className='artist text-nowrap'>{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
