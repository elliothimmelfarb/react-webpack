import React, { Component } from 'react';
import TenantActions from '../actions/TenantActions'

export default class TenantsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
    };
    this.onAddTenant = this.onAddTenant.bind(this);
  }

  onAddTenant(e) {
    e.preventDefault();

    console.log('1. On submit fired in TenantsForm from onAddTenant' + this.state);
    console.log('** firing TenantActions.addNewTenant(this.state);');

    const newTenant = Object.assign({}, this.state);

    TenantActions.addNewTenant(newTenant);

    this.setState({ name: '', email: '' });
  }

  render() {
    return (
      <div>
        <h1>Add New Tenant</h1>
        <form onSubmit={this.onAddTenant}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            {/* FIXME: set input type to email */}
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              placeholder="Email"
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}
