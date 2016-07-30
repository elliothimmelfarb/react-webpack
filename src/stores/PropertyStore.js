import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import PropertyConstants from '../constants/PropertyConstants';

let _properties = [];

class PropertyStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case PropertyConstants.RECEIVE_ONE_PROPERTY:
          _properties.push(action.property);
          this.emit('CHANGE');
          break;
        case PropertyConstants.RECEIVE_ALL_PROPERTIES:
          _properties = action.properties;
          this.emit('CHANGE');
          break;
        default:
          console.error('Action not found');
      }
    });
  }

  getAllProperties() {
    return _properties;
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }
}

export default new PropertyStore();
