import React, { useContext, useEffect } from "react";
import { WeatherContext } from "../../context/context";
import "./Main.css";
import { convertDate } from "../../utils";
import { useTranslation } from "react-i18next";
import {weatherInfo} from "../../data-weather";
const Main = ({ className }) => {
  const { data } = useContext(WeatherContext);
  const {temp,icon,city,wind_speed,wind_dir,humidity,sunrise,sunset,condition,feels_temp} = weatherInfo(data);
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className={`weather-main ${className}`}>
        <div className="row p-2">
          <div className="row p-2 text-center justify-content-center fs-3 align-items-center">
            {t("main.city_title", { city })}                   
            </div>
          <div className="row">
            <div className="col-md gap-3 d-flex flex-column justify-content-center">
              <div className="location d-flex flex-row">
                <div className="icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                &nbsp;
                <div className="text">
                  <p>{city}</p>
                </div>
              </div>
              <div className="date d-flex flex-row">
                <div className="icon">
                  <i className="bi bi-calendar"></i>
                </div>
                &nbsp;
                <div className="text">{convertDate(new Date())}</div>
              </div>
              <div className="temphrature d-flex flex-row">
                <div className="icon">
                  <i className="bi bi-thermometer-sun"></i>
                </div>
                &nbsp;
                <div className="text">
                  {temp}&deg;C
                  <div className="col-md-12 feels-temp">{t("main.feels_temp", { temp: feels_temp })}&deg;C</div>
                </div>
              </div>
            </div>
            <div className="col-md text-center mx-auto d-flex flex-column justify-content-center">
              <div className="image">
                <img src={icon} alt="" />
              </div>
              <div className="condition">{condition}</div>
            </div>
            <div className="col-md text-start list-weather">
              <div className="row">
                <ul className="navbar nav flex-column align-items-start gap-3">
                  <li className="nav-item line-height-2">
                    <i className="bi bi-sunrise"></i>
                    &nbsp;
                    <span className="text-center ">{t('main.city_sunrise', { sunrise })}</span>
                  </li>
                  <li className="nav-item">
                    <i className="bi bi-sunset"></i>
                    &nbsp;
                    <span className="text-center ">{t('main.city_sunset', { sunset })}</span>
                  </li>
                  <li className="nav-item">
                    <i className="bi bi-droplet"></i>
                    &nbsp;
                    <span className="text-center ">{t('main.city_humidity', { humidity })}%</span>
                  </li>
                  <li className="nav-item">
                    <i className="bi bi-wind"></i>
                    &nbsp;
                    <span className="">{t('main.city_wind', { wind: wind_speed })} km/h</span>
                  </li>
                  <li className="nav-item">
                    <i className="bi bi-compass"></i>
                    &nbsp;
                    <span className="">{t('main.city_compass', { compass: wind_dir })}</span>
                  </li>
                  <li className="nav-item">
                    <i className="bi bi-arrow-up"></i>
                    &nbsp;
                    <span className="">1203 mb</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
