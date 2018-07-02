import React from 'react';

// Components
import Square from 'components/Squares/square';

// Utils
import { portfolioBalance, getCoinValue } from 'utils/math';

const byLargestBalance = (b, a) => getCoinValue(a) - getCoinValue(b);

const Portfolio = ({ coins, edit }) => (
  <div>
    <section className="portfolio-balance">
      ${portfolioBalance(coins)}
    </section>

    <div className="flex-grid portfolio-container">
      {coins.sort(byLargestBalance).map((coin, i) =>
        (<Square key={coin.id} coin={coin} edit={edit} index={i} />))}
    </div>
  </div>
);

export default Portfolio;
