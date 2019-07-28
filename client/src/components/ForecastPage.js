import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
//import getForecast from '../utils/getForecast';

function ForecastPage() {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async position => {
          try {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            const api_url = `/weather/forecast/${lat}/${long}`;
            const response = await fetch(api_url);
            const json = await response.json();

            let dataArray = json.periods;
            let finalArray = dataArray.map(forecast => {
              let datetime = new Date(forecast.startTime);
              let date = `${datetime.getMonth() + 1}/${datetime.getDate()}`;
              forecast.date = date;
              return forecast;
            });

            setForecasts(finalArray);
          } catch (error) {
            console.error(error);
          }
        });
      }
    };

    getData();
  }, []);

  return (
    <Container className="pb-5">
      <CardColumns>
        {forecasts.map(forecast => (
          <Card bg="light">
            <Card.Img
              variant="top"
              alt={forecast.shortForecast}
              src={forecast.icon}
            />
            <Card.Body>
              <Card.Title>
                {forecast.date} {forecast.name}
              </Card.Title>
              <Card.Subtitle>{forecast.detailedForecast}</Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>
                    {forecast.temperature}
                    {forecast.temperatureUnit}
                  </li>
                  <li>
                    {forecast.windSpeed} {forecast.windDirection}
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </Container>
  );
}

export default ForecastPage;
