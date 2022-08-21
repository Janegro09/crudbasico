const { response } = require('express')

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'Get API - controlador'
    })
}

const usuariosPost = (req, res) => {

    const { name, email} = req.body;

    res.status(201).json({
        msg: 'Post API - controlador',
        name,
        email

    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'Patch API - controlador'
    })
}

const usuariosPut = (req, res) => {

    const { id } = req.params

    res.json({
        msg: 'Put API - controlador',
        id
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'Delete API - controlador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
};