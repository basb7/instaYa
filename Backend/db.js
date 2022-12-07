const mongoose = require('mongoose');

const connectDB = ()=> {
    mongoose.connect('mongodb+srv://Brian:vUKJfpEBfbt8UiO0@cluster0.yjqjqdu.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (error) => {
        if(!error){
            console.log('Conectado a la base de datos Mongo')
        }else{
            console.log(`Error al conectarse, ${error}`)
        }
    }
    )
}

module.exports = {connectDB}