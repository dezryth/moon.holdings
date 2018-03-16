/* eslint-disable class-methods-use-this */
import React from 'react';

// utils
import { rounder } from 'utils/math';

class SquareEdit extends React.Component {
  constructor(props) {
    super(props);

    const { coin } = this.props;
    const { price_usd: price } = coin;

    this.state = {
      coin,
      price,
      balance: 0,
      value: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus(e) {
    e.target.select();
  }

  handleChange() {
    const balance = document.getElementById('coin-balance').value;
    // const value = (balance * this.state.price);
    const value = rounder(balance, this.state.price);

    this.setState({
      balance,
      value
    });
  }

  render() {
    const { coin, value } = this.state;
    const { symbol, price_usd: price } = coin;

    return (
      <div id="square-edit-container">
        <button className="close-modal-x" onClick={this.props.closeEdit} />
        <section id="square-edit">
          <input
            id="coin-balance"
            type="number"
            placeholder="0"
            value={this.state.balance}
            onFocus={this.handleFocus}
            onChange={() => this.handleChange()}
          />
          <div className="symbol">
            {symbol}
          </div>
          <div id="edit-coin-price">
            1 @ ${price}
          </div>
          <div id="edit-total-value">
            ${value}
          </div>
          <button id="save-button">
            Save
          </button>
        </section>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   getCoins: (...args) => dispatch(getCoins(...args)),
//   setCoins: (...args) => { dispatch(setCoins(...args)); }
// });
//
// const mapStateToProps = ({ coins }) => ({
//   coins
// });

export default SquareEdit;
