import React from 'react';

const Astronaut = ({ logo }) => (
  <section id="astronaut">
    { logo === true ? <h1>MOON.HOLDINGS</h1> : null }
    <img src="static/astronaut.png" alt="astronaut" />
  </section>
);

export default Astronaut;
