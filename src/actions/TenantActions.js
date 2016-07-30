import API from '../API/tenants';

const TenantActions = {
  addNewTenant(tenant) {
    console.log('2. in TenantActions, calling API')
    API.addNewTenant(tenant);
  },

  deleteTenant(_id) {
    API.deleteTenant(_id);
  },

  updateTenant(tenant) {
    API.updateTenant(tenant);
  },

  getAllTenants() {
    API.getAllTenants();
  },
};


export default TenantActions;
