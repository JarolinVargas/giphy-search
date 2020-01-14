import React from 'react';
import {motion} from 'framer-motion';
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
    this.showResults = this.showResults.bind(this);
    this.state = {
      showResults: false
    }
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
          <SearchContent showResults={this.state.showResults} showResultsHandle={this.showResults}/>
        </div>
      </motion.div>
    );
  }
}

export default App;
