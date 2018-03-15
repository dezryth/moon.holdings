import React from 'react';

// Components
import Square from 'components/Squares/square';

/*
  TODO
  Coins should come from Redux state and passed down through the Board container.
*/
const Portfolio = ({ coins }) => (
  <div className="portfolio">
    <h1>Squares show up here...</h1>
    {coins.map(coin => <Square coin={coin} />)}
  </div>
);

export default Portfolio;
