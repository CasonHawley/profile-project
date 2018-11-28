import React, { Component } from 'react';

import Welcome from './welcome';
import Navigation from './navigation';
import About from './about';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navigation />
        <Welcome />
        { About() }
        <Footer />
      </div>
    );
  }
}

export default App;