const router = require('express').Router();
const projetoRouter = require('./projetos');
const categoriarouter = require('./categorias');
const uprouter = require('./utilizadoresprojetos');
const authRouter = require('./auth');


router.use('/projetos', projetoRouter);
router.use('/categorias', categoriarouter);
router.use('/auth', authRouter);
router.use('/up', uprouter);


module.exports = router;