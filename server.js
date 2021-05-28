const http = require("http");
const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.json("{'status':'online'}")

    //res.redirect("https://jsonplaceholder.typicode.com/users/1")
})

function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}
module.exports = keepAlive;
console.log(process.version);

const app = new express();

app.get('/', function(request, response){
    response.sendFile('/index.html');
});