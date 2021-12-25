import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL   //  .env.local 
})

api.interceptors.request
                .use(config => {
    config.url = config.url + 
                '&units=metric' + 
                    '&exclude=hourly,minutely' +
                            '&appid=' +
                        process.env.REACT_APP_API_KEY
    return config
})

export default api