import React from 'react';
import { connect } from 'react-redux';

// Actions
import { addCoins } from 'actions/coins';

// Containers
import Search from 'containers/SearchModal/searchModal';
import Chart from 'containers/Chart/chart';

// Components
import Welcome from 'components/Partials/Welcome/welcome';
import Astronaut from 'components/Partials/Astronaut/astronaut';
import PlusButton from 'components/Partials/PlusButton/plusButton';
import SquareEdit from 'components/Squares/squareEdit';
import Portfolio from 'components/Portfolio/portfolio';
import Loading from 'components/Partials/Loading/loading';
import Affiliates from 'components/Partials/Affiliates/affiliates';

const { localStorage } = window;

let moonPortfolio;

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coin: {},
      portfolio: [],
      edit: false,
      search: false,
      loading: true
    };

    const { portfolio } = this.state;

    if (portfolio.length === 0) {
      moonPortfolio = JSON.parse(localStorage.getItem('moonPortfolio'));

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
    this.setState({
      portfolio: coins.portfolio,
      loading: false
    });
  }

  handleSearchButton(e, bool = null) {
    if (bool) {
      this.setState({ search: false });
    } else {
      this.setState({ search: !this.state.search });
    }
  }

  toggleSquareEdit(edit = false, coin = {}) {
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
      coin, edit, loading, search, portfolio
    } = this.state;

    const isTrue = portfolio.length > 0;

    return (
      <div id="board">
        <Chart />
        { this.renderPortfolio(portfolio) }
        { edit && this.renderSquareEdit(coin) }
        { search && this.renderSearchModal() }
        { loading && moonPortfolio && <Loading /> }
        { portfolio.length === 0 && <Welcome /> }
        <PlusButton toggleSearch={this.handleSearchButton} />
        <Affiliates />
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
