const bcrypt = require('bcryptjs/dist/bcrypt');
const authenticateUtil = require('../../utils/authenticate.js');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.utilizadores.findUnique({
            where: {
                email: email,
            },
        })

        if (user) {
            var passwordIsValid = bcrypt.compareSync(
                password,
                user.password
            );

            if (passwordIsValid) {
                const accessToken = authenticateUtil.generateAccessToken({ id: user.id, name: user.name, isAdmin : user.isAdmin });
                res.status(200).json({ name: user.name, token: accessToken });
            }
        }

    } catch (error) {
        res.status(401).json({ msg: error.message })
    }
}


exports.signup = async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body;

        await prisma.utilizadores.create({
            data: {
                email: email,
                name: name,
                password: bcrypt.hashSync(password, 8),
                isAdmin: isAdmin
            },
        })

        return this.signin(req, res);
    } catch (error) {
        res.status(401).json({ msg: error.message })
    }
}
//updates utilizadores
exports.update = async (req, res) => {
    const { idutil, name, email} = req.body;

    try {
        //find utilizadores to update their data
        const utilizadores = await prisma.utilizadores.update({
            where: {
                idutil: idutil,
            },
            data: {
                name: name,
                email: email

            },
        })
        //return utilizadores updated
        res.status(200).json(utilizadores)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
