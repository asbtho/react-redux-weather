import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<WeatherList />
      	<div className="signature"><pre>
      	Data from https://openweathermap.org/ <br/>
      	Built using React / Redux
      	</pre></div>      		
      </div>
    );
  }
}