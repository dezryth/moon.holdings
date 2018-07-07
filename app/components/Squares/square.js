import React from 'react';

// Utils
import { calculateBalance, round } from 'utils/math';
import { setStyle, styleModifier } from 'utils/modifiers';

const clicked = (coin, edit) => edit(true, coin);

export default ({ coin, edit, index }) => (
  <div
    className={styleModifier(coin.id)}
    style={setStyle(coin.id)}
    onClick={() => clicked(coin, edit)}
  >
    <section>
      <h1>
        <div className="fl">{coin.symbol}</div>
        {/* <div className="fr mr-n5 o7">{coin.percentage}%</div> */}
      </h1>
      <p className="coin-price"><span className="mr3 o7">Price:</span>
        <span className="fr">${round(coin.price_usd)}</span>
      </p>
      <p className="coin-balance">{coin.balance}</p>
      <p className="balance">${calculateBalance(coin)}</p>

      <div className="coin-stats">
        <div className="coin-index">
          <span className="stat">#</span>
          <span>{index + 1}</span>
        </div>
        <div className="coin-percentage">
          <span>{coin.percentage}</span>
          <span className="stat">%</span>
        </div>
        <div className="change24">
          <span className="stat mr3">24hr</span>
          <span>{coin.percent_change_24h}</span>
          <span className="stat">%</span>
        </div>
      </div>
    </section>
  </div>
);
