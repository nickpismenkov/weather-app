import React, { useState } from 'react';
import './index.scss';

type getWeatherT = {
  getWeather: (city: string) => void;
};

const Search: React.FC<getWeatherT> = ({ getWeather }) => {
  const [city, setCity] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const validateInput = async () => {
    if (city.length > 0) {
      getWeather(city);
      setCity('');
    }
  };

  return (
    <div className='app__content__search row justify-content-center form-inline'>
      <input
        value={city}
        onChange={handleChange}
        type='text'
        className='app__content__search-input form-control m-1'
        placeholder='City (example: London)'
      />
      <button
        onClick={validateInput}
        type='submit'
        className='app__content__search-button btn btn-primary m-1 material-icons'
      >
        search
      </button>
    </div>
  );
};

export { Search };
