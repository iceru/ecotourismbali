import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        login_welcome: 'Welcome Back!',
        login_welcome_text: 'Enter the email and password to login',
        register_welcome: 'Register as a Member',
        register_welcome_text: 'Fill the information to continue register',
        register_welcome_text2: 'Already a Member?',
      },
    },
    id: {
      translation: {
        login_welcome: 'Selamat Datang Kembali!',
        login_welcome_text: 'Masukkan email dan password untuk masuk',
        register_welcome: 'Daftar sebagai Member',
        register_welcome_text: 'Isi informasi untuk melanjutkan pendaftaran',
        register_welcome_text2: 'Sudah menjadi Member?',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'id',
});

export default i18n;
