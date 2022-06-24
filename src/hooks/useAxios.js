import { useState, useEffect } from 'react';

const useAxios = configObject => {
  /*
  configObjec Section
  */
  const {
    axiosInstance,
    method,
    url,
    requestConfig = {},
    dataCollector,
  } = configObject;
  /*
  Lokal State Section
  */
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  /*
  useEffect Section
  */
  useEffect(() => {
    const controller = new AbortController();

    const getData = async () => {
      try {
        /*
        axiosInstance[method.toLowerCase()] = axiosInstance.get(url, {...})
        this url actually comes from instance but cen be props from <ForecastJoke> as well;
        */
        const resp = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal, //attaches the controller to the request
        });
        // console.log(resp);
        // setResponse({ temp: resp.data.temp });
        setResponse(dataCollector(resp.data));
      } catch (err) {
        // console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();

    //cleanup function
    return () => controller.abort;

    /*
    Line below allows to "mute" eslint message about empty dependencyArray
    */
    //eslint-disable-next-line
  }, []);

  /*
  Final Return Section
  */
  return { response, error, loading };
};

export default useAxios;
