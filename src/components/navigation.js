import React from 'react';

const Navigation = () => {
    return (
      <div className='navigation'>
        <img src={require('../images/logo/logo.png')}></img>
        <a href="index.html">Home</a>
        <a href="https://www.linkedin.com/in/cason-hawley-5ab480175/">LinkedIn</a>
        <a href="https://github.com/CasonHawley?tab=overview&from=2018-10-01&to=2018-10-31">GitHub</a>
        <a href="contact.html">Contact</a>
        
        <p>Username</p>
        
      </div>
    );
  }


export default Navigation;