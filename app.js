var express = require('express');
var    app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', '/views');
app.set('view engine', 'hbs');


app.use(express.static(__dirname + '/pages/'));
console.log(__dirname + '/pages/');

//abrir o servidor
var server = app.listen(app.get('port'), function () {
  console.log('Servidor aberto em http://localhost:' + server.address().port);
});