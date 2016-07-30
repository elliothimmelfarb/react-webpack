import { Router } from 'express';

const router = new Router();

import tenants from './tenants';
import properties from './properties';

router.use('/tenants', tenants);
router.use('/properties', properties);

export default router;
