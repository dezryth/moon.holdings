import React from 'react';
import { floorCents } from 'utils/math';
import * as style from 'styles/coins';

const calculate = coin => floorCents(coin.balance * coin.price_usd);
const setStyle = id => style[id];

export default coin => (
  <li className="coin-square" style={setStyle(coin.id)}>
    <section>
      <h1>{coin.symbol}</h1>
      <p>Price: ${coin.price_usd}</p>
      <p>Holdings: {coin.balance}</p>
      <p className="f18"> ${calculate(coin)}</p>
    </section>
  </li>
);
