import React from 'react';
import { connect } from 'react-redux';

class Search extends React.Component {
  componentDidMount() {
    console.log(this);
  }
  /*
    TODO
    Searching calls the api.js to make a call out to CoinMarketCap's api.
    Searched Coins are added to the coins reducer.
    Coins are then passed through the coinFactory to be 'cleaned', then added to
    the portfolio reducer.
    Coins that have already been added should be greyed out and be unselectable.
   */
  render() {
    return (
      <div className="search-modal">
        <h1>Search Modal...</h1>
      </div>
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

export const SearchJest = Search;

export default connect()(Search);
