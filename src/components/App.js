import React, { Component } from 'react';
import Welcome from './Welcome';
import NavBar from './NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}
// App.propTypes = {
//   children: React.PropTypes.func,
// };
