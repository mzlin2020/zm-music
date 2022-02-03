import { Map } from 'immutable'

// 导入类型
import * as actionTypes from './constants'

// 初始值
// 改写成immutable对象
const defaultState = Map({
  // 轮播图
  topBanners: [],
  // 热门推荐
  hotRecommends: [],
  // 新碟上架
  newAlbums: [],

  // 排行榜
  upRanking: {},
  newRanking: {},
  originRanking: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      //这里就会返回一个新的immutable对象，尽可能复用了原有的对象
      return state.set("topBanners", action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUM:
        return state.set("newAlbums", action.newAlbums);

    case actionTypes.CHANGE_UP_RANKING:
        return state.set("upRanking", action.upRanking);
    case actionTypes.CHANGE_NEW_RANKING:
        return state.set("newRanking", action.newRanking);
    case actionTypes.CHANGE_ORIGIN_RANKING:
        return state.set("originRanking", action.originRanking);
    default:
      return state
  }
}
export default reducer