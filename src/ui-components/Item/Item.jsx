import React from 'react'
import './Item.css'
import {convertDate} from '../../utils' 
import { useTranslation } from 'react-i18next'
const DailyItem = ({icon,temp,feels_temp,date,className,...props}) => {
  const [t] = useTranslation();
  return (  
    <div {...props} className={"col-xl-3 shadow col-lg-3 col-md-6 col-12 daily-item "+className}>
      <div className="row mx-auto align-items-center text-center">
        <div className="col-6 text-center">
            <img width={100} src={icon} alt="" />
        </div>
        <div className="col-6 fs-4">
            {temp}&deg;C
            <div className="col-md-12 fs-6">{
            t("main.feels_temp", { temp: feels_temp })}&deg;C
            </div>
        </div>
      </div>
      <div className="row text-center">
            <div className="date fs-4 mx-auto">
                {convertDate(date)}
            </div>
      </div>
    </div>
  )
}

export default DailyItem