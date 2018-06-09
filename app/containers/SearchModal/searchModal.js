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
    };

    this.handleChange = this.handleChange.bind(this);
    this.listenForEsc = this.listenForEsc.bind(this);
    this.listenForEnter = this.listenForEnter.bind(this);
    this.closeSquareEdit = this.closeSquareEdit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.setFocus = this.setFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.listenForEsc, false);
    document.addEventListener('keydown', this.listenForEnter, false);
    this.props.getCoins();
  }

  componentWillReceiveProps({ coins }) {
    this.setState({ coins: coins.all, saved: coins.all });
  }

  onBlur() {
    this.setState({ focused: {} });
  }

  setFocus(coin) {
    this.setState({ focused: coin });
  }

  handleSelect(coin) {
    this.setState({ focused: coin });
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
      this.props.handleClose(true);
    }
  }

  listenForEnter(e) {
    if (e.key === 'Enter') {
      const { focused } = this.state;
      this.handleSelect(focused);
    }
  }

  closeSquareEdit() {
    this.props.handleClose(true);
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
          <button className="close-modal-x" onClick={this.closeSquareEdit} />
        </header>
        <ul className="coins-list">
          { coins !== 'undefined'
            ? coins.map((coin, i) => (
              <li
                key={coin.id}
                role="button"
                tabIndex={i}
                onFocus={() => this.setFocus(coin)}
                onBlur={this.onBlur}
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
