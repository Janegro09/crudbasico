const mongoose = require('mongoose')


const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Base de datos online')

    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de levantar o iniciar la base de datos');
        
    }
    
    
}

//Puedo manejar la conexiones de produccion, desarrollo, uat
module.exports = {
    dbConnection
}