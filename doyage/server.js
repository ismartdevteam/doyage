var express = require('express');
var path = require('path');


var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var data = require('./routes/datas');

var app = express();
app.engine('html', require('hogan-express'));
app.enable('view cache');
//var connection  = require('express-myconnection'); 
var mysql = require('mysql');
app.set('port', process.env.PORT || 3000);

app.use(express.logger('dev'));


	app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
	app.use(bodyParser.json()); 		
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

    myConnection = require('express-myconnection'), // express-myconnection module
    dbOptions = {
      host: 'localhost',
      user: 'root',
      password: '',
      port: 3306,
      database: 'doyage_db'
    };

app.use(myConnection(mysql, dbOptions, 'request'));

app.get('/datas/missionData/:id/:lang',data.missionData); 
app.post('/datas/missionData',data.missionData); 
app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


