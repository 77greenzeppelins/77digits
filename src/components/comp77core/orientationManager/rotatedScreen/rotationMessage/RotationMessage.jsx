import React, { useState } from 'react';
/*
...
*/
import ForcastJoke from './forecastJoke/ForcastJoke';
/*
Hook
*/
import useForecast from '../../../../../hooks/useForecast';
/*
---------------------------------------------------------------------------
*/
const RotationMessage = ({ mobileContent }) => {
  /*
  Local state
  */
  // const [weatherData, setWeatherData] = useState(null);
  // console.log('.....weatherData', weatherData);
  /*
  Hook Section
  */
  const {
    forcastJokeData,
    //  forcastJokeLoader, forcastJokeError
  } = useForecast();
  // const { temperature, rainPossibility } = forcastJokeData;
  /*
  ...
  */
  // if (!forcastJokeLoader)
  //   console.log('forcastJokeLoader is:', forcastJokeLoader);
  // if (forcastJokeError) console.log(forcastJokeError);

  if (forcastJokeData === null) return null;

  const { temperature, rainPossibility } = forcastJokeData;

  /*
  this if-statement can replace: return({weatherData && weatherData[10].title});
  */
  // if (weatherData === null) {
  //   return null;
  // }

  /*
  JSX
  */
  return (
    <div style={{ color: 'green', textAlign: 'center' }}>
      {/* {weatherData && weatherData} */}
      {/*
      "weatherData" is an array with initial value of null; this value is taken into account within the very first render of the component; within second render, if proimis is fulfill we have come array to our disposal... 
      */}
      {/* {rainPossibility} */}
      <ForcastJoke />
    </div>
  );
};

export default RotationMessage;

/*
___best version:

import axios from 'axios';

  const url =
    'https://api.openweathermap.org/data/2./weather?lat=50.7388794&lon=16.6440393&appid=68c8c68cb8a2da5701f3cc0d14c86e8a';

 useState(() => {
    const runAxios = async () => {
      let mounted = true;
      const respone = await axios.get(url);
      if (mounted) {
        setWeatherData(respone.data);
      }
      return () => {
        mounted = false;
      };
    };
    runAxios();

  }, [url]);

*/

/*
  LocalStateSection
  Latitude is: 50.7388794
  Longitude is: 16.6440393
  This is the way we cen get coordinates of user
  */
//   const [lat, setLat] = useState([]);
//   const [long, setLong] = useState([]);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(position => {
//       setLat(position.coords.latitude);
//       setLong(position.coords.longitude);
//     });
//     console.log('Latitude is:', lat);
//     console.log('Longitude is:', long);
//   }, [lat, long]);

// const url2 =
//   'https://api.openweathermap.org/data/2.5/weather?q=London&appid=68c8c68cb8a2da5701f3cc0d14c86e8a';

// const fakeURL = 'https://jsonplaceholder.typicode.com/todos/6';

// const getWeatherData = () => {
//   axios
//     .get(url2)
//     .then(response => {
//       setWeatherData(response.data);
//       console.log('response:', response);
//       console.log('response.data:', response.data);
//     })
//     .catch(err => {
//       console.log('axios.get / err', err);
//     });
// };

// useEffect(() => {
//   const data = axios
//     .get(fakeURL)
//     .then(response => {
//       console.log('response.data:', response.data);
//       setWeatherData(response.data.title);
//     })
//     .catch(err => {
//       console.log('axios.get / err', err);
//     });
// }, []);

// useEffect(() => {
//   if (weatherData) {
//     console.log('.....weatherData.main.temp:', weatherData.main.temp);
//   }
// }, [weatherData.main]);

// if (mobileContent) console.log('getWeatherData:', getWeatherData());

// if (weatherData === null) {
//   return null;
// }

/*
  .........................react Fetch API by Step By Step
  */
// const getData = async function () {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   // console.log('.....response', response);
//   /*
//   Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
//   */
//   const jsonData = await response.json();
//   // console.log('.....jsonData', jsonData);
//   setWeatherData(jsonData);
// };

// useEffect(() => {
//   getData();
// }, []);
/*
  .........................react Fetch API
  */

/*
  .........................Axios by Step By Step
  */
// useEffect(() => {
//   axios.get('https://jsonplaceholder.typicode.com/todos').then(resp => {
//     // console.log('...resp.data:', resp.data);
//     setWeatherData(resp.data);
//   });
// }, []);
/*
  .........................Axios & Async by Step By Step
  */
// useEffect(() => {
//   async function getData() {
//     const resp = await axios.get(fakeURL);
//     setWeatherData(resp.data);
//     return resp; // optionally
//   }
//   getData();
// }, [fakeURL]);
