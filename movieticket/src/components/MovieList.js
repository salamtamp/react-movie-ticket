import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import Movie from './Movie';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    const movieComponents = movies.map(movie => (
      <Movie key={movie.id} {...movie} />
    ));
    return (
      <div>
        <Container style={{ padding: '10px 20px' }}>
          <Row style={{ paddingBottom: 10, textAlign: 'center' }}>
            <h2>Movie Lists</h2>
          </Row>
          <Row>{movieComponents}</Row>
        </Container>
      </div>
    );
  }
}

export default MovieList;
