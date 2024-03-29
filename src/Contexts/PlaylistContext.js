import { createContext, useContext } from 'react'
import { useImmerReducer } from 'use-immer'
import { shuffle } from '../utilities/utilities'

const PlaylistStateContext = createContext()
const PlaylistDispatchContext = createContext()

const initialState = {
  playlist: null,
  shuffledList: null,
  originalList: null,
  song: null,
  index: 0,
  isRepeat: false,
  isShuffle: false,
  countOfPlayed: 0,
}

const playlistReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'play': {
      state.originalList = payload.playlist
      state.shuffledList = shuffle(payload.playlist)
      state.playlist = state.isShuffle ? state.shuffledList : state.originalList
      state.index = payload.index
      state.song = state.originalList[state.index]
      return
    }
    case 'next': {
      state.index = (state.index + 1) % state.playlist.length
      state.song = state.playlist[state.index]
      return
    }
    case 'previous': {
      if (state.index === 0) state.index = state.playlist.length
      state.index = (state.index - 1) % state.playlist.length
      state.song = state.playlist[state.index]
      return
    }
    case 'end': {
      if (!state.isRepeat)
        state.index = (state.index + 1) % state.playlist.length

      state.song = state.playlist[state.index]
      state.countOfPlayed++
      return
    }
    case 'repeat': {
      state.isRepeat = !state.isRepeat
      return
    }
    case 'shuffle': {
      state.isShuffle = !state.isShuffle

      if (state.isShuffle) state.playlist = state.shuffledList
      else state.playlist = state.originalList

      return
    }

    default:
      return state
  }
}

const PlaylistContextProvider = ({ children }) => {
  const [playlist, dispatch] = useImmerReducer(playlistReducer, initialState)
  return (
    <PlaylistStateContext.Provider value={playlist}>
      <PlaylistDispatchContext.Provider value={dispatch}>
        {children}
      </PlaylistDispatchContext.Provider>
    </PlaylistStateContext.Provider>
  )
}

const usePlaylistDispatch = () => {
  const dispatch = useContext(PlaylistDispatchContext)
  return dispatch
}

const useSong = () => {
  const { song, countOfPlayed } = useContext(PlaylistStateContext)
  return { song, countOfPlayed }
}

export default PlaylistContextProvider

export { usePlaylistDispatch, useSong, PlaylistStateContext }
