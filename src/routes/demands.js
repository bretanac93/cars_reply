let demandsController = require('../controllers/demands');

module.exports = app => {
    app.route('/demands')
        .get(demandsController.getAll)
        .post(demandsController.save)
    app.route('/demands/:id')
        .get(demandsController.getById)
};