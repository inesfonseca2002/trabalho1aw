const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//return all utilizadoresprojetoss
exports.getAll = async (req, res) => {
    try {
        //read all from database
        const response = await prisma.utilizadoresprojetoss.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}


//return utilizadoresprojetos by his id (utilizadoresprojetos idproject)
exports.getByProjectId = async (req, res) => {
    //get utilizadoresprojetos id requested
    const id = req.params.idproject;
    try {
        //finds utilizadoresprojetos by his id (idproject)
        const response = await prisma.utilizadoresprojetos.findMany({
            where: {
                idproject: id,
            },
        })
        //return utilizadoresprojetos
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}
//return utilizadoresprojetos by his id (utilizadoresprojetos idproject)
exports.getByUserId = async (req, res) => {
    //get utilizadoresprojetos id requested
    const id = req.params.idUser;
    try {
        //finds utilizadoresprojetos by his id (idUser)
        const response = await prisma.utilizadoresprojetos.findMany({
            where: {
                idUser: id,
            },
        })
        //return utilizadoresprojetos
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

//creates utilizadoresprojetos
exports.create = async (req, res) => {
    //get requested utilizadoresprojetos properties
    const { idproject } = req.body;
   
    try { 
        //creates new utilizadoresprojetos
        console.log("aqui")
        const utilizadoresprojetos = await prisma.utilizadoresprojetos.create({data: {
            
            idproject: idproject,
               
            },
        })
        //return utilizadoresprojetos created
        res.status(201).json(utilizadoresprojetos)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


//delete utilizadoresprojetos by his id (utilizadoresprojetos idproject)
exports.delete = async (req, res) => {
    //get utilizadoresprojetos idproject requested
    const idproject = req.params.idproject;
    try {
        //delete utilizadoresprojetos
        await prisma.utilizadoresprojetoss.delete({
            where: {
                id

            },
        })
        //just return ok
        res.status(200).send("ok");
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
