const Sequelize = require('sequelize').Sequelize;

const sql = new Sequelize('<DB-NAME>','<USERNAME>','<PASSWORD>',{
    dialect:'<DB-DIALECT>',
    host:'<DB-HOST-IP>'
})

module.exports = sql