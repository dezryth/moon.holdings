import React from 'react';
import { connect } from 'react-redux';

// Actions
import { getCoins, setCoins } from 'actions/coins';

// Services
import { findCoins } from 'services/coinFactory';

class SearchModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: [],
      saved: []
      // loading: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.listenForEsc = this.listenForEsc.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.listenForEsc, false);
    this.props.getCoins();
  }

  componentWillReceiveProps({ coins }) {
    this.setState({ coins: coins.all, saved: coins.all });
  }

  listenForEsc(e) {
    if (e.key === 'Escape') {
      this.props.handleClose(e, true);
    }
  }

  handleChange() {
    const text = document.getElementById('coin-search').value;

    const search = (txt) => {
      const coins = this.props.coins.all;
      const searchedCoins = findCoins(txt, coins);
      this.props.setCoins(searchedCoins);
      this.setState({ coins: searchedCoins });
    };

    const clearSearch = () => {
      this.props.setCoins([]);
      this.setState({ coins: this.state.saved });
    };

    const handleUpdate = num => (num > 1 ? search(text) : clearSearch());

    return handleUpdate(text.length);
  }

  render() {
    const { coins } = this.state;
    console.log('coins', coins);
    return (
      <section id="search-modal">
        <header className="search-header">
          <input
            id="coin-search"
            type="text"
            placeholder="Search"
            onChange={() => this.handleChange()}
          />
          <button className="close-modal-x" onClick={this.props.handleClose} />
        </header>
        <ul className="coins-list">
          { coins !== 'undefined'
            ? coins.map(coin => (
              <li key={coin.id}>
                {coin.name} <span className="symbol">({coin.symbol})</span>
              </li>))
            : null
          }
        </ul>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCoins: (...args) => dispatch(getCoins(...args)),
  setCoins: (...args) => { dispatch(setCoins(...args)); }
});

const mapStateToProps = ({ coins }) => ({
  coins
});

export const SearchModalJest = SearchModal;

export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);
