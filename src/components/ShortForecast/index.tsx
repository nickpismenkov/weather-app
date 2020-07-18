import React from 'react';
import './index.scss';

type ShortForecast = {
  weather: any;
};

const ShortForecast: React.FC<ShortForecast> = ({ weather }) => {
  return (
    <div className='short-forecast p-1 border border-dark rounded-lg m-2'>
      <span className='badge badge-dark'>{weather.dt_txt}</span>
      <br />
      <span>
        Temp:
        <span className='badge badge-pill badge-info ml-1'>
          {weather.main.temp} (K)
        </span>
      </span>
      <span>
        Clouds:
        <span className='badge badge-pill badge-info ml-1'>
          {weather.clouds.all}
        </span>
      </span>
    </div>
  );
};

export { ShortForecast };
