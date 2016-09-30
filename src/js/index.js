// Import React, ReactDOM, JS, CSS 
import '../css/styles.scss';
import Dropdown from './components/WeatherDropdown';
import React from 'react';
import ReactDOM from "react-dom"
import WeatherItem from './components/WeatherItem';

// Defining the weatherReport Object
const weatherReport = [
		{city: 'London', temperature: 15, type: 'cloudy'},
		{city: 'Connecticut', temperature: 25, type: 'sunny'},
		{city: 'New Jersey', temperature: 25, type: 'cloudy'},
		{city: 'Madrid', temperature: 25, type: 'cloudy'}
];

// Rendering the drpdown component to the DOM
ReactDOM.render(<Dropdown placeholder="Choose City" itemComponent={WeatherItem} items={weatherReport}/>, 
			  document.getElementById('app'));