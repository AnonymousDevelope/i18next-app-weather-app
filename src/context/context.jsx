import { createContext, Suspense,useEffect,useState } from "react";
import axios from "axios";
import {weatherInfo,hourlyInfo} from "../data-weather";
export const WeatherContext = createContext();
// Context from Code Snippet d:/NodeJs/ReactAPPS/Vite App/i18next-app/src/Components/Main/Main.jsx:

export const WeatherContextProvider = ({ children }) => {
  const [city,setCity] = useState('Toshkent');
  const key = 'd17440e76748470b893125348231908' ;
  const [data,setData] = useState({});
  const [loading,setLoading] = useState (true);
  const [error,setError] = useState (null);
  const [ForecastHourly,setForecastHourly] = useState([]);
  const [modal,setModal] = useState(false);
  const weatherApi = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7`
      );
      setData(response.data);
      setLoading(false);
      setError(null); // Xato yo'q deb belgilash
    } catch (error) {
      setError(error); // Xato sodir bo'lganda xatoni o'rniga yuboramiz
      setLoading(false);
    }
  };
useEffect(()=>{
  weatherApi()
},[city]);
  return (
    // add Suspense
    <Suspense fallback={<div>Loading data...</div>}>
      <WeatherContext.Provider value={{data,
        error,
        setCity,
        weatherInfo,
        hourlyInfo,
        ForecastHourly,
        setForecastHourly,
        modal,
        setModal,
        }}>
        {children}
      </WeatherContext.Provider>
    </Suspense>

    // add Suspense
  );
};
