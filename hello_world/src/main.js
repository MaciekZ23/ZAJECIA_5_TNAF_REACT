import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';
import App from './App.js';

// Wstawiamy komponent App do glownego elementu
document.querySelector('#app').innerHTML = ''; // Wyczysc zawartosc #app
const root = document.querySelector('#app');  // Pobierz element #app
root.appendChild(App()); // Dodaj komponent App

// Opcjonalnie: zachowaj reszte funkcji, np. licznik
setupCounter(document.querySelector('#counter'));
