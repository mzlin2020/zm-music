import { getSongDetail } from "@/services/player"
import * as actionTypes from './constants'

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})




//获取歌曲详情
export const getSongDetailAction = ids => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeCurrentSongAction(res.songs[0]))
    })
  }
}