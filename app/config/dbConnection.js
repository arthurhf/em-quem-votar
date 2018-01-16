let mysql = require('mysql');

var connMySQL = () => {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123',
        database: 'em_quem_votar'
    });
}

module.exports = () => {
    return connMySQL;
}

/**
 * O consign executa a função que retorna do módulo pré-definido. Logo, toda vez que eu subo meu servidor ele já ia abrir uma conexao com o banco
 * mesmo que eu não precise de uma. Então, tive de fazer um wrapper da função de conexao com o banco de dados. Eu peguei a minha função, coloquei em uma variável
 * e retornei apenas a variável, logo, eu vou executá-la apenas quando eu precisar nas páginas que eu precisar.
 */