module.exports = (app) => {
    const orderController = require('../controllers/order');
    app.get('/api/order/all', orderController.getAll);
    app.post('/api/order/register', orderController.create);
    app.put('/api/order/update/:id', orderController.updateOrder);
    app.delete('/api/order/delete/:id', orderController.deleteOrder);
}