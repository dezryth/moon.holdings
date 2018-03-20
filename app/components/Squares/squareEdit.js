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

    const { coin, coins } = this.props;
    const { portfolio } = coins;
    const { price_usd: price } = coin;

    this.state = {
      coin,
      price,
      balance: '',
      value: '',
      portfolio,
      inPortfolio: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleSave = this.handleSave.bind(this);
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
    // const balance = document.getElementById('coin-balance').value;
    const balance = event.target.value;
    const value = rounder(balance, this.state.price);

    this.setState({
      balance,
      value
    });
  }

  // @TODO use Object.assign here
  handleSave() {
    const coinToSave = this.state.coin;
    coinToSave.balance = this.state.balance;
    this.props.addCoin(coinToSave);
    this.props.closeEdit();
  }

  squareHeight() {
    return this.state.inPortfolio ? 'square-edit-tall' : 'square-edit-short';
  }

  renderRemoveButton() {
    return (
      <button id="save-button" onClick={this.handleSave}>
        Remove
      </button>
    );
  }

  render() {
    const { coin, value, inPortfolio } = this.state;
    const { symbol, price_usd: price } = coin;

    return (
      <div id="square-edit-container">
        <button className="close-modal-x" onClick={this.props.closeEdit} />
        <section id="square-edit" className={this.squareHeight()}>
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
          <button id="save-button" onClick={this.handleSave}>
            Save
          </button>
          { inPortfolio ? this.renderRemoveButton() : null }
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCoin: (...args) => dispatch(addCoin(...args))
});

const mapStateToProps = ({ coins }) => ({
  coins
});

export const SquareEditJest = SquareEdit;

export default connect(mapStateToProps, mapDispatchToProps)(SquareEdit);
