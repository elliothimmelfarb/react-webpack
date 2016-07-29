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
    const properties = this.props.properties.map(tenant => {
      const singleTenant = Object.assign({}, tenant);
      singleTenant.deleteTenant = this.props.deleteTenant;
      return <SingleTenant key={singleTenant.id} {...singleTenant} />;
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
  deleteTenant: React.PropTypes.func,
};
