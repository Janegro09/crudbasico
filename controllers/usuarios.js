const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario')

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'Get API - controlador'
    })
}

const usuariosPost = async (req, res) => {

    const body = req.body;
    const usuario = new Usuario(body);

    // Verificar si el DNI existe

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(body.password, salt);

    // Guardar en la base de datos
    await usuario.save();

    res.status(201).json({
        msg: 'Post API - controlador',
        usuario
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