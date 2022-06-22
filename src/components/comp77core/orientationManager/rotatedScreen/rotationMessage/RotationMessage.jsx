import React, { useState, useEffect } from 'react';

const RotationMessage = () => {
  /*
  LocalStateSection
  Latitude is: 50.7388794
  Longitude is: 16.6440393
  */
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  /*
  .........................
  */
  const url =
    'https://api.openweathermap.org/data/2.5/weather?lat=50.7388794&lon=16.6440393&appid=68c8c68cb8a2da5701f3cc0d14c86e8a';

  /*
  .........................
  */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    console.log('Latitude is:', lat);
    console.log('Longitude is:', long);
  }, [lat, long]);

  /*
  JSX
  */
  return <div>RotationMessage</div>;
};

export default RotationMessage;
