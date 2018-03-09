import React from 'react';
import { connect } from 'react-redux';

import Portfolio from 'components/Portfolio/portfolio';

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

class Board extends React.Component {
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
    Board is the main container which contains Search, selected Coins will be
    added to Redux state and then passed down into Portfolio.
   */
  render() {
    return (
      <div id="board">
        {this.state.cached
          ? <Portfolio />
          :
          <div>
            <div className="shooting-star" />
            <section id="welcome-msg">
              <h1>MOON.HOLDINGS</h1>
              <h4>A Futuratum Project</h4>
              <h2>Click the <span className="plus">+</span> button to create your portfolio.</h2>
              <p>{this.state.search}</p>
            </section>
            <section id="big-plus-button">
              <span className="plus">+</span>
              <h1>MOON.HOLDINGS</h1>
            </section>
            <section id="astronaut">
              <img src="static/astronaut.png" alt="astronaut" />
            </section>
          </div>
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

export const BoardJest = Board;

export default connect()(Board);
