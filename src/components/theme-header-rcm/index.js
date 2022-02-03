import React, { memo } from 'react'

// 父传子类型限制
import PropTypes from 'prop-types';

// 样式
import { HeaderWrapper } from './style'
  
const ThemeHeaderRCM = memo(function(props) {
  const { title, keywords } = props
  return (
    <HeaderWrapper className='sprite_02'>
      {/* 左边 */}
      <div className='left'>
        <h3 className='title'>{title}</h3>
        <div className='keyword'>
          {
            keywords.map((item, index) => {
              return (
                <div className='item' key={item}>
                  <a href='todo'>{item}</a>
                  <span className='divider'>|</span>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* 右边 */}
      <div className='right'>
        <a href='todo'>更多</a>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
})

ThemeHeaderRCM.propTypes = {
  // 必传标题
  title: PropTypes.string.isRequired,
  // 数组
  keywords: PropTypes.array
}

ThemeHeaderRCM.defaultProps = {
  // 默认值
  keywords: []
}

export default ThemeHeaderRCM