import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { WeatherContext } from "../context/context";

export const convertDate = (date) => {
    const { modal } = useContext(WeatherContext);
    const [t] = useTranslation();
    const daysOfWeek = t('date.daysOfTheWeek');
    const monthsOfYear = t('date.monthsOfTheYear');
    const nowDate = new Date(date);
    const day = daysOfWeek[nowDate.getDay()];
    const month = monthsOfYear[nowDate.getMonth()];
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    // Use a regular ternary operator to conditionally include hours and minutes
    const timePart = modal ? `${hours<10?'0':''}${hours}:${minutes<10?'0':''}${ minutes}` : '';

    return `${day} ${nowDate.getDate()} ${month} ${timePart}`;
};
