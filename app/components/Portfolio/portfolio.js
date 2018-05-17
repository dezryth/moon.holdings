import React from 'react';

// Components
import Square from 'components/Squares/square'

// Utils
import { portfolioBalance, calculateBalance } from 'utils/math';

const byLargestBalance = (b, a) => calculateBalance(b) - calculateBalance(a);
const Portfolio = ({ coins }) => (
  <div>
    <section className="portfolio-balance">
      ${portfolioBalance(coins)}
    </section>
    <ul className="portfolio-container">
      {coins.sort(byLargestBalance).map(coin => (<Square key={coin.id} {...coin} />))}
    </ul>
  </div>
);

export default Portfolio;
