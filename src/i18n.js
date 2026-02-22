import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: { "WELCOME_TITLE": "Welcome to SUVIDHA OneTouch", "ELECTRICITY_BILL": "ELECTRICITY BILL", "UNIFIED_PLATFORM": "UNIFIED CIVIC SERVICES PLATFORM", "PROCEED_PAYMENT": "PROCEED TO BILL PAYMENT", "WELCOME_SUBTITLE": "Please select a service to continue..." } },
  hi: { translation: { "WELCOME_TITLE": "सुविधा वनटच में आपका स्वागत है", "ELECTRICITY_BILL": "बिजली बिल", "UNIFIED_PLATFORM": "एकीकृत नागरिक सेवा मंच", "PROCEED_PAYMENT": "बिल भुगतान के लिए आगे बढ़ें", "WELCOME_SUBTITLE": "आगे बढ़ने के लिए कृपया एक सेवा चुनें..." } },
  mr: { translation: { "WELCOME_TITLE": "सुविधा वनटचमध्ये आपले स्वागत आहे", "ELECTRICITY_BILL": "वीज बिल" } },
  bn: { translation: { "WELCOME_TITLE": "সুবিধা ওয়ানটাচ-এ স্বাগতম", "ELECTRICITY_BILL": "বিদ্যুৎ বিল" } },
  ta: { translation: { "WELCOME_TITLE": "சுவிதா ஒன்டச் வரவேற்கிறோம்", "ELECTRICITY_BILL": "மின்சார கட்டணம்" } },
  te: { translation: { "WELCOME_TITLE": "సువిధ వన్ టచ్‌కు స్వాగతం", "ELECTRICITY_BILL": "విద్యుత్ బిల్లు" } },
  gu: { translation: { "WELCOME_TITLE": "સુવિધા વન ટચમાં આપનું સ્વાગત છે", "ELECTRICITY_BILL": "વીજળી బిల్" } },
  kn: { translation: { "WELCOME_TITLE": "ಸುವಿಧಾ ಒನ್ ಟಚ್‌ಗೆ ಸ್ವಾಗತ", "ELECTRICITY_BILL": "ವಿದ್ಯುತ್ ಬಿಲ್" } },
  ml: { translation: { "WELCOME_TITLE": "സുവിധ വൺ ടച്ചിലേക്ക് സ്വാഗതം", "ELECTRICITY_BILL": "വൈദ്യുതി ബിൽ" } },
  pa: { translation: { "WELCOME_TITLE": "ਸੁਵਿਧਾ ਵਨ ਟੱਚ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ", "ELECTRICITY_BILL": "ਬਿਜਲੀ ਦਾ ਬਿੱਲ" } }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;