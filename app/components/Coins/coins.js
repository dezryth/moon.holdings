import React from 'react';
import { connect } from 'react-redux';

const Coins = () => (
  <div className="coins">
    <h1>Coin boxes go here...</h1>
  </div>
);

// const mapDispatchToProps = dispatch => ({
//   getCoins: (...args) => dispatch(getCoins(...args))
// });

// const mapStateToProps = ({ coins, loading, portfolio }) => ({
//   coins,
//   loading,
//   portfolio
// });

export const CoinsJest = Coins;

export default connect()(Coins);
