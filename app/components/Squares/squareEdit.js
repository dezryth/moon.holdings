/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';

// Actions
import { addCoin } from 'actions/coins';

// utils
import { round, rounder } from 'utils/math';

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
    this.handleSave = this.handleSave.bind(this);
  }

  handleFocus(e) {
    e.target.select();
  }

  handleChange() {
    const balance = document.getElementById('coin-balance').value;
    const value = rounder(balance, this.state.price);

    this.setState({
      balance,
      value
    });
  }

  handleSave() {
    this.props.addCoin(this.state.coin);
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
            1 @ ${round(price)}
          </div>
          <div id="edit-total-value">
            ${value}
          </div>
          <button id="save-button" onClick={this.handleSave}>
            Save
          </button>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCoin: (...args) => dispatch(addCoin(...args))
});

// const mapStateToProps = ({ coins }) => ({
//   coins
// });

export const SquareEditJest = SquareEdit;

export default connect(null, mapDispatchToProps)(SquareEdit);
