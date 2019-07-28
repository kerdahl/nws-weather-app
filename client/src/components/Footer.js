import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 fixed-bottom">
      <Container>
        <span>
          Powered by the{' '}
          <a href="https://www.weather.gov/documentation/services-web-api">
            National Weather Service API
          </a>
          .
        </span>
      </Container>
    </footer>
  );
}

export default Footer;
