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

  toggleSquareEdit(edit = false, coin = {}) {
    this.setState({
      coin,
      edit,
      search: false
    });
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

    return (
      <div id="board">
        {portfolio.length > 0 ? <Portfolio coins={portfolio} /> : null}
        {edit ? this.renderSquareEdit(coin) : null}
        {search ? this.renderSearchModal() : null}
        { portfolio.length === 0 ? <Welcome /> : null }
        <PlusButton toggleSearch={this.handleSearchButton} />
        <Astronaut />
      </div>
    );
  }
}

const mapStateToProps = ({ coins }) => ({
  coins
});

export const BoardJest = Board;

export default connect(mapStateToProps, null)(Board);
