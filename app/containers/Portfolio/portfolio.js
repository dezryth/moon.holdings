import React from 'react';
import { connect } from 'react-redux';

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
      search: false
    };

    // this.closeSearch = this.closeSearch.bind(this);
  }

  // closeSearch() {
  //   this.setState({ search: false });
  // }

  render() {
    return (
      <div className="app-bg">
        <section className="portfolio">
          <h1>MOON.HOLDINGS</h1>
          <p>{this.state.search}</p>
        </section>
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

export default connect([], [])(Portfolio);
