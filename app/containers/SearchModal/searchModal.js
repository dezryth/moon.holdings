import React from 'react';
import { connect } from 'react-redux';

// Actions
import { getCoins } from 'actions/coins';

// Services
import { findCoins } from 'services/coinFactory';

// Styles
// import { bitcoin } from 'styles/coins';

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
    this.handleSelect = this.handleSelect.bind(this);
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
      this.setState({ coins: searchedCoins });
    };

    const clearSearch = () => {
      this.setState({ coins: this.state.saved });
    };

    const handleUpdate = num => (num > 1 ? search(text) : clearSearch());

    return handleUpdate(text.length);
  }

  handleSelect(coin) {
    // let style;
    // if (coin.id === 'btc') {
    //   style === styles.bitcoin;
    // }
    this.props.openEdit(true, coin);
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
            ? coins.map(coin => (
              <li key={coin.id} onClick={() => this.handleSelect(coin)}>
                {coin.name}
                <span className="symbol">
                  ({coin.symbol})
                </span>
              </li>))
            : null
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
