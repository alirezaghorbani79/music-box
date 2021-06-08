import { useQuery } from 'react-query'

import * as api from '../utilities/api'

const useTopArtists = () => {
    return useQuery('top_artists', api.getTopArtists)
}

const useTopTracks = () => {
    return useQuery('top_tracks', api.getTopTracks)
}

const useTopAlbums = () => {
    return useQuery('top_albums', api.getTopAlbums)
}

const useArtistInfo = (id) => {
    return useQuery(['artist_info', id], () => api.getArtistInfo(id))
}

const useArtistPlaylist = (id) => {
    return useQuery(['artist_playlist', id], () => api.getArtistPlaylist(id))
}

const useArtistAlbums = (id) => {
    return useQuery(['artist_album', id], () => api.getArtistAlbums(id))
}

const useAlbum = (id) => {
    return useQuery(['album', id], () => api.getAlbum(id))
}

const useArtists = (genre) => {
    return useQuery(['artists', genre], () => api.getArtists(genre))
}

export {
    useTopArtists,
    useTopTracks,
    useTopAlbums,
    useArtistInfo,
    useArtistPlaylist,
    useArtistAlbums,
    useAlbum,
    useArtists
}