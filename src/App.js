import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col lg={12}>
            <h1 className="mt-5">{this.props.title}</h1>
            <Button>Look, I'm a button!</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

App.propTypes = {
    title: PropTypes.string.isRequired
}