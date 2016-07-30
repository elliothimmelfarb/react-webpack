import AppDispatcher from '../AppDispatcher';
import TenantConstants from '../constants/TenantConstants';

const ServerActions = {
  receiveOneTenant(tenant) {
    console.log('5. In ServerActions, dispatching RECEIVE_ONE_TENANT action, with payload');
    console.log('** firing AppDispatcher.dispatch');
    AppDispatcher.dispatch({
      tenant,
      actionType: TenantConstants.RECEIVE_ONE_TENANT,
    });
  },

  receiveAllTenants(tenants) {
    console.log('here');
    AppDispatcher.dispatch({
      tenants,
      actionType: TenantConstants.RECEIVE_ALL_TENANTS,
    });
  },
};

export default ServerActions;
