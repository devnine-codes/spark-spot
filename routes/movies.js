const express = require('express');
const axios = require('axios');
const router = express.Router();

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.TMDB_API_KEY;  // 환경 변수에서 API 키 가져오기

// API 키 로그로 확인
console.log('TMDB_API_KEY:', TMDB_API_KEY);

router.get('/popular', async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: TMDB_API_KEY,
                language: 'ko-KR',
                region: 'KR',
            },
        });

        res.render('popular', { movies: response.data.results });
    } catch (error) {
        console.error('Error fetching popular movies:', error.message);
        res.status(500).send('서버 오류가 발생했습니다. 관리자에게 문의하세요.');
    }
});

module.exports = router;
