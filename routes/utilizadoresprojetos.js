const upRouter = require('express').Router();
const controller = require('../controllers/utilizadoresprojetos');
//const authMiddleware = require('../..//data/middlewares/auth');

//use auth middleware
//studentRouter.use(authMiddleware);

//projeto CRUD
upRouter.get('/user/:iduser', controller.getByUserId); //read one by his id (courses idprojeto)
upRouter.get('/project/:idprojeto', controller.getByProjectId); //read one by his id (courses idprojeto)
upRouter.post('/create', controller.create); //create new courses
upRouter.delete('/delete/:idprojeto', controller.delete); //delete courses

module.exports = upRouter;