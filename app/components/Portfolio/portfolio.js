import React from 'react';

// Components
import Square from 'components/Squares/square';

const calculateBalance = (coins) => {
  console.log('coins', coins);
  return coins.reduce((bal, coin) => (bal + Number(coin.balance)), 0);
};

const Portfolio = ({ coins }) => (
  <div>
    <section className="portfolio-balance">
      {calculateBalance(coins)}
    </section>
    <ul className="portfolio-container">
      {coins.map(coin => (<Square key={coin.id} {...coin} />))}
    </ul>
  </div>
);

export default Portfolio;
