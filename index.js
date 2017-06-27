const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'c3e64811a7e6031b3245b3a2de8cbebf';
let city = argv.d || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;
    console.log(message);
  }
});