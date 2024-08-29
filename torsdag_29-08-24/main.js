const weatherApi =
  "https://api.met.no/weatherapi/locationforecast/2.0/?lat=59.93&lon=10.72&altitude=90";

const response = await fetch(weatherApi); //send melding til web server.
const data = await response.json(); //konvert fra JSON til Javascript Objekt.

console.log(data);
const currentTemperature =
  data.properties.timeseries[0].data.instant.details.air_temperature;
console.log(currentTemperature);

//Finn weather Element.
const temperatureDisplay = document.getElementById("temperature");

//Oppdater elementet med dataen.
temperatureDisplay.textContent = currentTemperature;

//hent info fra "inspect" på nettsiden.
const currentWindSpeed =
  data.properties.timeseries[0].data.instant.details.wind_speed;

//Finn elementet i HTML
const windSpeedDisplay = document.getElementById("windspeed");

//Oppdater elementet i HTML
windSpeedDisplay.textContent = currentWindSpeed;
