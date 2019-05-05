import React, { Component } from 'react';
import {
  Col,
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Movie extends Component {
  render() {
    const {
      id: movieId,
      title,
      subtitle,
      release_date: releaseDate,
      image,
    } = this.props;
    return (
      <Col xs="6" md="4" style={{ paddingBottom: 40 }}>
        <Card style={{ textAlign: 'center' }}>
          <CardHeader>
            เข้าฉาย​: <b>{releaseDate}</b>
          </CardHeader>
          <CardBody style={{ paddingBottom: 5 }}>
            <CardImg
              src={image}
              style={{ height: 300, width: 'auto', paddingBottom: 10 }}
            />
            <CardTitle style={{ paddingBottom: 0, marginBottom: 0 }}>
              <b>{title}</b>
            </CardTitle>
            <CardText>{subtitle}</CardText>
          </CardBody>
          <CardFooter>
            <Button color="primary">
              <Link
                to={`/detail/${movieId}`}
                style={{ textDecoration: 'none', color: '#FFFFFF' }}
              >
                View Detail
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </Col>
    );
  }
}

export default Movie;
