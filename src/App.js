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
    this.state = {
      searchResults: [],
      searchStatus: null,
      showResults: false
    }
  }

  // perform api request
  search = (searchTerm) => {
    this.setState({searchResults: []}); // clear previous search results
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=ipEefKND6Vj4oWvrgc5ZR9Tf9ELXuDma`, {
      params: {
        q: encodeURI(searchTerm),
        limit: 30,
        offset: 0
      }
    }).then((response) => {
      this.setState({
        searchResults: response.data.data,
        searchStatus: response.data.data.length === 0 ? 'No Results' : null,
        showResults: true
      })
    }).catch((error) => {
      this.setState({
        searchStatus: error.toString(),
        showResults: true
      })
    })
  }
  
  render() {
    return (
      <motion.div className="search-layout" animate={!this.state.showResults ? 'normal' : 'showResults'} variants={variants}>
        <div className="header">
          <Logo showResults={this.state.showResults}/>
        </div>
        <div className="content">
          <SearchContent search={this.search} searchResults={this.state.searchResults} showResults={this.state.showResults} searchStatus={this.state.searchStatus}/>
        </div>
      </motion.div>
    );
  }
}

export default App;
