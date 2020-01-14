import React from 'react';
import {motion} from 'framer-motion';
import axios from 'axios';
import './App.scss';
import Logo from './components/Logo';
import SearchContent from './components/SearchContent.js';

// #search-layout animation properties
const variants = {
  normal: {height: 180},
  showResults: {height: '100vh'}
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.showResults = this.showResults.bind(this);
    this.state = {
      searchResults: [],
      showResults: false
    }
  }

  search(searchTerm) {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=ipEefKND6Vj4oWvrgc5ZR9Tf9ELXuDma&q=${searchTerm}`)
    .then((response) => {
      this.setState({
        searchResults: response.data.data
      })
    }).catch(function(error) {
      console.log(error);
    })
  }

  showResults() {
    this.setState({
      showResults: true
    })
  }
  
  render() {
    return (
      <motion.div id="search-layout" animate={!this.state.showResults ? 'normal' : 'showResults'} variants={variants}>
        <div id="header">
          <Logo showResults={this.state.showResults}/>
        </div>
        <div id="content">
          <SearchContent search={this.search} searchResults={this.state.searchResults} showResults={this.state.showResults} showResultsHandle={this.showResults}/>
        </div>
      </motion.div>
    );
  }
}

export default App;
