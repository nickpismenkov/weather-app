import {
  WeatherType,
  WeatherDispatchTypes,
  WEATHER_SUCCESS,
  WEATHER_FAIL,
  WEATHER_LOADING,
} from '../actions/WeatherActionTypes';

type DefaultStateT = {
  loading: boolean;
  query?: boolean;
  weather?: WeatherType;
};

const defaultState: DefaultStateT = {
  loading: false,
};

const weatherReducer = (
  state: DefaultStateT = defaultState,
  action: WeatherDispatchTypes
): DefaultStateT => {
  switch (action.type) {
    case WEATHER_FAIL:
      return {
        loading: false,
        query: true,
      };
    case WEATHER_LOADING:
      return {
        loading: true,
      };
    case WEATHER_SUCCESS:
      return {
        loading: false,
        weather: action.payload,
      };
    default:
      return state;
  }
};

export { weatherReducer };
