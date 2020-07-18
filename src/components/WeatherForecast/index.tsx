import React from 'react';
import { ShortForecast } from '../ShortForecast';
import './index.scss';

type Forecast = {
  forecast: any;
};

const WeatherForecast: React.FC<Forecast> = ({ forecast }) => {
  return (
    <div className='weather border border-info p-5'>
      <span className='h1'>
        Forecast | <i className='material-icons'>date_range</i>
      </span>
      <hr />
      <div className='row'>
        {forecast.list.map((weather: any) => (
          <div className='col-md-4' key={weather.dt}>
            <ShortForecast weather={weather} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { WeatherForecast };
