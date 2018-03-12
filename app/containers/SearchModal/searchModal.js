import React from 'react';
import { connect } from 'react-redux';

class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.listenForEsc = this.listenForEsc.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.listenForEsc, false);
  }

  listenForEsc(e) {
    if (e.key === 'Escape') {
      this.props.handleClose(e, true);
    }
  }

  handleChange() {
    const text = document.getElementById('coin-search').value;
    console.log('text', text);
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
          <li>Bitcoin <span className="symbol">(BTC)</span></li>
          <li>Ethereum <span className="symbol">(ETH)</span></li>
          <li>Ripple <span className="symbol">(XRP)</span></li>
          <li>Bitcoin Cash <span className="symbol">(BCH)</span></li>
          <li>Litecoin <span className="symbol">(LTC)</span></li>
          <li>Cardano <span className="symbol">(ADA)</span></li>
        </ul>
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   getCoins: (...args) => dispatch(getCoins(...args))
// });

// const mapStateToProps = ({ coins, loading, portfolio }) => ({
//   coins,
//   loading,
//   portfolio
// });

export const SearchModalJest = SearchModal;

export default connect()(SearchModal);
