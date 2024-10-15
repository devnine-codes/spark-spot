require('dotenv').config();  // 최상단에 위치해야 함

const express = require('express');
const path = require('path');
const moviesRouter = require('./routes/movies');  // 영화 라우터 연결

const app = express();
const PORT = process.env.PORT || 3000;

// EJS 템플릿 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 제공 경로 설정
app.use(express.static(path.join(__dirname, 'public')));

// 라우터 연결
app.use('/movies', moviesRouter);

// 루트 경로 처리
app.get('/', (req, res) => {
  res.send(`
    <h1>🎬 SparkSpot</h1>
    <p><a href="/movies/popular">인기 영화 보기</a></p>
  `);
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
