import { createContext, useContext } from 'react'
import { useImmerReducer } from 'use-immer'


const PlaylistStateContext = createContext()
const PlaylistDispatchContext = createContext()

const initialState = {
    playlist: null,
    song: null,
    index: 0,
}

const playlistReducer = (state, action) => {

    const { type, payload } = action

    switch (type) {
        case 'load': {
            state.playlist = payload.playlist
            state.song = state.playlist[0]
            return
        }
        case 'play': {
            state.playlist = payload.playlist
            state.index = payload.index
            state.song = state.playlist[state.index]
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
        default:
            return state

    }
}

const PlaylistContextProvider = ({ children }) => {

    const [playlist, dispatch] = useImmerReducer(playlistReducer, initialState)
    return (
        <PlaylistStateContext.Provider value={playlist} >
            <PlaylistDispatchContext.Provider value={dispatch} >
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
    const { song } = useContext(PlaylistStateContext)
    return song
}

export default PlaylistContextProvider

export {
    usePlaylistDispatch,
    useSong,
    PlaylistStateContext
}