var express = require('express')
var app = express()
app.use('/assets', express.static('assets'));
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('home');
})

var server = app.listen(1013, function() {
    console.log('listen port: 1013')
})