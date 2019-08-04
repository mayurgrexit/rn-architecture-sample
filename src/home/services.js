import axios from "axios";

// TODO export functions
const API_KEY = "9b64bcfe576047ba8e5bb7fd24c9e526"
const BASE_URL = "https://newsapi.org/v2"
const TOP_HEADLINES_PATH = "/top-headlines?"
const API_SUFFIX = `country=in&apiKey=${API_KEY}`

const getTopHeadlinesApi = () => {
    const url = BASE_URL + TOP_HEADLINES_PATH + API_SUFFIX
    return axios.get(url)
        .then(res => {
            return res.data
        })
        .catch(error => {
            throw error
        })
}

export { getTopHeadlinesApi }