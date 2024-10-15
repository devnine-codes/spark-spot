const axios = require('axios');

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

async function getPopularMovies() {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
        params: {
            api_key: TMDB_API_KEY,
            language: 'ko-KR',
            region: 'KR',
        },
    });

    if (!response.data || !response.data.results) {
        throw new Error('Invalid API response');
    }

    return response.data.results;
}

module.exports = { getPopularMovies };
