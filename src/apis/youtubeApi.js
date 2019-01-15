import axios from 'axios';
const KEY = 'AIzaSyA_LGtuSvsAxvafKfLjiyZF48A8OxC_oVE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

