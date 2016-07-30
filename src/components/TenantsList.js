import React, { Component } from 'react';

import SingleTenant from './SingleTenant';

export default class TenantsList extends Component {
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
    const tenants = this.props.tenants.map(tenant => {
      const singleTenant = Object.assign({}, tenant);
      return <SingleTenant key={singleTenant._id} {...singleTenant} />;
    });

    return (
      <div>
        <h1>Tenant List:</h1>
        <table className="table">
          <tbody>
            {tenants}
          </tbody>
        </table>
      </div>
    );
  }
}
TenantsList.propTypes = {
  tenants: React.PropTypes.array,
};
