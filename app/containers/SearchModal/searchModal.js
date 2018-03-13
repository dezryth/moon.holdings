import React from 'react';
import { connect } from 'react-redux';

// Actions
import { getCoins } from 'actions/coins';

class SearchModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: []
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
    this.setState({ coins: coins.all });
  }

  listenForEsc(e) {
    if (e.key === 'Escape') {
      this.props.handleClose(e, true);
    }
  }

  handleChange() {
    // const text = document.getElementById('coin-search').value;
    console.log(this);
    // const search = (txt) => {
    //   const searchedCoins = findCoins(txt);
    //   this.props.setSearch(searchedCoins);
    //   this.setState({ coins: searchedCoins });
    // };
    //
    // const clearSearch = () => {
    //   this.props.setSearch([]);
    //   this.setState({ coins: this.state.saved });
    // };
    //
    // const handleUpdate = num => (num > 1 ? search(text) : clearSearch());
    //
    // return handleUpdate();
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
          <button className="close-modal-x" onClick={this.props.handleClose} />
        </header>
        <ul>
          {
            coins.map(coin => (
              <li key={coin.id}>
                {coin.name} <span className="symbol">({coin.symbol})</span>
              </li>))
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
