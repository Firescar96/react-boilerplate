import React from 'react';
import Navbar from './Navbar.js';
require('../sass/home.scss');

class Home extends React.Component {
  render () {
    return (
      <div>
        <Navbar />

        <main>
          this is not a website
        </main>

      </div>
    );
  }
}

export default Home;
