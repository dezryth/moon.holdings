import React from 'react';

// Utils
import { calculateBalance } from 'utils/math';
import { setStyle } from 'utils/modifiers';

const clicked = (coin, edit) => edit(true, coin);

export default ({ coin, edit }) => (
  <li
    className="coin-square"
    style={setStyle(coin.id)}
    onClick={() => clicked(coin, edit)}
  >
    <section>
      <h1>
        <div className="fl">{coin.symbol}</div>
        <div className="fr">{coin.percentage}%</div>
      </h1>
      <p>Price: ${coin.price_usd}</p>
      <p>Holdings: {coin.balance}</p>
      <p className="balance"> ${calculateBalance(coin)}</p>
    </section>
  </li>
);
