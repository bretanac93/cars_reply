let usersController = require('../controllers/users');

module.exports = app => {
    app.route('/users')
        .get(usersController.getAll)
        .post(usersController.save)
    app.route('/users/:id')
        .get(usersController.getById)
        .delete(usersController.delete)
};