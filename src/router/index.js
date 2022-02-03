import React from 'react'
import ZMDiscover from '@/pages/discover'
// discover下的子路由
import ZMAlbum from '@/pages/discover/child-pages/album'
import ZMArtist from '@/pages/discover/child-pages/artist'
import ZMDjradio from '@/pages/discover/child-pages/djradio'
import ZMRanking from '@/pages/discover/child-pages/ranking'
import ZMRecommend from '@/pages/discover/child-pages/recommend'
import ZMSongs from '@/pages/discover/child-pages/songs'
import ZMPlayer from '@/pages/player'

import ZMMine from '@/pages/mine'
import ZMFriend from '@/pages/friend'
import { Redirect } from 'react-router-dom'

// 配置信息
const routes = [
    { path: '/',
      exact: true,
      render: () => (
          <Redirect to="/discover/recommend"/>
      ) },
    { 
      path: '/discover', 
      component: ZMDiscover,
      // 子路由
      routes: [
        {
          path: '/discover/album',
          component: ZMAlbum
        },
        {
          path: '/discover/artist',
          component: ZMArtist
        },
        {
          path: '/discover/djradio',
          component: ZMDjradio
        },
        {
          path: '/discover/ranking',
          component: ZMRanking
        },
        {
          path: '/discover/recommend',
          component: ZMRecommend
        },
        {
          path: '/discover/songs',
          component: ZMSongs
        },
        {
          path: '/discover/player',
          component: ZMPlayer
        },
      ]
    },
    { path: '/mine', component: ZMMine },
    { path: '/friend', component: ZMFriend },
]

export default routes