import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import routes from './router'
import store from './store'

import ZMAppHeader from '@/components/app-header'
import ZMAppFooter from '@/components/app-footer'
// 播放器
import AppPlayerBar from './pages/player/app-play-bar'
import { HashRouter } from 'react-router-dom'

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        {/* 头部导航 */}
        <ZMAppHeader/>
        {/* 路由展示 */}
        {renderRoutes(routes)}
        {/* 尾部组件 */}
        <ZMAppFooter/>
        {/* 播放器 */}
        <AppPlayerBar/>
      </HashRouter>
    </Provider>
  )
}
