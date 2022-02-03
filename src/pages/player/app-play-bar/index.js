import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils'
import { NavLink } from 'react-router-dom';
// 获取数据
import { getSongDetailAction } from '../store/actionCreator'
// 样式
import { Slider } from 'antd';
import { 
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style'




export default memo(function AppPlayerBar() {
  // state
  const [ currentTime, setCurrentTime ] = useState(0)
  const [ progress, setProgress ] = useState(0)
  const [ isChanging, setIsChanging ] = useState(false)
  const [ isPlaying, setIsPlaying ] = useState(false)
  // redux hook
  const { currentSong } = useSelector((state) => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)
  
  // other hook
  const audioRef = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongDetailAction(1842025914))
  }, [dispatch])
  // 设置audio的src路径
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
  }, [currentSong])

  // other handle
  // 歌曲图片
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
  // 歌手名称
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手" 
  // 歌曲时长
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration, "mm:ss")
  // 歌曲当前播放时间
  const showCurrentTime = formatDate(currentTime, "mm:ss")

  // handle function
  // 歌曲播放
  const playMusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  // 实时更新播放时间
  const timeUpdate = (e) => {
    // 获取到当前播放的进度
    // console.log(e.target.currentTime * 1000);
    // 同步当前歌曲进度(毫秒)
    // 更改进度条
    if(!isChanging) {
      setCurrentTime(e.target.currentTime * 1000)
      setProgress(currentTime / duration * 100)
    }
  }
  // 进度条滑动后停止回调

  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setIsChanging(false)
  }, [duration])

  // 进度条滑动回调
  const sliderChange = useCallback((value) => {
    setIsChanging(true)
    const currentTime = value / 100 * duration
    setCurrentTime(currentTime)
    setProgress(value)
  }, [duration])
  return (
    <PlaybarWrapper className="sprite_player">
      <div className='content wrap-v2' >
        {/* 播放按钮 */}
        <Control isPlaying={isPlaying}>
          <button className='sprite_player prev'></button>
          <button className='sprite_player play' onClick={e => playMusic()}></button>
          <button className='sprite_player next'></button>
        </Control>
        {/* 播放进度信息 */}
        <PlayInfo>
          <div className='image'>
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt=''/>
            </NavLink>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>{currentSong.name}</span>
              <span className='singer-name'>{singerName}</span>
            </div>
            <div className='progress'>
              <Slider 
                      defaultValue={0} 
                      value={progress}
                      onAfterChange={sliderAfterChange}
                      onChange={sliderChange}/>
              <div className='time'>
                <span className='new-time'>{showCurrentTime}</span>
                <span className='divider'>/</span>
                <span className='duration'>{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        {/* 其他操作 */}
        <Operator>
          <div className='left'>
            <button className='sprite_player btn favor'></button>
            <button className='sprite_player btn share'></button>
          </div>
          <div className='right sprite_player'>
            <button className='sprite_player btn volume'></button>
            <button className='sprite_player btn loop'></button>
            <button className='sprite_player btn playlist'></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e) }/>
    </PlaybarWrapper>
  )
})
