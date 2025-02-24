var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    console.log(q)
    var filename = "."+q.pathname;
    console.log(filename)
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'content-type':'text/html'});
            return res.end("404 Not FOund");
        }
        res.writeHead(200,{"content-type":"text/html"});
        console.log(data)
        res.write(data);
        return res.end();
    })
}).listen(8080)