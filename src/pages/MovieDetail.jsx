import { useLocation } from 'react-router-dom';
import { IMG_BASE_URL } from '../components/Movie';
// import { getItemId } from "../asset";
import { dummy } from '../movieDummy';
const { results } = dummy;

export default function MovieDetail() {
  // const { itemId } = useParams();
  const { state } = useLocation();
  //클릭한 것만
  // const item = getItemId(itemId);

  const movie = results.find(item => item.id === state.id);
  return (
    <div className="page-container detail-container">
      <div className="movie-info">
        <div>
          <img src={IMG_BASE_URL + state.poster_path} style={{ width: '280px', height: '400px' }} alt="영화 포스터 이미지" />
        </div>
        <div key={movie.id} style={{ fontSize: '18px', color: 'white' }} className="infoBox">
          <div className="original_title">{movie.original_title}</div>
          <div className="vote_average">Thumbs-up 👍 : {movie.vote_average}</div>
          <div className="vote_average"> 개봉일 : {movie.release}</div>
          <div className="vote_average"> 장르 : {movie.genre}</div>
          <div className="vote_average"> 국가 : {movie.language}</div>
          <div className="vote_average"> 등급 : {movie.limit}</div>
          <div className="vote_average"> 러닝타임 : {movie.running}</div>
        </div>
      </div>
      <div className="overviewBox">
        <div className="overview">{movie.overview}</div>
        <div className="overview">{movie.overviewKo}</div>
      </div>
    </div>
  );
}
