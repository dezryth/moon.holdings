import React from 'react';

// Utils
import { calculateBalance, round } from 'utils/math';
import { coinHasDarkBg, setStyle } from 'utils/modifiers';

const clicked = (coin, edit) => edit(true, coin);

const addStyleModifier = coinId =>
  (coinHasDarkBg(coinId) ? 'coin-square dark-bg' : 'coin-square');

export default ({ coin, edit }) => (
  <li
    className={addStyleModifier(coin.id)}
    style={setStyle(coin.id)}
    onClick={() => clicked(coin, edit)}
  >
    <section>
      <h1>
        <div className="fl">{coin.symbol}</div>
        <div className="fr">{coin.percentage}%</div>
      </h1>
      <p className="coin-price"><span className="o7">Price:</span>
        <span className="fr">${round(coin.price_usd)}</span>
      </p>
      <p className="coin-balance">{coin.balance}</p>
      <p className="balance"> ${calculateBalance(coin)}</p>
    </section>
  </li>
);
