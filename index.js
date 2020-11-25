const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const port = process.env.NODE_PORT || 4200;

const root = path.join(__dirname, 'dist', 'frontend');


app.get('*' ,function(req, res) {
  fs.stat(root + req.path, function(err){
    if(err){
        res.sendFile("index.html", { root });
    }else{
        res.sendFile(req.path, { root });
    }
  })
});

app.listen(port);
console.log('Listening on port '+ port);
