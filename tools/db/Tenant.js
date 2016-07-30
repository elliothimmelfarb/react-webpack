import mongoose, { Schema } from 'mongoose';


const tenantSchema = new Schema({
  name: String,
  email: String,
});

const Tenant = mongoose.model('Tenant', tenantSchema);

export default Tenant;
