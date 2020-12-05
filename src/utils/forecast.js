const request = require("request")

const forecast = (latitude, longitude, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=76c175c2d469ea284245546df4c2a343&query=" + longitude + "," + latitude

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined)
    } else if (body.error) {
      callback("Unable to find location", undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. The humidity is " + body.current.humidity + "%.")
    }
  })
}

module.exports = forecast
