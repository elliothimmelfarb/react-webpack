import React, { Component } from 'react';
import PropertyActions from '../actions/PropertyActions'

export default class PropertiesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
    };
    this.onAddProperty = this.onAddProperty.bind(this);
  }

  onAddProperty(e) {
    e.preventDefault();

    const newProperty = Object.assign({}, this.state);

    PropertyActions.addNewProperty(newProperty);

    this.setState({ name: '', email: '' });
  }

  render() {
    return (
      <div>
        <h1>Add New Property</h1>
        <form onSubmit={this.onAddProperty}>
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
