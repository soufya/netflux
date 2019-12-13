import React from 'react';

import Hero from '../components/Hero';
import MovieGrid from "../components/MovieGrid";

import { suggestedMovies, mostViwed, recentRelease} from '../utils/helper';

class HomePage extends React.Component {
  render() {

    return (
      <>
        <Hero />
        <MovieGrid
          gridType="is-suggested"
          title="إقتراحتنا لك"
          limit={4}
          movies={suggestedMovies(this.props.movies)}
        />
        <MovieGrid
          gridType="is-popular"
          title="الأكثر مشاهدة"
          limit={4}
          movies={mostViwed(this.props.movies)}
        />
        <MovieGrid
          gridType="latest-shows"
          title="أحدث المسلسلات"
          limit={8}
          movies={recentRelease(this.props.movies, 'Show')}
        />
        <MovieGrid
          gridType="latest-movies"
          title="أحدث الأفلام"
          limit={8}
          movies={recentRelease(this.props.movies, 'Film')}
        />
      </>
    );
  }
}

export default HomePage;