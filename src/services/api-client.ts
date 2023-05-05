import axios from "axios"

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f8c8e737892d4037924645810dc88930'
    }
})