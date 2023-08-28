import React, { useContext, useEffect } from 'react'
import './Daily.css'
import uiComponents from "../../ui-components"
import { weatherInfo,hourlyInfo } from '../../data-weather'
import { WeatherContext } from '../../context/context'
const Daily = () => {
    const { Item } = uiComponents;
    const { data,setForecastHourly,modal,setModal } = useContext(WeatherContext)
    const { daily } = weatherInfo(data)
    const handleClickDaily = (item) => {
        setModal(!modal)
        setForecastHourly(item)
        window.scrollTo(0,0)
    }
    useEffect(()=>{
        document.body.style.overflow = modal ? 'hidden' : 'auto'
    },[modal])
    return (
        <>
            <div className="mx-auto gap-3 d-flex flex-xl-row flex-lg-row flex-column daily-container">
                {
                    daily.map((item,index) => (
                        <Item onClick={()=>handleClickDaily(item?.hour)} key={item?.date} date={item.date} icon={item?.day?.condition?.icon}   temp={item?.day?.avgtemp_c} feels_temp={item?.day?.mintemp_c} />    
                    ))
                }
            </div>
        </>
    )
}

export default Daily