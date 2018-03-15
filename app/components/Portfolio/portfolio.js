import React from 'react';

// Components
import CoinSquare from 'components/CoinSquare/coinSquare';

/*
  TODO
  Coins should come from Redux state and passed down through the Board container.
*/
const Portfolio = ({ coins }) => (
  <div className="portfolio">
    <h1>CoinSquares show up here...</h1>
    {coins.map(coin => <CoinSquare coin={coin} />)}
  </div>
);

export default Portfolio;
