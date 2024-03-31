import React, { useState } from 'react';
import { Box, Input, styled } from '@mui/material';
import axios from 'axios';

const MainContainer = styled(Box)(() => ({
  background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.418) ), url(/background_weather_app.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '896px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

const InputField = styled(Input)((theme) => ({
  outline: 'none',
  padding: '20px 7%',
  borderRadius: '20px',
  border: 'none',
  marginBottom: '24px',
  background: 'rgba(250, 250, 250, 0.85)',
  // [theme.breakpoints.down('sm')]: {
  //   padding: '20px 15%',
  // },
}));

const ResultContainer = styled(Box)((theme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '40px',
  borderRadius: '20px',
  background: '#d4c7ffd9',
  boxShadow: '10px 10px 5px 0px rgba(15, 15, 15, 0.404)',
  // [theme.breakpoints.down('sm')]: {
  //   padding: '40px 20%',
  // },
}));

const CityHeader = styled('h2')(() => ({
  fontSize: '2em',
  '& sup': {
    padding: '0.2em 0.6em',
    marginLeft: '0.2em',
    borderRadius: '30px',
    color: '#fff',
    background: '#ff8c00',
    fontSize: '0.5em',
  },
}));

const CityTemp = styled(Box)(() => ({
  fontSize: '5rem',
  fontWeight: 'bold',
  marginTop: '10px',
  color: '#1e2432',
  textAlign: 'center',
}));

const WeatherInfoContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const WeatherIcon = styled('img')(() => ({
  width: '100px',
  height: '100px',
  marginTop: '10px',
}));

const WeatherDescription = styled('p')(() => ({
  marginTop: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
}));

const Layout = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: query,
          units: 'metric',
          APPID: process.env.WEATHER_API_KEY,
        }
      });

      setWeather(data);
      setQuery('');
    }
  }

  return (
    <MainContainer>
      <InputField
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={search}
      />
      {(weather.main) && (
        <ResultContainer>
          <CityHeader>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </CityHeader>
          <CityTemp>
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </CityTemp>
          <WeatherInfoContainer>
            <WeatherIcon src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <WeatherDescription>{weather.weather[0].description}</WeatherDescription>
          </WeatherInfoContainer>
        </ResultContainer>
      )}
    </MainContainer>
  );
}

export default Layout;
