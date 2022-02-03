import React, { memo } from 'react'
import { dicoverMenu } from '@/common/common-data'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
import { DiscoverWrapper, TopMenu} from './style'

export default memo(function ZMDiscover(props) {
  const { route } = props

  return (
    <DiscoverWrapper>
      {/* 导航 */}
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {
            dicoverMenu.map(item => {
              return (
                <div key={item.title} className='item'>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {/* 内容 */}
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
