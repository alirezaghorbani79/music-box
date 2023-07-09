import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://music-box-xsih.onrender.com/'
})

export default instance
