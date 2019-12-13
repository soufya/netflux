import React from 'react';
import { getMovieTitle, getMovieOverview } from '../utils/helper';

const trimExtension = filename => filename.split('.').slice(0, -1)[0];;

const Movie = props => {
    return (
      <li className="movie">
        <a href={`/details${trimExtension(props.movie.posterPath)}`}>
          <img src={`https://image.tmdb.org/t/p/w500${props.movie.posterPath}`} alt={getMovieTitle(props.movie)} height="400" />
          <span className="movie-description">
            {getMovieTitle(props.movie)}
						<span className="play-icon"><i className="fas fa-play"></i></span>
          </span>
        </a>
      </li>
    );
}

export default Movie;