import { combineReducers } from 'redux';
import { weatherReducer } from './WeatherReducer';
import { forecastReducer } from './ForecastReducer';

const RootReducer = combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
});

export { RootReducer };
