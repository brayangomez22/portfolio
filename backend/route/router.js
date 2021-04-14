const { Router } = require('express');
const router = Router();
const { setHabilidad, getHabilidades } = require('../controller/controller');

router.post('/habilidad', setHabilidad);
router.get('/habilidades', getHabilidades);

module.exports = router;