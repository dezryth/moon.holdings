const axios = require('axios');

const historicalUrl = 'https://min-api.cryptocompare.com/data/histoday';

export const getHistorical = async (coin) => {
  const params = {
    fsym: coin,
    tsym: 'USD',
    limit: 30,
    aggregate: 3,
    e: 'CCCAGG'
  };
  const { data } = await axios.get(historicalUrl, { params });
  console.log(data);
};

getHistorical('BTC');
