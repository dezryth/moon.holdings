import React from 'react';

// Components
import Square from 'components/Squares/square';

const Portfolio = ({ coins }) => (
  <div>
    <ul className="portfolio-container">
      {coins.map(coin => (<Square key={coin.id} {...coin} />))}
    </ul>
  </div>
);

export default Portfolio;
