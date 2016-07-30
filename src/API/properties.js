import $, { post, get } from 'jquery';
import ServerActions from '../actions/ServerActions';

const API = {
  addNewProperty(property) {
    console.log('3. in API, posting to server');
    post('/api/properties', property)
      .done(response => ServerActions.receiveOneProperty(response));
  },

  deleteProperty(_id) {
    $.ajax({
      url: `/api/properties/${_id}`,
      type: 'DELETE',
      success: (response) => ServerActions.receiveAllProperties(response),
    });
  },

  updateProperty(property) {
    $.ajax({
      url: '/api/properties/',
      data: property,
      type: 'PUT',
      success: (response) => ServerActions.receiveAllProperties(response),
    });
  },

  getAllProperties() {
    get('api/properties')
     .done(response => ServerActions.receiveAllProperties(response));
  },
};

export default API;
