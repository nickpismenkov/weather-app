const FORECAST_LOADING = 'FORECAST_LOADING';
const FORECAST_FAIL = 'FORECAST_FAIL';
const FORECAST_SUCCESS = 'FORECAST_SUCCESS';

export type ForecastType = {
  list: Forecast[];
};

export type Forecast = {
  main: {};
};

export type ForecastLoading = {
  type: typeof FORECAST_LOADING;
};

export type ForecastFail = {
  type: typeof FORECAST_FAIL;
};

export type ForecastSuccess = {
  type: typeof FORECAST_SUCCESS;
  payload: ForecastType;
};

export type ForecastDispatchTypes =
  | ForecastLoading
  | ForecastFail
  | ForecastSuccess;

export { FORECAST_LOADING, FORECAST_FAIL, FORECAST_SUCCESS };
