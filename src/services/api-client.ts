import axios from 'axios'


export interface FetchResponse<T> {
    count: number;
    results: T[];
}


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9e20b47c6e654572ae661306077a23b8'
    }
})