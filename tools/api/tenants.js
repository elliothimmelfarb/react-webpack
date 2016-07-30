import { Router } from 'express';
const router = new Router();

import Tenant from '../db/Tenant';

router.get('/', (req, res) => {
  Tenant.find({}, (err, dbTenants) => {
    return res.status(err ? 400 : 200).send(err || dbTenants);
  });
});

router.post('/', (req, res) => {
  Tenant.create(req.body, (err, dbTenant) => {
    return res.status(err ? 400 : 200).send(err || dbTenant);
  });
});

router.put('/', (req, res) => {
  console.log('here');
  Tenant.findByIdAndUpdate(req.body._id, req.body, 'new', (err, dbTenant) => {
    if (err) return res.status(400).send(err);
    return Tenant.find({}, (err, dbTenants) => {
      return res.status(err ? 400 : 200).send(err || dbTenants);
    });
  });
});

router.delete('/:id', (req, res) => {
  console.log('here');
  Tenant.findByIdAndRemove(req.params.id, (err) => {
    if (err) return res.status(400).send(err);
    return Tenant.find({}, (err, dbTenants) => {
      return res.status(err ? 400 : 200).send(err || dbTenants);
    });
  });
});

export default router;
