import Axios from 'axios';
import { API_URL } from './end-point';

const axios = Axios.create({
    baseURL: API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export { axios };
