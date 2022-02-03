import request from './request'

// 获取轮播图数据
export const getTopBanners = () => {
  return request({
    url: "/banner"
  })
}

// 获取热门推荐的数据
export const getHotRecommends = limit => {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

// 新碟上架
export const getNewAlbum = (limit) => {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}

// 排行榜数据
export const getTopList = (idx) => {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}