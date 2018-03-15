import React from 'react';

class SquareEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coin: this.props.coin
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log(this);
  }

  render() {
    const { coin } = this.state;
    const { symbol, price_usd: price } = coin;

    return (
      <div id="square-edit-container">
        <button className="close-modal-x" onClick={this.props.closeEdit} />
        <section id="square-edit">
          <input
            id="coin-search-input"
            type="number"
            placeholder="0"
            onChange={() => this.handleChange()}
          />
          <div className="symbol">
            {symbol}
          </div>
          <div id="edit-coin-price">
            1 @ ${price}
          </div>
          <div id="edit-total-value">
            $0
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
