module.exports.presidente = (application, req, res) => {
    console.log(application.app.config.dbConnection.conMysql);
    let con = application.app.config.dbConnection();
    let presidenteDAO = new application.app.models.PresidenteDAO(con);

    presidenteDAO.getPresidentes((erro, result) => {
        console.log(result.length);
        res.render("presidentes", { result });    
    })
}
