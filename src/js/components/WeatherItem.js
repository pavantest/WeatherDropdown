import React from 'react';
import styles from '../../css/styles.scss';

// STATELESS component called WeatherItem that renderes the dropdown items
function WeatherItem(props) {
 	// ES6 Destructuring to extract values from data stored in objects and Arrays.
 	const {city, temperature, type} = props;
  	return <label>{city + " " +temperature+"° "}<span className= {'glyphicon '+(type == 'sunny'? 'glyphicon-certificate' : 'glyphicon-cloud')}></span></label>
}
export default WeatherItem;