var controller = require('../app/controllers/controller')
module.exports = function (app) {
    app.get('/', controller.index)
    app.get('/loopSample', controller.loopSample)
    app.get('/usingTemplate', controller.usingTemplate)
}
