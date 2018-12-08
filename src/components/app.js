import React, { Component } from 'react';
import Users from './users';
import Navigation from './navigation';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navigation />
        <Users />
        <Users />
        <Users />
        <Footer />
      </div>
    );
  }
}

export default App;