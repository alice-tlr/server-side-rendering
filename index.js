var server = require('./server')

// var PORT = process.env.PORT || 3000
//console.log("process.env:", process.env)
var PORT = 3000

server.listen(PORT, function () {
  console.log('Server is listening on port', PORT)//this all means thats express is ready, and listening on this port
})
