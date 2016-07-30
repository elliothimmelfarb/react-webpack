import API from '../API/properties';

const PropertyActions = {
  addNewProperty(property) {
    API.addNewProperty(property);
  },

  deleteProperty(_id) {
    API.deleteProperty(_id);
  },

  updateProperty(property) {
    API.updateProperty(property);
  },

  getAllProperties() {
    API.getAllProperties();
  },
};


export default PropertyActions;
