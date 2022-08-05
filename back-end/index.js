const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var database=require('./database');
const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get('/', function(req, res) {
	res.send('Hello from server')
})
var someVar = [];
app.post('/singin',function(req,res){
  var name=req.body.name
  var pass=req.body.pass
  var query=`SELECT * FROM user where name="${name}" and password="${pass}"`;
  database.query(query,function(err, rows){
    if(err) {
      throw err;
    } else {
      setValue(rows);
    }
  });
  res.send(someVar[0])
})
function setValue(value) {
    someVar = value;
  }
  // app.get('/singin',function(req,res){
  //   res.send(someVar[0].name)
  // });
app.post('/enroll', function(req, res) {
  var name=req.body.name
  var pass=req.body.pass
  var query=`INSERT INTO user VALUES(4,"${name}","${pass}")`;
  database.query(query,function(error,data){
    if(error){
      throw error
    }
    else{
      res.redirect("/enroll")
    }
  });
})
app.post("/addproducts",function(req,res){
  var pid=req.body.b
  var pname=req.body.a
  var query=`INSERT INTO masterproduct VALUES("${pid}","${pname}")`;
  database.query(query,function(err, rows){
    if(err) {
      throw err;
    } else {
      res.send(rows);
    }
  });
})
app.listen(PORT, function(){
  console.log("Server running on localhost:" + PORT);
});