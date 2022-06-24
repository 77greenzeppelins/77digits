import React, { useEffect } from 'react';
/*
Axios Staff
*/
import useAxios from '../../../../../../hooks/useAxios';
import axios from '../../../../../../apis/openWeatherMapApi';
/*
Helpers
*/
import { dataCollector } from '../forecastJokeHelper/dataCollector';

/*
------------------------------------------------------------------------------
*/
const ForcastJoke = () => {
  const { response, error, loading } = useAxios({
    axiosInstance: axios,
    method: 'GET',
    dataCollector: dataCollector,
  });

  useEffect(() => {
    if (response !== null) console.log('response:', response);
  }, [response]);

  /*
  JSX
  */
  return (
    <article>
      <h2 style={{ color: 'white', fontsize: 'rem' }}>
        Pozdrowienia z Dzierżoniowa
      </h2>
      {loading && <p>...I'm loading </p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && response && (
        <p>
          {response?.temp} and {response?.desc}
        </p>
      )}

      {/* {!loading && !error && response && <p>...ok</p>} */}
      {!loading && !error && !response && <p>there is no response</p>}
    </article>
  );
};

export default ForcastJoke;
