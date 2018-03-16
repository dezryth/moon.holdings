import React from 'react';
import { connect } from 'react-redux';

// Containers
import Search from 'containers/SearchModal/searchModal';

// Components
import Welcome from 'components/Partials/Welcome/welcome';
import Astronaut from 'components/Partials/Astronaut/astronaut';
import PlusButton from 'components/Partials/PlusButton/plusButton';
import SquareEdit from 'components/Squares/squareEdit';
import Portfolio from 'components/Portfolio/portfolio';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: {},
      portfolio: [],
      edit: false,
      search: false
    };

    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.toggleSquareEdit = this.toggleSquareEdit.bind(this);
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

  toggleSquareEdit(open = false, coin = {}) {
    const edit = open;
    this.setState({
      coin,
      edit,
      search: false
    });
  }

  createSquareEdit(coin) {
    return (
      <div>
        <SquareEdit coin={coin} closeEdit={() => this.toggleSquareEdit(false)} />
        <div id="overlay" onClick={() => this.toggleSquareEdit(false)} />
      </div>
    );
  }

  createSearchModal() {
    return (
      <div>
        <Search
          handleClose={() => this.toggleSquareEdit(false)}
          openEdit={this.toggleSquareEdit}
        />
        <div id="overlay" onClick={this.handleSearchButton} />
      </div>
    );
  }

  render() {
    const {
      coin, edit, search, portfolio
    } = this.state;

    console.log('portfolio', portfolio);

    return (
      <div id="board">
        {portfolio.length > 0 ? <Portfolio coins={portfolio} /> : null}

        {edit ? this.createSquareEdit(coin) : null}

        {search ? this.createSearchModal() : null}

        <div>
          { portfolio.length === 0 ? <Welcome /> : null }
          <PlusButton toggleSearch={this.handleSearchButton} />
          <Astronaut />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ coins }) => ({
  coins
});

export const BoardJest = Board;

export default connect(mapStateToProps, null)(Board);
