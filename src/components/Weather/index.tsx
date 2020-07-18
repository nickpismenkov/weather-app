import React from 'react';
import './index.scss';

type Weather = {
  weather: any;
};

const Weather: React.FC<Weather> = ({ weather }) => {
  return (
    <div className='weather border border-primary p-5'>
      <span className='h1'>
        {weather.name} | <i className='material-icons'>cloud</i>
      </span>
      <hr />
      <button type='button' className='btn btn-warning mb-5'>
        Country <span className='badge badge-dark'>{weather.sys.country}</span>
      </button>
      <p>
        Temp:
        <span className='badge badge-pill badge-info ml-2'>
          {weather.main.temp} (K)
        </span>
      </p>
      <p>
        Feels like:
        <span className='badge badge-pill badge-info ml-2'>
          {weather.main.feels_like} (K)
        </span>
      </p>
      <p>
        Temp max
        <span className='badge badge-pill badge-info ml-2'>
          {weather.main.temp_max} (K)
        </span>
      </p>
      <p>
        Temp min:
        <span className='badge badge-pill badge-info ml-2'>
          {weather.main.temp_min} (K)
        </span>
      </p>
      <p>
        Clouds:
        <span className='badge badge-pill badge-info ml-2'>
          {weather.clouds.all}
        </span>
      </p>
    </div>
  );
};

export { Weather };
