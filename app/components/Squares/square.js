import React from 'react';

// Utils
import { calculateBalance } from 'utils/math';
import { setStyle } from 'utils/modifiers';

export default coin => (
  <li className="coin-square" style={setStyle(coin.id)}>
    <section>
      <h1>{coin.symbol}</h1>
      <p>Price: ${coin.price_usd}</p>
      <p>Holdings: {coin.balance}</p>
      <p className="f18"> ${calculateBalance(coin)}</p>
    </section>
  </li>
);
