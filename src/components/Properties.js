import React, { Component } from 'react';

import uuid from 'uuid';

import PropertiesForm from './PropertiesForm';
import PropertiesList from './PropertiesList';

export default class Properties extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: [],
      adding: false,
    };

    this.addProperty = this.addProperty.bind(this);
    this.deleteProperty = this.deleteProperty.bind(this);
  }

  addProperty(property) {
    const newProperty = Object.assign({}, property);
    newProperty.id = uuid();
    const properties = this.state.tenants.concat(newProperty);
    this.setState({ properties });
  }

  deleteProperty(id) {
    this.setState({ tenants: this.state.tenants.filter(tenant => tenant.id !== id) });
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ adding: !this.state.adding })}
        >
          {this.state.adding ? 'View Properties' : 'Add Properties'}
        </button>
        {this.state.adding ?
          <PropertiesForm addProperty={this.addProperty} /> :
          <PropertiesList properties={this.state.properties} deleteProperty={this.deleteProperty} />
        }
      </div>
    );
  }
}
