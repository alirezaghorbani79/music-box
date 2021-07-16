import { createContext, useContext } from 'react'
import { useImmerReducer } from 'use-immer'
import n from './../assets/Masoud Sadeghloo - Shab Ahangi.mp3'


const PlaylistStateContext = createContext()
const PlaylistDispatchContext = createContext()

const initialState = {
    playlist: null,
    song: n
}

const playlistReducer = (state, action) => {

    const { type, payload } = action

    switch (type) {
        case 'load': {
            state.playlist = payload.playlist
            state.song = state.playlist[0]
        }
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