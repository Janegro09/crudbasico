const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    name:{
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    lastname:{
        type: String,
        require: [true, 'El apellido es obligatorio']
    },
    legajo:{
        type: String,
        require: [true, 'El legajo es obligatorio']
    },
    DNI:{
        type: Number,
        require: [true, 'El DNI es obligatorio'],
        unique: true
    },
    fecha_cumpleaños:{
        type: Date,
        require:[true, 'La fecha de nacimiento es obligatoria']
    },
    rol:{
        type:String,
        require:[true, 'El Rol es obligatorio'],
        enum:['Gerente', 'Supervisor', 'Representante']
    },
    DNI_Jefe:{
        type: Number
    },
    gerencia:{
        type: String,
        require: [true, 'La gerencia es obligatoria']
    },
    sector:{
        type: String
    },
    estado: {
        type: Boolean,
        default: true
    },
    password:{
        type:String,
        default:"123456"
    },
})


module.exports = model( 'Usuario', UsuarioSchema );

