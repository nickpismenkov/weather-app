import React from 'react';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from './Store';
import { GetWeather } from './actions/WeatherActions';
import { GetForecast } from './actions/ForecastActions';
import { Weather } from './components/Weather';
import { WeatherForecast } from './components/WeatherForecast';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const weatherState = useSelector((state: RootStore) => state.weather);
  const forecastState = useSelector((state: RootStore) => state.forecast);

  const getWeather = (city: string) => {
    dispatch(GetWeather(city));
    dispatch(GetForecast(city));
  };

  return (
    <div className='app'>
      <div className='app__navbar'>
        <Navbar />
      </div>
      <div className='app__content container'>
        <Search getWeather={getWeather} />
        <div className='app__content__bottom row justify-content-center align-items-center'>
          {weatherState.loading ? (
            <div className='spinner-border text-primary' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
          ) : weatherState.weather && forecastState.list ? (
            <>
              <div className='app__content__bottom__weather col-md-4 m-1'>
                <Weather weather={weatherState.weather} />
              </div>
              <div className='app__content__bottom__weather col-md-7 m-1'>
                <WeatherForecast forecast={forecastState.list} />
              </div>
            </>
          ) : weatherState.query ? (
            <div className='app__content__bottom__weather col-md-12 row justify-content-center align-items-center border border-danger m-2'>
              <span className='h3'>City not found</span>
            </div>
          ) : (
            <div className='app__content__bottom__weather col-md-12 row justify-content-center align-items-center border border-primary m-2'>
              <span className='h3'>Start search</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { App };
