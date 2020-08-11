import React, {Component } from 'react';
import logo from './flickr.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi there. There will be Flickr images library here.
          </p>
          <a
            className="App-link"
            href="https://www.flickr.com/services/feeds/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find the API
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
