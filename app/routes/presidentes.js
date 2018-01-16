module.exports = (application) => {
    application.post('/presidentes', (req, res) => {
        application.app.controllers.presidentes.presidente(application, req, res);
    })

    application.get('/presidentes', (req, res) => {
        application.app.controllers.presidentes.presidente(application, req, res);
    })
}