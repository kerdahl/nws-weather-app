import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
//import getForecast from '../utils/getForecast';

function HourlyPage() {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async position => {
          try {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            const api_url = `/weather/hourly/${lat}/${long}`;
            const response = await fetch(api_url);
            const json = await response.json();

            let dataArray = json.periods;
            let finalArray = dataArray.map(forecast => {
              let datetime = new Date(forecast.startTime);
              let day = '';

              let hour = datetime.getHours();
              if (hour === 0) {
                hour = '12 AM';
              } else if (hour < 12) {
                hour = `${hour} AM`;
              } else if (hour === 12) {
                hour = '12 PM';
              } else if (hour > 12) {
                hour = `${hour - 12} PM`;
              }

              switch (datetime.getDay()) {
                case 0:
                  day = 'Sunday';
                  break;
                case 1:
                  day = 'Monday';
                  break;
                case 2:
                  day = 'Monday';
                  break;
                case 3:
                  day = 'Monday';
                  break;
                case 4:
                  day = 'Monday';
                  break;
                case 5:
                  day = 'Monday';
                  break;
                case 6:
                  day = 'Monday';
                  break;
                default:
                  day = 'Wut';
              }

              forecast.hour = hour;
              forecast.day = day;
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
              <Card.Title>{forecast.hour}</Card.Title>
              <Card.Subtitle>{forecast.day}</Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>{forecast.shortForecast}</li>
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

export default HourlyPage;
