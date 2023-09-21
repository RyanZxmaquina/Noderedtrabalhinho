var http = require('http');
var dt = require('./cadastro');
var dt1 = require('./Consulta');
var dt2 = require('./login');
var dt3 = require('./home');
var dt4 = require('./sobre');



http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("cadastro" + dt.myDateTime() + "\n"+ "Consulta" + dt1.myDateTime1() + "login" + dt2.myDateTime2() + "sobre" + dt3.myDateTime3() + "home" + dt4.myDateTime4());
  res.end();
}).listen(5005);
