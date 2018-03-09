import React from 'react';

// Components
import CoinBox from 'components/CoinBox/coinBox';

/*
  TODO
  Coins should come from Redux state and passed down through the Board container.
*/
const Portfolio = ({ coins }) => (
  <div className="portfolio">
    <h1>CoinBoxes show up here...</h1>
    {coins.map(coin => <CoinBox coin={coin} />)}
  </div>
);

export default Portfolio;
