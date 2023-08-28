import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Daily, Footer, Header, Main } from './Components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'; // Removed unnecessary parentheses
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'flag-icons/css/flag-icons.min.css'; // Adjust the path accordingly
import { WeatherContext } from './context/context';
import uiComponents from './ui-components';
import Hourly from './Components/Hourly/Hourly';
const App = () => {
  const { Alert } = uiComponents
  const { error, data } = useContext(WeatherContext)
  // Extract Input and Dropdown from uiComponents
  const { t, i18n } = useTranslation();

  // Example of handling missing translation key
  if (error) {
    if (error?.code === 'ERR_NETWORK') {
      return (
        <>
          <Header className={'text-center shadow'} />
          <Alert>{t('error.network_err')}</Alert>
        </>
      )
    }
    if (error.response.status === 400) {
      return (
        <>
          <Header className={'text-center shadow'} />
          <Alert>{t('error.no_found')}</Alert>
        </>
      )
    }
  }

  return (
    <>
      <Header className={'text-center shadow'} />
      <Main className={'shadow flex-xl-row flex-column border-0'} />
      <Daily />
      <Hourly />
      <Footer />
    </>
  );
};

export default App;
