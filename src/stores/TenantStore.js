import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import TenantConstants from '../constants/TenantConstants';

let _tenants = [];

class TenantStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case TenantConstants.RECEIVE_ONE_TENANT:
          console.log('6. In TenantStore, adding payload to tenant store array');
          _tenants.push(action.tenant);
          console.log('Emit CHANGE - State of _tenants has changed');
          this.emit('CHANGE');
          break;
        case TenantConstants.RECEIVE_ALL_TENANTS:
          _tenants = action.tenants;
          this.emit('CHANGE');
          break;
        default:
          console.error('Action not found');
      }
    });
  }

  getAllTenants() {
    console.log('8. In TenantStore, fetching current tenants list');
    return _tenants;
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }
}

export default new TenantStore();
