import React from 'react';
import { connect } from 'react-redux';

import Coins from 'components/Coins/coins';

// Actions
// import { getCoins } from 'actions/coins';

// Services
// import { findCoins } from 'services/coinFactory';
//
// const fetchCoins = (props) => {
//   const { coins, getCoins: goGetCoins } = props;
//   if (coins.collection.length === 0) {
//     goGetCoins();
//   }
// };

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cached: false,
      search: false
    };

    // this.closeSearch = this.closeSearch.bind(this);
  }

  // closeSearch() {
  //   this.setState({ search: false });
  // }

  /*
    TODO
    Portfolio is the main container, Coins will be the individual crypto assets
    Search will be the 3rd major component, and EditCoin the 4th...
   */
  render() {
    return (
      <div className="portfolio">
        {this.state.cached
          ? <Coins />
          :
          <section>
            <h4>Welcome to</h4>
            <h1>MOON.HOLDINGS</h1>
            <h3>A Futuratum Project</h3>
            <h2>Click the + button to create your portfolio.</h2>
            <p>{this.state.search}</p>
          </section>
        }
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

export const PortfolioJest = Portfolio;

export default connect()(Portfolio);
