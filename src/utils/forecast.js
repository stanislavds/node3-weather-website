const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2728ce0dd4bf122b4be2d4e64fccff0a&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body } = {}) => {
    if(error) {
      callback('Unable to connect to weather services!', undefined);
    } else if(body.error) {
      callback('Problem with coords. Try another cords.', undefined)
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}. Temperature: ${body.current.temperature}. Feel like: ${body.current.feelslike}. Humidity is ${body.current.humidity}`)
    }
  })
}

module.exports = forecast