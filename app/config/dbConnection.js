let mysql = require('mysql');
let con = () => {
    console.log("Conexão feita");
    return  mysql.createConnection({
        host:'localhost',
        user:'root',
        password: '123',
        database: 'em_quem_votar'
    });
}

module.exports = () => { return con }