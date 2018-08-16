import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import  '../reducers';

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      onRequestRobots: () => dispatch(requestRobots())
    }
}


class App extends Component {
  
  componentDidMount() {
    this.props.onRequestRobots();
  }
  // This function changes the state according to the searchBox

  

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    })
    if (isPending) {
      return <h1 className='tc'>Loading </h1>
    }
    else {
      return (
        <div className='tc' >
          <h1 className='f1' > MonsterFriends </h1>
          <SearchBox searchChange={onSearchChange} />
          <hr />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(App);
