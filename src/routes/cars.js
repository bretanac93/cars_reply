let carsController = require('../controllers/cars');

module.exports = app => {
    app.route('/cars')
        .get(carsController.getAll)
        .post(carsController.save)
    app.route('/cars/:id')
        .get(carsController.getById)
};