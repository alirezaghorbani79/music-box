import axios from './axios'

const getTopArtists = async () => {
    const { data } = await axios.get('/chart/0/artists?limit=10')

    return data.data
}

const getTopTracks = async () => {
    const { data } = await axios.get('/chart/0/tracks?limit=10')

    return data.data
}

const getTopAlbums = async () => {
    const { data } = await axios.get('/chart/0/albums?limit=10')

    return data.data
}

const getArtistInfo = async (id) => {
    const { data } = await axios.get(`/artist/${id}`)
    const { name, nb_fan, picture_medium: cover } = data
    return { name, nb_fan, cover }
}

const getArtistPlaylist = async (id) => {
    const { data } = await axios.get(`/artist/${id}/top?limit=10`)
    const playlist = data.data.map((song) => {
        const { id, title, duration, preview } = song
        const { name: artist_name, id: artist_id} = song.artist
        const { cover_medium: cover, title: album_title } = song.album
        return { id, title, artist_id, artist_name, duration, preview, cover, album_title }
    })

    return playlist
}

const getArtistAlbums = async (id) => {
    const { data } = await axios.get(`/artist/${id}/albums`)

    return data.data
}

const getAlbum = async (id) => {
    const { data } = await axios.get(`/album/${id}`)

    const { id: artist_id, name: artist_name } = data.artist
    const { id: album_id, title: album_title, cover_medium: cover, release_date, nb_tracks: tracks_number } = data

    const tracks = data.tracks.data.map((track) => {
        const { id, title, duration, preview } = track
        const { id: artist_id, name: artist_name } = track.artist

        return { id, title, duration, preview, artist_id, artist_name, album_title, cover }
    })

    return { tracks, artist_id, artist_name, album_id, cover, release_date, tracks_number, album_title }
}

const getArtists = async (genre) => {
    const { data } = await axios.get(`/genre/${genre}/artists`)

    return data.data
} 

export {
    getTopArtists,
    getTopTracks,
    getTopAlbums,
    getArtistInfo,
    getArtistPlaylist,
    getArtistAlbums,
    getAlbum,
    getArtists
}