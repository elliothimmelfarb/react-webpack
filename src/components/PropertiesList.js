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
      const singleProperty = Object.assign({}, property);
      singleProperty.deleteProperty = this.props.deleteProperty;
      return <SingleProperty key={singleProperty.id} {...singleProperty} />;
    });

    return (
      <div>
        <h1>Tenant List:</h1>
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
  deleteProperty: React.PropTypes.func,
};
