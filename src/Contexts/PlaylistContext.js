import { createContext } from 'react'



const PlaylistStateContext = createContext()
const PlaylistDispatchContext = createContext()

const PlaylistContextProvider = ({ children }) => {


    return (
        <PlaylistStateContext.Provider>
            <PlaylistDispatchContext.Provider>
                {children}
            </PlaylistDispatchContext.Provider>
        </PlaylistStateContext.Provider>
    )
}


export {
    PlaylistContextProvider
}