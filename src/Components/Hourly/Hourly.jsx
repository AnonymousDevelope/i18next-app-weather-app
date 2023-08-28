import React, { useContext } from 'react'
import "./Hourly.css"
import uiComponents from '../../ui-components';
import { WeatherContext } from '../../context/context';
const Hourly = () => {
  const { Item } = uiComponents
  const { ForecastHourly,modal,setModal } = useContext(WeatherContext)
  const closeModal = () => {
    setModal(!modal);

  }
  return (
    <div className="hourly-container" style={{
      overflow:!modal ? 'hidden' : 'auto',
      display:modal ? 'block' : 'none',
      }}>
      <div onClick={closeModal} className="close shadow">
        <i className="bi bi-x fs-1"></i>
      </div>
      <div className="row align-items-center justify-content-center gap-3">
        {
          ForecastHourly !== undefined ? (
            ForecastHourly.map((item, index) => (
              <Item icon={item?.condition?.icon} temp={item?.temp_c} date={item?.time} feels_temp={item?.feelslike_c} key={index} className="mt-2 ms-2" style={{
              }} />
            ))
          ) :
            (
              <>
                Hali ma'lumotlar kelmadi . . .
              </>
            )

        }
      </div>
    </div>
  )
}

export default Hourly