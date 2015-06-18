var http = require('http'),
  fs = require('fs'),
  url = require('url'),
  mime = require('mime'),
  markdown = require('markdown').markdown,
  path = require('path')

function readDir (path, response) {
  fs.readdir(path, function (err, files) {
    if (err) {
      response.writeHead(500, {'Content-Type': 'text/plain'})
      response.write(err + '\n')
      response.end()
      return
    }
    var resPage = '<!DOCTYPE html><html lang="en"><head></head><body>'
    files.forEach(function (ele) {
      resPage += '<p><a href=' + ele + '>' + ele + '</a></p>'
    })
    resPage += '</body></html>'
    response.writeHead(200)
    response.end(resPage)
  })
}

function readFile (file, response, request) {
  var mimetype = mime.lookup(url.parse(request.url).pathname)
  var ext = path.extname(url.parse(request.url).pathname)

  fs.readFile(file, function (err, file) {
    if (err) {
      response.writeHead(500, {'Content-Type': 'text/plain'})
      response.write(err + '\n')
      response.end()
      return
    }

    if (ext === '.md'){
      response.setHeader('Content-Type', 'text/html')
      response.writeHead(200)
      resPage = '<!DOCTYPE html><html lang="en"><head></head><body>' + markdown.toHTML(file.toString()) + '</body></html>'
      response.end(resPage)
    } else {
      response.setHeader('Content-Type', mimetype)
      response.writeHead(200)
      response.end(file)
    }

  })
}

function handleRequest (request, response) {
  var reqPath = '.' + url.parse(request.url).pathname
  console.log(reqPath)

  fs.exists(reqPath, function (exists) {
    if (!exists) {
      response.writeHead(404, {'Content-Type': 'text/html'})
      response.write('404 Not Found\n')
      return
    }
  })

  fs.stat(reqPath, function (err, stats) {
    if (!err) {
      if (stats.isDirectory()) {
        readDir(reqPath, response)
      } else {
        readFile(reqPath, response, request)
      }
    }
  })
}

var server = http.createServer(handleRequest)

server.listen(9001)
