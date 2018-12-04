const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio1",
  password: "servicio1.123",
  database: "API"
});

connection.connect();


app.delete('/rest/archivos', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `Archivos` WHERE `Id_Archivo`=?', [req.body.Id_Archivo], function (error, results, fields) {
    if (error) throw error;
    res.end('Record has been deleted!');
  });
});

app.listen(3021, function () {
 console.log('Node app is running on port 3021');

});