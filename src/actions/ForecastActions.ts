import { Dispatch } from 'redux';
import {
  ForecastDispatchTypes,
  FORECAST_LOADING,
  FORECAST_FAIL,
  FORECAST_SUCCESS,
} from './ForecastActionTypes';
import axios from 'axios';

const GetForecast = (city: string) => async (
  dispatch: Dispatch<ForecastDispatchTypes>
) => {
  try {
    dispatch({
      type: FORECAST_LOADING,
    });

    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=9&appid=${process.env.REACT_APP_OWMID}`
    );

    dispatch({
      type: FORECAST_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: FORECAST_FAIL,
    });
  }
};

export { GetForecast };
