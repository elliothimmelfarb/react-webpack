import AppDispatcher from '../AppDispatcher';
import TenantConstants from '../constants/TenantConstants';
import PropertyConstants from '../constants/PropertyConstants';

const ServerActions = {
  receiveOneTenant(tenant) {
    AppDispatcher.dispatch({
      tenant,
      actionType: TenantConstants.RECEIVE_ONE_TENANT,
    });
  },

  receiveAllTenants(tenants) {
    AppDispatcher.dispatch({
      tenants,
      actionType: TenantConstants.RECEIVE_ALL_TENANTS,
    });
  },
  receiveOneProperty(property) {
    AppDispatcher.dispatch({
      property,
      actionType: PropertyConstants.RECEIVE_ONE_PROPERTY,
    });
  },

  receiveAllProperties(properties) {
    AppDispatcher.dispatch({
      properties,
      actionType: PropertyConstants.RECEIVE_ALL_PROPERTIES,
    });
  },
};

export default ServerActions;
