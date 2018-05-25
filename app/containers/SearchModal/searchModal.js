/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import { connect } from 'react-redux';

// Actions
import { getCoins } from 'actions/coins';

// Services
import { findCoins } from 'services/coinFactory';

class SearchModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: [],
      saved: [],
      focused: {}
      // loading: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.listenForEsc = this.listenForEsc.bind(this);
    this.listenForEnter = this.listenForEnter.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.setFocus = this.setFocus.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.listenForEsc, false);
    document.addEventListener('keydown', this.listenForEnter, false);
    this.props.getCoins();
  }

  componentWillReceiveProps({ coins }) {
    this.setState({ coins: coins.all, saved: coins.all });
  }

  setFocus(coin) {
    console.log('setFocus', coin.id);
    this.setState({ focused: coin });
  }

  handleSelect(coin) {
    this.props.openEdit(true, coin);
  }

  handleChange() {
    const text = document.getElementById('coin-search').value.toLowerCase();

    const search = (txt) => {
      const coins = this.props.coins.all;
      const searchedCoins = findCoins(txt, coins);
      this.setState({ coins: searchedCoins });
    };

    const clearSearch = () => {
      this.setState({ coins: this.state.saved });
    };

    const handleUpdate = num => (num > 1 ? search(text) : clearSearch());

    return handleUpdate(text.length);
  }

  listenForEsc(e) {
    if (e.key === 'Escape') {
      this.setState({ focused: {} });
      this.props.handleClose(e, true);
    }
  }

  listenForEnter(e) {
    if (e.key === 'Enter') {
      const { focused } = this.state;
      console.log('listenForEnter', focused);
      this.handleSelect(focused);
    }
  }

  render() {
    const { coins } = this.state;

    return (
      <section id="search-modal">
        <header className="search-header">
          <input
            id="coin-search"
            type="text"
            placeholder="Search"
            onChange={() => this.handleChange()}
          />
          <button className="close-modal-x" onClick={this.props.closeSquareEdit} />
        </header>
        <ul className="coins-list">
          { coins !== 'undefined'
            ? coins.map((coin, i) => (
              <li
                key={coin.id}
                role="button"
                tabIndex={i}
                onFocus={() => this.setFocus(coin)}
                onClick={() => this.handleSelect(coin)}
              >
                {coin.name}
                <span className="symbol">({coin.symbol})</span>
              </li>))
            : <li>Loading...</li>
          }
        </ul>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCoins: (...args) => dispatch(getCoins(...args))
});

const mapStateToProps = ({ coins }) => ({
  coins
});

export const SearchModalJest = SearchModal;

export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);
