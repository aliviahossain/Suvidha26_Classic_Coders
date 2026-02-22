import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "UNIFIED_PLATFORM": "UNIFIED CIVIC SERVICES PLATFORM",
      "WELCOME_TITLE": "Welcome to SUVIDHA OneTouch",
      "WELCOME_SUBTITLE": "Please select a service to continue. This portal provides 24/7 access to municipal and utility services.",
      "ELECTRICITY_BILL": "ELECTRICITY BILL",
      "WATER_TAX": "WATER TAX",
      "GAS_CONNECTION": "GAS CONNECTION",
      "PROPERTY_TAX": "PROPERTY TAX",
      "PROCEED_PAYMENT": "PROCEED TO BILL PAYMENT"
    }
  },
  hi: {
    translation: {
      "UNIFIED_PLATFORM": "एकीकृत नागरिक सेवा मंच",
      "WELCOME_TITLE": "सुविधा वनटच में आपका स्वागत है",
      "WELCOME_SUBTITLE": "आगे बढ़ने के लिए कृपया एक सेवा चुनें।",
      "ELECTRICITY_BILL": "बिजली बिल",
      "WATER_TAX": "पानी कर",
      "GAS_CONNECTION": "गैस कनेक्शन",
      "PROPERTY_TAX": "संपत्ति कर",
      "PROCEED_PAYMENT": "बिल भुगतान के लिए आगे बढ़ें"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;