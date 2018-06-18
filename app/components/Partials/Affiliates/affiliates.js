import React from 'react';

// Constants
import { coinbase, binance, changelly } from 'constants/affiliates';

const links = [
  { name: 'coinbase', link: coinbase, h4: 'Buy Bitcoin' },
  { name: 'binance', link: binance, h4: 'Buy Altcoins' },
  { name: 'changelly', link: changelly, h4: 'Sawp coins' }
];

export default () => (
  <div className="affiliates">
    <ul>
      {links.map(l => (
        <a href={l.link} target="_blank" rel="noopener noreferrer">
          <li className={l.name}>
            <h4>{l.h4}</h4>
          </li>
        </a>
      ))}
    </ul>
  </div>
);
