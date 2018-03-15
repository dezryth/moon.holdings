import React from 'react';
import { connect } from 'react-redux';

// Containers
import Search from 'containers/SearchModal/searchModal';

// Components
import Welcome from 'components/Partials/Welcome/welcome';
import Astronaut from 'components/Partials/Astronaut/astronaut';
import PlusButton from 'components/Partials/PlusButton/plusButton';
import SquareEdit from 'components/Squares/squareEdit';

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
      coin: {},
      edit: false,
      search: false
    };

    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.openSquareEdit = this.openSquareEdit.bind(this);
    this.closeSquareEdit = this.closeSquareEdit.bind(this);
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

  openSquareEdit(coin) {
    this.setState({
      coin,
      edit: true,
      search: false
    });
  }

  closeSquareEdit() {
    this.setState({
      coin: {},
      edit: false,
      search: false
    });
  }

  /*
    TODO
    Board is the main container which contains Search, selected Coins will be
    added to Redux state and then passed down into Portfolio.
   */
  render() {
    const { coin } = this.state;
    return (
      <div id="board">
        {
          this.state.edit
          ?
            <div>
              <SquareEdit coin={coin} closeEdit={this.closeSquareEdit} />
              <div id="overlay" onClick={this.closeSquareEdit} />
            </div>
          : null
        }

        {
          this.state.search
          ?
            <div>
              <Search
                handleClose={this.closeSquareEdit}
                openEdit={this.openSquareEdit}
              />
              <div id="overlay" onClick={this.handleSearchButton} />
            </div>
          : null
        }
        <div>
          <Welcome />
          <PlusButton toggleSearch={this.handleSearchButton} />
          <Astronaut />
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
