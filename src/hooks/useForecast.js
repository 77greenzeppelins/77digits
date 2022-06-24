import { useState, useEffect } from 'react';
import axios from 'axios';
/*
Basic Data
*/
const BASE_URL =
  'https://api.openweathermap.org/data/2.5/weather?lat=50.7388794&lon=16.6440393&appid=68c8c68cb8a2da5701f3cc0d14c86e8a';

/*
----------------------------------------------------------------------------
*/
const useForecast = () => {
  //   console.log('.....hello from hook');
  const [forcastJokeData, setForcastJokeData] = useState(null);
  const [forcastJokeLoader, setForcastJokeLoader] = useState(false);
  const [forcastJokeError, setForcastJokeError] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then(resp => setWeatherData(resp.data))
      .catch(err => setForcastJokeError(err))
      .finally(() => setForcastJokeLoader(false));
  }, []);

  /*
  function that process API data / promise's response 
  */
  const setWeatherData = data => {
    setForcastJokeData({
      temperature: data.main.temp,
      rainPossibility: data.weather[0].description,
    });
  };
  /*
  ...
  */
  // const getWeatherData = async () => {
  //   const { data } = await axios.get(BASE_URL);
  //   console.log('.....data from getWeatherData:', data);

  //   if (!data || data.length === 0) {
  //     console.log('.....something went wrong');
  //     return;
  //   }
  //   // if (data) setWeatherData(data);
  //   if (data) setForcastJokeData(data);

  //   // console.log('.....forcastJokeData from getWeatherData:', forcastJokeData);

  //   // return data;
  // };

  // return { forcastJokeData, getWeatherData };
  return { forcastJokeData, forcastJokeLoader, forcastJokeError };
};

export default useForecast;
