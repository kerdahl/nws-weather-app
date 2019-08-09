require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');

const port = process.env.PORT;

app.listen(port, () => console.log(`Listening at port ${port}...`));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json({ limit: '1mb' }));

app.get('/weather/forecast/:lat/:long', async (request, response) => {
  console.log(request.params);
  const lat = request.params.lat;
  const long = request.params.long;

  const point_url = `https://api.weather.gov/points/${lat},${long}`;
  const point_response = await fetch(point_url);
  const point_json = await point_response.json();

  const forecast_url = point_json.properties.forecast;
  const forecast_response = await fetch(forecast_url);
  const forecast_json = await forecast_response.json();

  const data = forecast_json.properties;

  response.json(data);
});

app.get('/weather/hourly/:lat/:long', async (request, response) => {
  console.log(request.params);
  const lat = request.params.lat;
  const long = request.params.long;

  const point_url = `https://api.weather.gov/points/${lat},${long}`;
  const point_response = await fetch(point_url);
  const point_json = await point_response.json();

  const forecast_url = point_json.properties.forecastHourly;
  const forecast_response = await fetch(forecast_url);
  const forecast_json = await forecast_response.json();

  const data = forecast_json.properties;

  response.json(data);
});

exports = module.exports = app;
