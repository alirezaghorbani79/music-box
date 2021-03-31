import axios from './axios'

const getTopArtists = async () => {
    const { data } = await axios.get('/chart/0/tracks?limit=10')

    const artists = data.data.map((el) => {
        const { id, name, picture_medium: picture } = el.artist

        return {id, name, picture}
    })

    return artists
}

export {
    getTopArtists
}