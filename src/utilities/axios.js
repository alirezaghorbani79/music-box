import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://large-underwear-production.up.railway.app/'
})

export default instance