import React from "react";
import { useNavigate } from "react-router-dom";
export const IMG_BASE_URL = "https://images.tmdb.org/t/p/w1280/";

export default function Movie({ item }) {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/movie/${item.id}`, {
      state: item,
    });
  };
  return (
    <div className="movie-container" onClick={onClickMovieItem}>
      <img src={IMG_BASE_URL + item.poster_path} alt="영화 포스터" />
      <div className="movie-info">
        <h4>{item.title}</h4>
        <span>{item.vote_average}</span>
      </div>
    </div>
  );
}
