function PresidenteDAO(con) {
    this._connection = con;
}

PresidenteDAO.prototype.getPresidentes = function(callback) {
    this._connection.query("select * from presidentes order by nome", callback);
}

module.exports = () => {
    return PresidenteDAO;
}