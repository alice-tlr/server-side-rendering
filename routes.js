var db = require('./db')


module.exports = {
  home: home,
  detail: details,
  author: author

}

function home (req, res) {
  var data = db.getHomeData()
  data.showList = req.query.showlist
  res.render('home', data)
}

function details (req, res) {
  var data = db.getDetails(req.params.name)//req.params will be populated with only the route values. That is, if you have a route like /users/:id , you can access the id either in req.params.id or req.params['id'] .
  res.render('details', data)
}

// function author (req, res) {
//   var data = db.getAuthor(req.params.name)
//   res.render('author', data)
// }
//what do i now need to do to returns the data for the author of a specific repo based on its ID.
