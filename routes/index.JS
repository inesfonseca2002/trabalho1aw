const router = require('express').Router();
const studentRouter = require('./students');
const authRouter = require('./auth');


router.use('/students', studentRouter);
router.use('/categorias', categoriarouter);
router.use('/auth', authRouter);


module.exports = router;