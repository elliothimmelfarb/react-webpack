import React, { Component } from 'react';

import PropertyActions from '../actions/PropertyActions';

export default class SingleProperty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      email: this.props.email,
      editing: false,
    };
  }

  onEditToggle(id) {
    if (this.state.editing) {
      const updatedProperty = {
        _id: id,
        name: this.state.name,
        email: this.state.email,
      };
      PropertyActions.updateProperty(updatedProperty);
    }
    this.setState({ editing: !this.state.editing });
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
            onClick={() => this.onEditToggle(_id)}
          >
          {!this.state.editing ? 'Edit' : 'Confirm'}
          </button>
        </td>
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => PropertyActions.deleteProperty(_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
SingleProperty.propTypes = {
  name: React.PropTypes.string,
  email: React.PropTypes.string,
  _id: React.PropTypes.string,
  deleteTenant: React.PropTypes.func,
};
