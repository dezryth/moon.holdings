import React from 'react';
import { connect } from 'react-redux';

import Search from 'containers/SearchModal/searchModal';

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
      // cached: false,
      search: false
    };

    // this.closeSearch = this.closeSearch.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  // closeSearch() {
  //   this.setState({ search: false });
  // }

  handleSearchButton(e, bool = null) {
    if (bool) {
      this.setState({ search: false });
    } else {
      this.setState({ search: !this.state.search });
    }
  }

  /*
    TODO
    Board is the main container which contains Search, selected Coins will be
    added to Redux state and then passed down into Portfolio.
   */
  render() {
    return (
      <div id="board">
        <div>
          <section id="welcome-msg">
            <h1>MOON.HOLDINGS</h1>
            <h4>A Futuratum Project</h4>
            <h2>Click the <span className="plus">+</span> button to create your portfolio.</h2>
          </section>

          {
            this.state.search
            ? <Search handleClose={this.handleSearchButton} />
            : null
          }

          <button
            id="big-plus-button"
            tabIndex={0}
            onClick={this.handleSearchButton}
          >
            <span className="plus">+</span>
            <h1>MOON.HOLDINGS</h1>
          </button>

          <section id="astronaut">
            <img src="static/astronaut.png" alt="astronaut" />
          </section>
        </div>
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
