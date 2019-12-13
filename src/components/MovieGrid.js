import React from "react";
import Movie from "./Movie";

const MovieGrid = (props) => {
  const movies = (props.limit) ? props.movies.slice(0, props.limit) : props.movies;
  let moviesList = movies.map((movie, i) => (<Movie key={i} movie={movie} />));
  return (
    <section className={`section movies slider has-arrows ${props.gridType}`}>
      <div className="container">
        <h3 className="section-title">
          {props.title}
        </h3>
        <ul className="moviesGrid">
          {(moviesList.length) ? moviesList : <p>أسفين، لم نستطع إيجاد ما تبحث عنه من فضلك قُم بتغيير كلمة البحث</p>}
        </ul>
      </div>
    </section>
  );
}

export default MovieGrid;