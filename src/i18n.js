import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Initialize i18next
export const languages = 
  {
    'uz': {
      name: 'O`zbekcha',
      flag: 'uz'
    },
    'en': {
      name: 'English',
      flag: 'gb'
    }
  }

i18n
  .use(Backend) // Load translations using http (XHR) backend
  .use(LanguageDetector) // Detect user's language using browser settings
  .use(initReactI18next) // Bind i18next to React components
  .init({
    order: ['cookie'], // Priority order for language detection
    caches: ['cookie'], // Where to store the language preference
    fallbackLng: "en", // Fallback language if translation is missing
    debug: true, // Enable debug mode for development
    // Add more configuration options if needed
    returnObjects: true,
  });

export default i18n;
