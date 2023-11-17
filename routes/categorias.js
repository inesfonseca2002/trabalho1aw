const categoriarouter = require('express').Router();
const controller = require('../../controllers/categoria');
//const authMiddleware = require('../..//data/middlewares/auth');

//use auth middleware
//studentRouter.use(authMiddleware);

//students CRUD
categoriarouter.get('/', controller.getAll); //read all
categoriarouter.get('/:number', controller.getById); //read one by his id (courses number)
categoriarouter.post('/create', controller.create); //create new courses
categoriarouter.put('/update', controller.update); //update courses
categoriarouter.delete('/delete/:number', controller.delete); //delete courses

module.exports = categoriarouter;