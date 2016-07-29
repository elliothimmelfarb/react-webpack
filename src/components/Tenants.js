import React, { Component } from 'react';

import uuid from 'uuid';

import TenantsForm from './TenantsForm';
import TenantsList from './TenantsList';

export default class Tenants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tenants: [],
      adding: false,
    };

    this.addTenant = this.addTenant.bind(this);
    this.deleteTenant = this.deleteTenant.bind(this);
  }

  addTenant(tenant) {
    const newTenant = Object.assign({}, tenant);
    newTenant.id = uuid();
    const tenants = this.state.tenants.concat(newTenant);
    this.setState({ tenants });
  }

  deleteTenant(id) {
    this.setState({ tenants: this.state.tenants.filter(tenant => tenant.id !== id) });
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ adding: !this.state.adding })}
        >
          {this.state.adding ? 'View Tenants' : 'Add Tenants'}
        </button>
        {this.state.adding ?
          <TenantsForm addTenant={this.addTenant} /> :
          <TenantsList tenants={this.state.tenants} deleteTenant={this.deleteTenant} />
        }
      </div>
    );
  }
}
