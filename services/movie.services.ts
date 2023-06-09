import axios from "axios";

const API_KEY = '40735d3ecb6e62e97dfeb1f80411ad86';
const API_BASE_URL = 'https://api.themoviedb.org/3';

const client = axios.create({
    baseURL: API_BASE_URL,
    params: { api_key: API_KEY }
});


export default async function searchMovies(query: string) {
    try {
        const res = await client.get("/search/movie", {
            params: { query }
        });

        if (res.data && res.data.results) {
            return res.data.results;
        } else {
            console.error('Couldnt get the data');
        }
    } catch (error) {
        console.error(error);
        return [];
    }

}
