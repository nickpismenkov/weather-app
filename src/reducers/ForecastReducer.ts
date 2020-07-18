import {
  ForecastType,
  ForecastDispatchTypes,
  FORECAST_FAIL,
  FORECAST_SUCCESS,
  FORECAST_LOADING,
} from '../actions/ForecastActionTypes';

type DefaultStateT = {
  loading: boolean;
  query?: boolean;
  list?: ForecastType;
};

const defaultState: DefaultStateT = {
  loading: false,
};

const forecastReducer = (
  state: DefaultStateT = defaultState,
  action: ForecastDispatchTypes
): DefaultStateT => {
  switch (action.type) {
    case FORECAST_FAIL:
      return {
        loading: false,
        query: true,
      };
    case FORECAST_LOADING:
      return {
        loading: true,
      };
    case FORECAST_SUCCESS:
      return {
        loading: false,
        list: action.payload,
      };
    default:
      return state;
  }
};

export { forecastReducer };
