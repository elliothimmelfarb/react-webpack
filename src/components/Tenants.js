import React, { Component } from 'react';
import TenantsForm from './TenantsForm';
import TenantsList from './TenantsList';

import TenantStore from '../stores/TenantStore';
import TenantActions from '../actions/TenantActions';


function _getComponentState() {
  return {
    tenants: TenantStore.getAllTenants(),
  };
}


export default class Tenants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tenants: _getComponentState().tenants,
      adding: false,
    };

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    TenantActions.getAllTenants();
    TenantStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    TenantStore.stopListening(this._onChange);
  }

  _onChange() {
    console.log('7. In Tenants component, updating component state');
    this.setState(_getComponentState());
  }

  // deleteTenant(id) {
  //   this.setState({ tenants: this.state.tenants.filter(tenant => tenant.id !== id) });
  // }

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
          <TenantsForm /> :
          <TenantsList tenants={this.state.tenants} deleteTenant={this.deleteTenant} />
        }
      </div>
    );
  }
}
