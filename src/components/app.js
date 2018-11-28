import React, { Component } from 'react';

import Welcome from './welcome';
import Navigation from './navigation';
import About from './about';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navigation />
        <Welcome />
        <About />
      </div>
    );
  }
}

export default App;