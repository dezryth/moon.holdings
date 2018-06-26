import React from 'react';

const PlusButton = ({ toggleSearch }) => (
  <button
    id="big-plus-button"
    tabIndex={0}
    onClick={toggleSearch}
  >
    <span className="plus">+</span>
    <h1>Add Asset</h1>
  </button>
);

export default PlusButton;
