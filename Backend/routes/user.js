module.exports = (app) => {
    const userController = require('../controllers/user');
    app.get('/api/user/all', userController.getAll);
    app.post('/api/user/register', userController.create);
    app.post('/api/user/login', userController.login);
    app.post('/api/user/recover', userController.recoverUser);
    app.put('/api/user/update/:id',userController.updateUser);
    app.delete('/api/user/delete/:id', userController.deleteUser);
}