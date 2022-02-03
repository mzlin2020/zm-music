import request from './request'

// 获取歌曲详情
export const getSongDetail = ids => {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}