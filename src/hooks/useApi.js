import { useQuery } from 'react-query'

import * as api from '../utilities/api'

const useTopArtists = () => {
    return useQuery('top_artists', api.getTopArtists)
}

export {
    useTopArtists
}