import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }
  // This function changes the state according to the searchBox

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }


  render() {

    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1 className='tc'>Loading </h1>
    }
    else {
      return (
        <div className='tc' >
          <h1 className='f1' > MonsterFriends </h1>
          <SearchBox searchChange={this.onSearchChange} />
          <hr />
          <Scroll>
          <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }

    }
    


export default App;
