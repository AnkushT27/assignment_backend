To Run the app 

1. Run the command npm install --save
2. Go to util/db.js and add the database configuration 

```
const Sequelize = require('sequelize').Sequelize;

const sql = new Sequelize('<DB-NAME>','<USERNAME>','<PASSWORD>',{
    dialect:'<DB-DIALECT>',
    host:'<DB-HOST-IP>'
})

module.exports = sql

```

3. Run the command node app.js to start the server at localhost:3000
4. Port configuration can be changed in the app.js file