import React, { Component } from 'react';

import SingleProperty from './SingleProperty';

export default class PropertiesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: {
        id: 'uuid',
        text: '',
      },
    };
  }

  render() {
    const properties = this.props.properties.map(property => {
      const singleProperties = Object.assign({}, property);
      return <SingleProperty key={singleProperties._id} {...singleProperties} />;
    });

    return (
      <div>
        <h1>Properties List:</h1>
        <table className="table">
          <tbody>
            {properties}
          </tbody>
        </table>
      </div>
    );
  }
}
PropertiesList.propTypes = {
  properties: React.PropTypes.array,
};
