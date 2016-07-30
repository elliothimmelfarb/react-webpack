import React, { Component } from 'react';

import TenantActions from '../actions/TenantActions';

export default class SingleTenant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      email: this.props.email,
      editing: false,
    };
  }

  onDeleteTenant(id) {
    TenantActions.deleteTenant(id);
  }

  render() {
    const { _id } = this.props;

    return (
      <tr>
        <td>
          {this.state.editing ?
            <input
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            /> :
             this.state.name}
        </td>
        <td>
          {this.state.editing ?
            <input
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            /> :
             this.state.email}
        </td>
        <td>
          <button
            className="btn btn-sm btn-warning"
            onClick={() => this.setState({ editing: !this.state.editing })}
          >
          {!this.state.editing ? 'Edit' : 'Confirm'}
          </button>
        </td>
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => this.onDeleteTenant(_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
SingleTenant.propTypes = {
  name: React.PropTypes.string,
  email: React.PropTypes.string,
  _id: React.PropTypes.string,
  deleteTenant: React.PropTypes.func,
};
