import $, { post, get } from 'jquery';
import ServerActions from './actions/ServerActions';

const API = {
  addNewTenant(tenant) {
    console.log('3. in API, posting to server');
    post('/api/tenants', tenant)
      .done(response => { ServerActions.receiveOneTenant(response) });
  },

  deleteTenant(_id) {
    $.ajax({
      url: `/api/tenants/${_id}`,
      type: 'DELETE',
      success: (response) => {
        ServerActions.receiveAllTenants(response);
      },
    });
  },

  getAllTenants() {
    get('api/tenants')
     .done(response => { ServerActions.receiveAllTenants(response) });
  },
};

export default API;
