import React from 'react';

// Utils
import { calculateBalance, round } from 'utils/math';
import { setStyle, styleModifier } from 'utils/modifiers';

const clicked = (coin, edit) => edit(true, coin);

const Square = ({ coin, edit }) => (
  <div
    className={styleModifier(coin.id)}
    style={setStyle(coin.id)}
    onClick={() => clicked(coin, edit)}
  >
    <section>
      <h1>
        <div className="fl"> {coin.symbol} </div>
        <div className="fr mr-n5"> {coin.percentage}% </div>
      </h1>
      <p className="coin-price"><span className="mr5 o7">Price:</span>
        <span className="fr"> ${round(coin.price_usd)} </span>
      </p>
      <p className="coin-balance"> {coin.balance} </p>
      <p className="balance"> ${calculateBalance(coin)} </p>
    </section>
  </div>
);

export default Square;
