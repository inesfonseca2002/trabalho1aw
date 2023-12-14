const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//return all categoriass
exports.getAll = async (req, res) => {
    try {
        //read all from database
        const response = await prisma.categorias.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//return categorias by his id (categorias idcateg)
exports.getById = async (req, res) => {
    //get categorias id requested
    const id = req.params.idcateg;
    try {
        //finds categorias by his id (idcateg)
        const response = await prisma.categorias.findUnique({
            where: {
                idcateg: Number(id),
            },
        })
        //return categorias
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

//creates categorias
exports.create = async (req, res) => {
    //get requested categorias properties
    const {  nomecat } = req.body;
    try {
        //creates new categorias
        const categorias = await prisma.categorias.create({
            data: {
                nomecat: nomecat,

            },
        })
        //return categorias created
        res.status(201).json(categorias)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//updates categorias
exports.update = async (req, res) => {
    const { idcateg, nomecat } = req.body;

    try {
        //find categorias to update their data
        const categorias = await prisma.categorias.update({
            where: {
                idcateg: idcateg,
            },
            data: {
                nomecat: nomecat
            },
        })
        //return categorias updated
        res.status(200).json(categorias)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//delete categorias by his id (categorias idcateg)
exports.delete = async (req, res) => {
    //get categorias idcateg requested
    const idcateg = req.params.idcateg;
    try {
        //delete categorias
        await prisma.categorias.delete({
            where: {
                idcateg: Number(idcateg),
            },
        })
        //just return ok
        res.status(200).send("ok");
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}