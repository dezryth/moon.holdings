import React from 'react';

// Components
// import Square from 'components/Squares/square';

const Portfolio = ({ coins }) => (
  <div>
    <ul>
      {coins.map(coin => (<li key={coin.id}>{coin.symbol}</li>))}
    </ul>
  </div>
);

export default Portfolio;
