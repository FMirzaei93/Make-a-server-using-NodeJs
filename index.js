

/* var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Je suis un serveur node.js');
});
server.listen(8080, 'localhost');

 */


var express = require('express');
 var app = express();


/*app.get('/*', function(req, res) {
 res.send('Je suis un serveur Express');
}); */



app.use('/dev', express.static(__dirname + '/dev'));


app.get('/', function(req, res) {
 res.sendFile(__dirname + '/dev/index.html');
});



/* app.get('/tasks', function(req, res) {
 res.sendFile(__dirname + '/dev/tasks.html');
}); */ 
app.get('/tasks', function(req, res) {
 res.render('tasks.ejs');
});


app.get('/tasks/:numoftasks', function(req, res) {
 res.render('tasks.ejs', {tasks: req.params.numoftasks});
});


app.use(function(req, res, next) {
 res.status(404).send('Ne tentez pas de vous défiler !');;
});


app.use('../dev/js/jquery', express.static(__dirname + '/node_modules/jquery/dist'));



app.listen(8888, function () {
 console.log('Serveur démarré au port : 8888');
});











/* ---------------------- Explanation of express ------------------ */

/* Express is another layer on top of http means Express internally uses http. In other words, it is a wrapper over http. 
Tasks like, parsing the body of the request, parsing cookies are very much required for every web-application. Express provides them by default. 
See, http module provides various tools (functions) to do things for networking like making a server ,cilent etc.
where as express is build upon the top of http module with some more usable and better functionalities like easy ways to handle routes ,
easy ways to make firmware, servers, client etc.
Express is a web server framework for building applications. it's a 'car' vs an 'engine'. HTTP is the engine. It facilitates the connections and requests made much like the way that the engine in a car facilitates movement. 
Express, like the car surrounding the engine, is what makes the engine useful.*/

/* The express.js library provides for retrieving data from the URL and converting it into a variable in JSON format. */
