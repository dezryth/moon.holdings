import React from 'react';

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
      <p className="coin-price"><span className="mr3 o7">Price:</span>
        <span className="fr">${round(coin.price_usd)}</span>
      </p>
      <p className="coin-position">Position:</p>
      <p className="coin-allocation">Allocation:</p>
      <div className="position-bg">
        <p className="coin-balance">{coin.balance}</p>
        <div className="coin-percentage">
          <span>{coin.percentage}</span>
          <span className="stat">%</span>
        </div>
      </div>
      <p className="coin-value">Value:</p>
      <p className="balance">${numberWithCommas(coin.value)}</p>
    </section>
  </div>
);
