import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  CardText,
  CardFooter,
  Badge,
  Label,
  Input,
  Col,
  Row,
  Container,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      total: 0,
      movie: {},
    };
  }

  componentDidMount() {
    const { id: movieId } = this.props.match.params;
    const { movies } = this.props;
    const selectedMovie = movies.find(movie => `${movie.id}` === `${movieId}`);

    this.setState({ movie: selectedMovie }, () => {
      this.calculateTicketPrice();
    });
  }

  calculateTicketPrice = () => {
    const {
      count,
      movie: { price },
    } = this.state;
    this.setState({ total: price * count });
  };

  handleChangeTicketCount = event => {
    const { value: count } = event.target;
    this.setState({ count }, () => {
      this.calculateTicketPrice();
    });
  };

  render() {
    /** id params from route :id */
    const { count, total, movie } = this.state;
    const {
      title,
      subtitle,
      detail,
      image,
      release_date: releaseDate,
      price,
    } = movie;

    return (
      <Container style={{ padding: '10px 20px' }}>
        <Row>
          <h2>Movie Detail</h2>
        </Row>
        <Row>
          <Col md="4">
            <CardImg top width="100%" src={image} alt="Movie Image" />
          </Col>
          <Col md="8">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h2>{title}</h2>
                </CardTitle>
                <CardSubtitle>
                  <h4>{subtitle}</h4>
                </CardSubtitle>
              </CardHeader>
              <CardBody>
                <CardText style={{ marginBottom: 5 }}>
                  <b>เรื่องย่อ:</b>
                </CardText>
                <CardText>{detail}</CardText>
                <CardText>
                  <b>วันเข้าฉาย:</b> <Badge color="info">{releaseDate}</Badge>
                </CardText>
                <CardText>
                  <b>ราคาตั๋ว:</b> {price || 0} ฿
                </CardText>
                <CardText>
                  <Label>
                    <b>จำนวน: </b>
                  </Label>
                  <Input
                    type="select"
                    name="select"
                    value={count}
                    onChange={this.handleChangeTicketCount}
                  >
                    <option value="1">1 ใบ</option>
                    <option value="2">2 ใบ</option>
                    <option value="3">3 ใบ</option>
                    <option value="4">4 ใบ</option>
                    <option value="5">5 ใบ</option>
                    <option value="6">6 ใบ</option>
                    <option value="7">7 ใบ</option>
                    <option value="8">8 ใบ</option>
                    <option value="9">9 ใบ</option>
                    <option value="10">10 ใบ</option>
                  </Input>
                </CardText>
                <CardText>
                  <b> รวมเป็นเงิน:</b> {total || 0} ฿
                </CardText>
              </CardBody>
              <CardFooter>
                <Button color="primary">
                  <Link
                    to="/purchase/confirm"
                    style={{ textDecoration: 'none', color: '#FFFFFF' }}
                  >
                    Buy Now
                  </Link>
                </Button>{' '}
                <Button color="default">
                  <Link
                    to=""
                    style={{ textDecoration: 'none', color: '#000000' }}
                  >
                    Back
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MovieDetail;
