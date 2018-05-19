import React from 'react';

export default ({ logo }) => (
  <section id="astronaut">
    { logo === true ? <h1>MOON.HOLDINGS</h1> : null }
    <img src="static/astronaut.png" alt="astronaut" />
  </section>
);
