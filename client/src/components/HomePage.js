import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function HomePage() {
  return (
    <Container>
      <Jumbotron>
        <h1>Home</h1>
        <p className="lead">
          This is a ReactJS application that pulls data from the National
          Weather Service API and renders it into a human-readable format to
          display daily and hourly forecasts.
        </p>
      </Jumbotron>
    </Container>
  );
}

export default HomePage;
