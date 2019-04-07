
//MYSQL    database : 'locationsdata',

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
  
    debug : false,
    multipleStatements : true 
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
