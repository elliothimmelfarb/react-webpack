import API from '../API';

const TenantActions = {
  addNewTenant(tenant) {
    console.log('2. in TenantActions, calling API')
    API.addNewTenant(tenant);
  },

  deleteTenant(_id) {
    API.deleteTenant(_id);
  },

  getAllTenants() {
    API.getAllTenants();
  },
};


export default TenantActions;
