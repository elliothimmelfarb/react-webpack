import { Router } from 'express';
const router = new Router();

import Property from '../db/Property';

router.get('/', (req, res) => {
  Property.find({}, (err, dbProperties) => {
    return res.status(err ? 400 : 200).send(err || dbProperties);
  });
});

router.post('/', (req, res) => {
  Property.create(req.body, (err, dbProperty) => {
    return res.status(err ? 400 : 200).send(err || dbProperty);
  });
});

router.put('/', (req, res) => {
  console.log(req.body);
  Property.findByIdAndUpdate(req.body._id, req.body, 'new', (err, dbProperty) => {
    if (err) return res.status(400).send(err);
    return Property.find({}, (err, dbProperties) => {
      return res.status(err ? 400 : 200).send(err || dbProperties);
    });
  });
});

router.delete('/:id', (req, res) => {
  console.log('here');
  Property.findByIdAndRemove(req.params.id, (err) => {
    if (err) return res.status(400).send(err);
    return Property.find({}, (err, dbProperties) => {
      return res.status(err ? 400 : 200).send(err || dbProperties);
    });
  });
});

export default router;
