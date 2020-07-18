const WEATHER_LOADING = 'WEATHER_LOADING';
const WEATHER_FAIL = 'WEATHER_FAIL';
const WEATHER_SUCCESS = 'WEATHER_SUCCESS';

export type WeatherType = {
  weather: Weather;
  main: WeatherMain;
};

export type Weather = {
  weather: {
    main: string;
    description: string;
  };
};

export type WeatherMain = {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
};

export type WeatherLoading = {
  type: typeof WEATHER_LOADING;
};

export type WeatherFail = {
  type: typeof WEATHER_FAIL;
};

export type WeatherSuccess = {
  type: typeof WEATHER_SUCCESS;
  payload: WeatherType;
};

export type WeatherDispatchTypes =
  | WeatherLoading
  | WeatherFail
  | WeatherSuccess;

export { WEATHER_LOADING, WEATHER_FAIL, WEATHER_SUCCESS };
