import React from 'react';

// Components
import Square from 'components/Squares/square';

// const CoinSquare = coin => (
//   <li className="coin-square">
//     <section>
//       <p>{coin.balance}</p>
//       <h1>{coin.symbol}</h1>
//       <p>1 @ ${coin.price_usd}</p>
//       <em>= ${calculate(coin)}</em>
//     </section>
//   </li>
// );

const Portfolio = ({ coins }) => (
  <div>
    <ul className="portfolio-container">
      {coins.map(coin => (<Square key={coin.id} {...coin} />))}
    </ul>
  </div>
);

export default Portfolio;
