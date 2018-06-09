import React from 'react';
import { connect } from 'react-redux';

// Actions
import { addCoins } from 'actions/coins';

// Containers
import Search from 'containers/SearchModal/searchModal';

// Components
import Welcome from 'components/Partials/Welcome/welcome';
import Astronaut from 'components/Partials/Astronaut/astronaut';
import PlusButton from 'components/Partials/PlusButton/plusButton';
import SquareEdit from 'components/Squares/squareEdit';
import Portfolio from 'components/Portfolio/portfolio';

const { localStorage } = window;

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coin: {},
      portfolio: [],
      edit: false,
      search: false
    };

    const { portfolio } = this.state;

    if (portfolio.length === 0) {
      const moonPortfolio = JSON.parse(localStorage.getItem('moonPortfolio'));

      if (moonPortfolio) {
        const savedPortfolio = Object.values(moonPortfolio);
        this.props.addCoins(savedPortfolio);
      }
    }

    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.toggleSquareEdit = this.toggleSquareEdit.bind(this);
    this.renderPortfolio = this.renderPortfolio.bind(this);
  }

  componentWillReceiveProps({ coins }) {
    this.setState({ portfolio: coins.portfolio });
  }

  handleSearchButton(e, bool = null) {
    if (bool) {
      this.setState({ search: false });
    } else {
      this.setState({ search: !this.state.search });
    }
  }

  toggleSquareEdit(edit = false, coin = {}) {
    // console.log('toggleSquareEdit', coin);
    this.setState({ coin, edit, search: false });
  }

  renderSquareEdit(coin) {
    return (
      <div id="square-edit-wrapper">
        <SquareEdit coin={coin} closeEdit={() => this.toggleSquareEdit(false)} />
        <div id="overlay" onClick={() => this.toggleSquareEdit(false)} />
      </div>
    );
  }

  renderSearchModal() {
    return (
      <div>
        <Search
          handleClose={() => this.toggleSquareEdit(false, {})}
          openEdit={this.toggleSquareEdit}
        />
        <div id="overlay" onClick={this.handleSearchButton} />
      </div>
    );
  }

  renderPortfolio(portfolio) {
    return (portfolio.length > 0 ?
      <Portfolio
        coins={portfolio}
        edit={this.toggleSquareEdit}
      />
      : null);
  }

  render() {
    const {
      coin, edit, search, portfolio
    } = this.state;

    const isTrue = portfolio.length > 0;

    return (
      <div id="board">
        { this.renderPortfolio(portfolio) }
        { edit && this.renderSquareEdit(coin) }
        { search && this.renderSearchModal() }
        { portfolio.length === 0 && <Welcome /> }
        <PlusButton toggleSearch={this.handleSearchButton} />
        <div className="coinbase-link">
          <a href="https://www.coinbase.com/join/51af71fbe2dfc50f3d000024">Buy Bitcoin with Coinbase</a>
        </div>
        <Astronaut logo={isTrue} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCoins: (...args) => dispatch(addCoins(...args))
});

const mapStateToProps = ({ coins }) => ({
  coins
});

export const BoardJest = Board;

export default connect(mapStateToProps, mapDispatchToProps)(Board);
