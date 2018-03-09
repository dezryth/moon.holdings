import React from 'react';

export default function NoMatch() {
  return (
    <div>
      <section className="welcome">
        <h1>MOON.HOLDINGS</h1>
        <p>Oops, could not find that...</p>
        <p>Did you mean: <a href="/">moon.holdings</a></p>
      </section>
    </div>
  );
}
