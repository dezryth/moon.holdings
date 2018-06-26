const axios = require('axios');
const moment = require('moment');
const { map, partial, prop } = require('ramda');

const API_URL = interval => `https://min-api.cryptocompare.com/data/${interval}`;

const historical = {
  daily: API_URL`histoday`,
  hourly: API_URL`histohour`,
  minute: API_URL`histominute`
};

const getHistorical = async (interval = 'daily', coin = 'BTC') => {
  const url = historical[interval];
  const params = {
    fsym: coin,
    tsym: 'USD',
    limit: 30,
    aggregate: 3,
    e: 'CCCAGG'
  };
  const { data } = await axios.get(url, { params });
  return data;
};

const daily = partial(getHistorical, ['daily']);
const hourly = partial(getHistorical, ['hourly']);
const minute = partial(getHistorical, ['minute']);
const time = map(prop('time'));

daily('BTC').then((response) => {
  console.log(time(response.Data));
});
