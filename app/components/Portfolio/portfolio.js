import React from 'react';

// Components
import Square from 'components/Squares/square';

// Utils
import { portfolioBalance } from 'utils/math';

const Portfolio = ({ coins }) => (
  <div>
    <section className="portfolio-balance">
      ${portfolioBalance(coins)}
    </section>
    <ul className="portfolio-container">
      {coins.map(coin => (<Square key={coin.id} {...coin} />))}
    </ul>
  </div>
);

export default Portfolio;
