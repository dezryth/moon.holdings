import React from 'react';

// Components
// import Square from 'components/Squares/square';

const CoinSquare = coin => <li className="coin-square">{coin.symbol}</li>;

const Portfolio = ({ coins }) => (
  <div>
    <ul className="portfolio-container">
      {coins.map(coin => (<CoinSquare key={coin.id} {...coin} />))}
    </ul>
  </div>
);

export default Portfolio;
