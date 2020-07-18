import { Dispatch } from 'redux';
import {
  WeatherDispatchTypes,
  WEATHER_LOADING,
  WEATHER_FAIL,
  WEATHER_SUCCESS,
} from './WeatherActionTypes';
import axios from 'axios';

const GetWeather = (city: string) => async (
  dispatch: Dispatch<WeatherDispatchTypes>
) => {
  try {
    dispatch({
      type: WEATHER_LOADING,
    });

    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OWMID}`
    );

    dispatch({
      type: WEATHER_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: WEATHER_FAIL,
    });
  }
};

export { GetWeather };
