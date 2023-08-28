import React from 'react';
import './Header.css';
import uiComponents from '../../ui-components'; // Adjust the path accordingly
import { useTranslation } from 'react-i18next';
const Header = ({ className }, name = 'Header') => {
  const {Input, Dropdown} = uiComponents; // Extract Input and Dropdown from uiComponents
  const { t, i18n } = useTranslation();
  return (
    <div className={`weather-header ${className}`}>
      <div className="weather-brand">
        {t("header.brand_name")}
      </div>
      <div className="weather-search">
        <Input placeholder={t("header.search_placeholder")}  />
      </div>
      <div className="language">
        <Dropdown />
      </div>
    </div>
  );
};

export default Header;
