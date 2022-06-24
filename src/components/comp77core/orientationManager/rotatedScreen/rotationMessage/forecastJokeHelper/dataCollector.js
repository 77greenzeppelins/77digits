const dataCollector = data => ({
  temp: data?.main.temp,
  desc: data?.weather[0].description,
});

export { dataCollector };
