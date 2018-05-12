/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { connect } from 'react-redux';

// Actions
import { addCoin, updateCoin, removeCoin } from 'actions/coins';

// Utils
import { round, rounder } from 'utils/math';
import { setStyle } from 'utils/modifiers';

// Styles
import * as style from 'styles/coins';

class SquareEdit extends React.Component {
  constructor(props) {
    super(props);

    const { coin, coins } = this.props;
    const { portfolio } = coins;
    const { price_usd: price } = coin;

    this.state = {
      coin,
      price,
      balance: 0,
      value: '',
      portfolio,
      inPortfolio: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentWillMount() {
    const { coin, balance: stateBalance } = this.state;
    const { portfolio } = this.state;
    const inPortfolio = portfolio.filter(c => c.id === coin.id);
    const portCoin = inPortfolio[0] ? inPortfolio[0] : coin;
    const balance = portCoin.balance ? portCoin.balance : stateBalance;

    this.setState({
      coin: portCoin,
      balance,
      inPortfolio: inPortfolio.length > 0
    });
  }

  handleFocus(e) {
    e.target.select();
  }

  handleChange(event) {
    const balance = event.target.value;
    const value = rounder(balance, this.state.price);

    this.setState({
      balance,
      value
    });
  }

  addCoin(coin, balance) {
    this.props.addCoin(Object.assign({ balance }, coin));
  }

  updateCoin(coin, balance) {
    const updatedCoin = Object.assign(coin);
    updatedCoin.balance = balance;
    this.props.updateCoin(updatedCoin);
  }

  handleSave() {
    const { coin, balance, inPortfolio } = this.state;
    inPortfolio ? this.updateCoin(coin, balance) : this.addCoin(coin, balance);
    this.props.closeEdit();
  }

  handleRemove() {
    const { coin } = this.state;
    this.props.removeCoin(coin);
    this.props.closeEdit();
  }

  squareHeight() {
    return this.state.inPortfolio ? 'edit-tall' : 'edit-short';
  }

  renderRemoveButton() {
    return (
      <button id="save-button" onClick={this.handleRemove}>
        Remove
      </button>
    );
  }

  render() {
    const { coin, value, inPortfolio } = this.state;
    const { symbol, price_usd: price } = coin;
    const isDisabled = this.state.balance <= 0;

    return (
      <div id="square-edit-container">
        <button className="close-modal-x" onClick={this.props.closeEdit} />
        <section
          id="square-edit"
          className={this.squareHeight()}
          style={setStyle(coin.id, style)}
        >
          <input
            id="coin-balance"
            type="number"
            placeholder="0"
            value={this.state.balance}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
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
          <button id="save-button" onClick={this.handleSave} disabled={isDisabled}>
            Save
          </button>
          { inPortfolio ? this.renderRemoveButton() : null }
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCoin: (...args) => dispatch(addCoin(...args)),
  updateCoin: (...args) => dispatch(updateCoin(...args)),
  removeCoin: (...args) => dispatch(removeCoin(...args))
});

const mapStateToProps = ({ coins }) => ({
  coins
});

export const SquareEditJest = SquareEdit;

export default connect(mapStateToProps, mapDispatchToProps)(SquareEdit);
