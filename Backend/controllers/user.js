const UserModel = require('../models/user');

exports.create = (req, res) => {
    if(req.body.name && req.body.identification && req.body.email && req.body.password && req.body.address && req.body.telephone){
        const user = new UserModel({
            name: req.body.name,
            identification: req.body.identification,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            telephone: req.body.telephone
        })

        user.save().then(user =>{
            return res.send(user)
        }).catch(err=> {
            res.status(500).send({
                message: err.message || 'Error al crear usuario'
            })
        })
    } else{
        return res.status(400).send({
            message: 'El usuario no puede estar vacio'
        }
        )
    }
}

exports.getAll = (req, res) => {
    UserModel.find()
    .then(users =>{
        return res.send(users)
    }).catch(err =>{
        res.status(500).send({
            message: err.message || 'Error al mostrar todos los usuarios'
        })
    })
}

exports.updateUser = (req, res) => {
    if(req.body.name && req.body.identification && req.body.email && req.body.address && req.body.telephone){
        const user = {
            name: req.body.name,
            identification: req.body.identification,
            email: req.body.email,
            address: req.body.address,
            telephone: req.body.telephone
        }

        UserModel.findByIdAndUpdate(req.params.id, user, {new: true})
        .then(user => {
            return res.send(user)
        }).catch(err =>{
            res.status(500).send({
                message: err.message || 'Error al actualizar usuario'
            })
        })

    }else{
        return res.status(400).send({
            message: 'Los campos no puede estar vacios'
        }
        )
    }
}

exports.deleteUser = (req, res) => {
    if(req.body.name && req.body.identification && req.body.email && req.body.address && req.body.telephone){

        UserModel.findByIdAndDelete(req.params.id, )
        .then(user => {
            return res.send({
                message: 'usuario eliminado',
                user
            })
        }).catch(err =>{
            res.status(500).send({
                message: err.message || 'Error al eliminar usuario'
            })
        })

    }else{
        return res.status(400).send({
            message: 'Los campos no puede estar vacios'
        }
        )
    }
}

exports.login = (req, res) => {
    if(req.body.email && req.body.password){
        const user = {
            email: req.body.email,
            password: req.body.password
        }
    
        UserModel.findOne(user)
        .then(user =>{
            if(user === null){
                return res.send({
                    message: 'Usuario no existe'
                })
            }
            return res.send(user)
        }).catch(err =>{
            res.status(500).send({
                message: err.message || 'Error al encontrar el usuario'
            })
        })
    } else{
        return res.status(400).send({
            message: 'Los campos no pueden estar vacios'
        })
    }
}

exports.recoverUser = (req, res) => {
    if(req.body.email){
        const user = {
            email: req.body.email
        }

        UserModel.findOne(user)
        .then(user =>{
            if(user === null){
                return res.send({
                    message: 'El usuario no existe'
                })
            }
            return res.send(user)
        }).catch(err =>{
            res.status(500).send({
                message: err.message || 'Error al buscar el usuario'
            })
        })
    } else{
        return res.status(400).send({
            message: 'Los campos no pueden estar vacios'
        })
    }
}