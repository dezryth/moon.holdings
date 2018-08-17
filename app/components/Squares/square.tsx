import React from 'react';

export interface Square { coin: object; edit: function, index: number; }

// Utils
import { numberWithCommas, round } from 'utils/math';
import { percentStyler, setStyle, styleModifier } from 'utils/modifiers';

const clicked = (coin, edit) => edit(true, coin);

export default ({ coin, edit, index }) => (
  <div
    className={styleModifier(coin.id)}
    style={setStyle(coin.id)}
    onClick={() => clicked(coin, edit)}
  >
    <section className="square-shade">
      <div className="coin-stats">
        <div className="coin-index">
          <span className="stat">#</span>
          <span>{index + 1}</span>
        </div>
        <div className="change24">
          <span className="stat mr3 hr24">24hr</span>
          <span className={percentStyler(coin)}>{coin.percent_change_24h}</span>
          <span className="stat">%</span>
        </div>
      </div>
      <h1>
        <div className="fl">{coin.symbol}</div>
      </h1>
      <p className="coin-stat"><span className="mr3 o7">Price:</span>
        <span className="fr">${round(coin.price_usd)}</span>
      </p>
      <p className="coin-stat"><span className="mr3 o7">Position:</span>
        <span className="fr">{coin.balance}</span>
      </p>
      <p className="coin-stat"><span className="mr3 o7">Allocation:</span>
        <span className="fr">
          <span className="coin-percentage">
            <span>{coin.percentage}</span>
            <span className="stat">%</span>
          </span>
        </span>
      </p>
      <p className="coin-stat"><span className="mr3 o7">Value:</span>
        <span className="fr f20">${numberWithCommas(coin.value)}</span>
      </p>
    </section>
  </div>
);
