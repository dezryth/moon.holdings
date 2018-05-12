import React from 'react';

// Utils
import { calculateBalance } from 'utils/math';
import { setStyle } from 'utils/modifiers';

// Styles
import * as style from 'styles/coins';

export default coin => (
  <li className="coin-square" style={setStyle(coin.id, style)}>
    <section>
      <h1>{coin.symbol}</h1>
      <p>Price: ${coin.price_usd}</p>
      <p>Holdings: {coin.balance}</p>
      <p className="f18"> ${calculateBalance(coin)}</p>
    </section>
  </li>
);
