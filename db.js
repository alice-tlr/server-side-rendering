//module.exports is the object that's actually returned as the result of a require call.
module.exports = {
  getHomeData: getHomeData,
  getDetails: getDetails,
  getAuthor: getAuthor
}

var repos = require('./github.js')



function getHomeData () {
  return {
    title: 'Awesome title',
    headerText: 'Welcome to Awesome',
    repoList: repos
  }
}

function getDetails (name) {
  var results = repos.filter(function (repo) {
    return repo.name === name
  })
  return results[0]
}

function getAuthor (name) {
  var results = repos.filter(function (repo) {
    return repo.name === name
  })
  return results[0]
}
