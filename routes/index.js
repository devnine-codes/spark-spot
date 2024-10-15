const express = require('express');
const router = express.Router();

// 루트 경로 처리
router.get('/', (req, res) => {
  res.send(`
    <h1>🎬 SparkSpot에 오신 것을 환영합니다!</h1>
    <p><a href="/movies/popular">인기 영화 보기</a></p>
  `);
});

module.exports = router;
