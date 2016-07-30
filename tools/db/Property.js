import mongoose, { Schema } from 'mongoose';


const propertySchema = new Schema({
  name: String,
  Address: String,
});

const Property = mongoose.model('Property', propertySchema);

export default Property;
