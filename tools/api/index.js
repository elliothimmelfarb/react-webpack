import { Router } from 'express';

const router = new Router();

import tenants from './tenants';

router.use('/tenants', tenants);

export default router;
