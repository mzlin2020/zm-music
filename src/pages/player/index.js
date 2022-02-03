import React, { memo } from 'react'
import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'
export default memo(function ZmPlayer() {
  return (
    <PlayerWrapper>
      <div className='content wrap-v2'>
        <h3>hello palyer</h3>
        <PlayerLeft/>
        <PlayerRight/>
      </div>
    </PlayerWrapper>
  )
})
