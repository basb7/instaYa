const OrderModel = require('../models/order');

exports.create = (req, res) => {
    if(req.body.date && req.body.large && req.body.wide && req.body.tall && req.body.wight && req.body.cityShipping && req.body.addressShipping && req.body.nameDestination && req.body.identification && req.body.status){
        const order = new OrderModel({
            date: req.body.date,
            large: req.body.large,
            wide: req.body.wide,
            tall: req.body.tall,
            wight: req.body.wight,
            cityShipping: req.body.cityShipping,
            addressShipping: req.body.addressShipping,
            nameDestination: req.body.nameDestination,
            identification: req.body.identification,
            status: req.body.status
        })

        order.save().then(order =>{
            return res.send(order)
        }).catch(err=> {
            res.status(500).send({
                message: err.message || 'Error al crear la orden'
            })
        })
    } else{
        return res.status(400).send({
            message: 'Los campos no pueden estar vacios'
        }
        )
    }
}

exports.updateOrder = (req, res) => {
    if(req.body.date && req.body.large && req.body.wide && req.body.tall && req.body.wight && req.body.cityShipping && req.body.addressShipping && req.body.nameDestination && req.body.identification && req.body.status){
        const order = {
            date: req.body.date,
            large: req.body.large,
            wide: req.body.wide,
            tall: req.body.tall,
            wight: req.body.wight,
            cityShipping: req.body.cityShipping,
            addressShipping: req.body.addressShipping,
            nameDestination: req.body.nameDestination,
            identification: req.body.identification,
            status: req.body.status
        }

        OrderModel.findByIdAndUpdate(req.params.id, order, {new: true})
        .then(order =>{
            return res.send(order)
        }).catch(err =>{
            res.status(500).send({
                message: err.message || 'Error al actualizar la orden'
            })
        })
    } else {
        return res.status(400).send({
            message: 'Los campos no pueden estar vacios'
        })
    }
}

exports.getAll = (req, res) => {
    OrderModel.find()
    .then(order =>{
        return res.send(order)
    }).catch(err =>{
        res.status(500).send({
            message: err.message || 'Error al cargar las ordenes'
        })
    })
}

exports.deleteOrder = (req, res) => {
    if(req.body.date && req.body.large && req.body.wide && req.body.tall && req.body.wight && req.body.cityShipping && req.body.addressShipping && req.body.nameDestination && req.body.identification && req.body.status){

        OrderModel.findByIdAndDelete(req.params.id)
        .then(order =>{
            return res.send({
                message: 'Orden Eliminada',
                order
            })
        }).catch(err =>{
            res.status(500).send({
                message: err.message || 'Error al eliminar la orden'
            })
        })
    } else {
        return res.status(400).send({
            message: 'Los campos no pueden estar vacios'
        })
    }
}