const Sequelize = require('sequelize');


    //Conexão com banco de dados MySQL
    const sequelize = new Sequelize('postapp', 'root', 'Gabriel@1995', {
        host: 'localhost',
        dialect: 'mysql'
        });
module.exports = 
{
    Sequelize: Sequelize,
    sequelize: sequelize,
}