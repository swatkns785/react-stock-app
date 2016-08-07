import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return(
      <div className="jumbotron">
        <h1>The React/Redux Stock App</h1>
        <p>React, Redux, and React Router in es6 ultra-responsive web apps.</p>
      </div>
    );
  }
}

export default HomePage;
