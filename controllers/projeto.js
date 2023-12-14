const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//return all projeto
exports.getAll = async (req, res) => {
    try {
        //read all from database
        const response = await prisma.projeto.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//return projeto by his id (projeto idprojeto)
exports.getById = async (req, res) => {
    //get projeto id requested
    const id = req.params.idprojeto;
    try {
        //finds projeto by his id (idprojeto)
        const response = await prisma.projeto.findUnique({
            where: {
                idprojeto: Number(id),
            },
        })
        //return projeto
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}
//creates categorias
exports.create = async (req, res) => {
    //get requested categorias properties
    const { id, nome, notas, estado, datainicio, datafim, idcat } = req.body;

    try {
        //creates new categorias
        const projeto = await prisma.projeto.create({
            data: {
                nome: nome,
                notas: notas,
                estado: estado,
                datainicio: datainicio,
                datafim: datafim,
                idcat: idcat

            },
        })
        //return categorias created
        res.status(201).json(projeto)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//updates projeto
exports.update = async (req, res) => {
    const { idprojeto, nome, notas, estado, datainicio, datafim, idcat} = req.body;

    try {
        //find projeto to update their data
        const projeto = await prisma.projeto.update({
            where: {
                idprojeto: Number(idprojeto),
            },
            data: {
                nome: nome,
                notas: notas,
                estado: estado,
                datainicio: datainicio,
                datafim: datafim,
                idcat: idcat

            },
        })
        //return projeto updated
        res.status(200).json(projeto)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//delete projeto by his id (projeto idprojeto)
exports.delete = async (req, res) => {
    //get projeto idprojeto requested
    const idprojeto = req.params.idprojeto;
    try {
        //delete projeto
        await prisma.projeto.delete({
            where: {
                idprojeto: Number (idprojeto),
            },
        })
        //just return ok
        res.status(200).send("ok");
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}