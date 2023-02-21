const router = require('express').Router();
const { test } = require('../controllers/index');

// ========== REGISTER ENDPOINT ========== //
// test routes
router.get('/tests/', test.getAll);
router.get('/tests/:id', test.getById);
router.post('/tests/', test.store);
router.put('/tests/:id', test.update);
router.delete('/tests/:id', test.destroy);

module.exports = router;
