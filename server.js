import http from 'http';
import fs from 'fs';
import path from 'path';

/*const server = http.createServer((req,res)=>{
    res.write("Hello and programming is fun"); //send message to server
    res.end(); //Finish request
})

server.listen(4000,()=>{
    console.log("Server is listening on port 4000");
})*/

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<h2> This is the homepage</h2>');
        res.write('<p>Welcome to the homepage</p>');
        res.end();
        
    }

    else if(req.url==='/about'){
        fs.readFile('public/index.html',(error,data)=>{
            if(error){
                res.write("404, An error has occured");
                res.end()
            } else {
                res.setHeader('Content-Type','text/html')
                res.end(data);
            }
        })    
    }

    else if (req.url === "/styles.css") {
    fs.readFile("public/styles.css", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - CSS file not found");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      }
    });
  } 

    else if (req.url==='/login'){
       res.setHeader( 'Content-Type','text/html');
       res.end('<h2>This is the login page</h2>');     
    }
})

server.listen(5000,()=>{
    console.log("Server is running on port 5000");
})