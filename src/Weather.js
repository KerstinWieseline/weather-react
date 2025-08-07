import React from "react";
import axios from "axios";

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in New York is ${response.data.temperature.current}°C`);
    }
    let apiKey = "0c43aab85t9fo6a6712276a1886b3109";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Weather</h2>;
}