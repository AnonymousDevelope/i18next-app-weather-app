// This component will use the WeatherContext

export const weatherInfo = (data) => ({
  temp: data?.current?.temp_c,
  icon: data?.current?.condition?.icon,
  city: data?.location?.region || data?.location?.name,
  wind_speed: data?.current?.wind_kph,
  wind_dir: data?.current?.wind_dir,
  humidity: data?.current?.humidity,
  sunrise: data?.forecast?.forecastday[0]?.astro?.sunrise,
  sunset: data?.forecast?.forecastday[0]?.astro?.sunset,
  condition: data?.current?.condition?.text,
  feels_temp: data?.current?.feelslike_c,
  daily: data?.forecast?.forecastday,
});

export const hourlyInfo = (data) => ({
  temp : data?.temp_c,
  icon : data?.condition?.icon,
  time : data?.time,  
})
