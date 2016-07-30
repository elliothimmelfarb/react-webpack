import React, { Component } from 'react';
import css from '../style.css';

export default class SingleProperty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      email: this.props.email,
      editing: false,
    };
  }

  render() {
    const { id, deleteProperty } = this.props;

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
            onClick={() => deleteProperty(id)}
          >
            Delete
          </button>
        </td>
        <td>
          <p className={css.test}>This should be red!</p>
        </td>
      </tr>
    );
  }
}
SingleProperty.propTypes = {
  name: React.PropTypes.string,
  email: React.PropTypes.string,
  id: React.PropTypes.string,
  deleteTenant: React.PropTypes.func,
};
