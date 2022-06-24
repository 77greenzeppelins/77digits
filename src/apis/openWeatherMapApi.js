import axios from 'axios';
const BASE_URL =
  'https://api.openweathermap.org/data/2.5/weather?lat=50.7388794&lon=16.6440393&appid=68c8c68cb8a2da5701f3cc0d14c86e8a&units=metric';

/*
Here we create axios instance using .create() metgod with argument in form of "confObj"
Instance is actually an array with bunch of methods;
*/

export default axios.create({
  baseURL: BASE_URL,
  // timeout: 1000,
  // headers: {
  //   'Content-Type': 'application/json',
  //   Accept: 'application/json',
  // },
});
