var fs = require('fs')
var path = require('path')

var githubRepos = require ('./github')
var dataPath = path.join(__dirname, 'github.json')

//module.exports is the object that's actually returned as the result of a require call.
module.exports = {
  getHomeData: getHomeData,
  getAuthor: getAuthor
//   getDetails: getDetails,
//   readData: readData
 }

function getHomeData () {
  //sync
  return githubRepos// returing an array synchronusly
}

function getAuthor () {
  return githubRepos.filter.Number(id)
}

function readData(callback) {
  fs.readFile (dataPath, 'utf8', callback)
}

function showContents (err, data) {
  if (err) {
    console.log('Error:', err.message)
  } else {
    var json = data
    var obj = JSON.parse(json)
    return obj//this was console.log to show that we have the content of the github.json
  }
}

 // readData(dataPath, showContents)
