import React from 'react';
import './Dropdown.css';
import { languages } from '../../i18n'; // Import your languages from the i18n setup
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const Dropdown = () => {
    const { i18n } = useTranslation(); // Use the useTranslation hook

    return (
        <div className="dropdown show">
            <a className="btn btn-outline-secondary dropdown-toggle" href="#"
                role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i className="bi bi-globe"></i>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li className='text-center dropdown-header fs-6'>Languages</li>
                {
                    Object.keys(languages).map((key, index) => (
                        <button disabled={key === i18n.language} 
                        style={key === i18n.language ? {
                        color: 'white',
                        opacity: '0.8',
                        cursor:'auto'} : {}} 
                        key={key} 
                        onClick={() => i18n.changeLanguage(key)}  
                        className="dropdown-item" href="#">
                            <i className={`fi fi-${languages[key].flag}`}></i>
                            &nbsp;
                            {languages[key].name}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default Dropdown;
