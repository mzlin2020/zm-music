import * as actionTypes from './constants'

import { getTopBanners, getHotRecommends, getNewAlbum, getTopList } from '@/services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})


//真正dispatch发送网络请求获取数据的地方
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      //派发（携带上type，和最终结果）
      dispatch(changeTopBannerAction(res))
    })
  }
}

// 获取热门推荐数据
export const getHotRecommendsAction = () => {
  return dispatch => {
    getHotRecommends(8).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

// 获取新碟上架的数据
export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      // const albums = res.albums;
      dispatch(changeNewAlbumAction(res));
    })
  }
}

// 获取排行榜数据
export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res))
          break;
        case 2:
          dispatch(changeNewRankingAction(res))
          break;
        case 3:
          dispatch(changeOriginRankingAction(res))
          break;
        default:
          break;
      }
    })
  }
}