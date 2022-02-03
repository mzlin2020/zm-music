import React, { memo } from 'react'

// 导入样式
import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'

// 导入轮播图组件
import TopBanner from "./childComps/top-banner/index";
// 热门推荐组件
import HotRecommend from "./childComps/hot-recommend/index"
// 新碟上架
import NewAlbum from "./childComps/new-album"
// 排行榜
import RecomendRanking from "./childComps/recommend-ranking"


function ZMRecommend() {

  return (
    <RecommendWrapper>
      <TopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecomendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}



export default memo(ZMRecommend)