const projetoRouter = require('express').Router();
const controller = require('../controllers/projeto');
//const authMiddleware = require('../..//data/middlewares/auth');

//use auth middleware
//studentRouter.use(authMiddleware);

//projeto CRUD
projetoRouter.get('/', controller.getAll); //read all
projetoRouter.get('/:idprojeto', controller.getById); //read one by his id (courses idprojeto)
projetoRouter.post('/create', controller.create); //create new courses
projetoRouter.put('/update', controller.update); //update courses
projetoRouter.delete('/delete/:idprojeto', controller.delete); //delete courses

module.exports = projetoRouter;