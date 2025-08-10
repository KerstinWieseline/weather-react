import React from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather city="New York" />
      </header>
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/KerstinWieseline/"
          target="_blank"
          rel="noreferrer"
        >
          Kerstin Wiessmann
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/KerstinWieseline/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://weather-react-kerstin.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
