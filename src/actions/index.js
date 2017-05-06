import axios from 'axios';

const API_KEY = '6e400ee05a2a62ebfb1cf792605bae4d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},no`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}