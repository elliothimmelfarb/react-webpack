import React, { Component } from 'react';
import PropertiesForm from './PropertiesForm';
import PropertiesList from './PropertiesList';

import PropertyStore from '../stores/PropertyStore';
import PropertyActions from '../actions/PropertyActions';


function _getComponentState() {
  return {
    properties: PropertyStore.getAllProperties(),
  };
}


export default class Properties extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: _getComponentState().properties,
      adding: false,
    };

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    PropertyActions.getAllProperties();
    PropertyStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    PropertyStore.stopListening(this._onChange);
  }

  _onChange() {
    console.log('7. In Properties component, updating component state');
    this.setState(_getComponentState());
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
          <PropertiesForm /> :
          <PropertiesList properties={this.state.properties} deleteProperty={this.deleteProperty} />
        }
      </div>
    );
  }
}
