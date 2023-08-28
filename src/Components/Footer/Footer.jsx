import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const {t} = useTranslation()
  return (
    <>
        <div className="weather-footer mt-3">
            <div className="weather-copyright">
                {t("footer.copyright")}
                <p>
                  <h3>{t("footer.created_by")}</h3>
                </p>
            </div>
        </div>
    </>
  )
}

export default Footer