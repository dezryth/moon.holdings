import React from 'react';
import { floorCents } from 'utils/math';

const calculate = coin => floorCents(coin.balance * coin.price_usd);

export default coin => (
  <li className="coin-square">
    <section>
      <h1>{coin.symbol}</h1>
      <p>Price: ${coin.price_usd}</p>
      <p>Holdings: {coin.balance}</p>
      <p className="f18"> ${calculate(coin)}</p>
    </section>
  </li>
);
