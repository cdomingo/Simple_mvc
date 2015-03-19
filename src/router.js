var controllers = require('./controllers');

var router = function(app) {

    app.get('/', controllers.main);
    app.get('/variables', controllers.getVariablePage);
    app.get('/extended', controllers.getExtended);
    app.get('/gallery', controllers.getGallery);
    app.post('/time', controllers.updateTime);
};

module.exports = router;