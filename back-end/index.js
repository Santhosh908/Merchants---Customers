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
  var query=`SELECT * FROM user where name="${name}" and passord="${pass}"`;
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
app.get("/showtables",function(req,res){
  var query="SELECT * FROM masterproduct"
  database.query(query,function(err,rows){
      if(err)
      throw err
      else
      res.send(rows)
      // console.log(rows.length)
  })
})
app.post("/check",function(req,res){
  var a=req.body.pid
  var query=`SELECT productname from mercust.masterproduct WHERE productid=${a}`
  database.query(query,function(err,data){
    if(err){
      res.send("Not Found")
    }
    else{
      res.send(data[0])
    }
  })
})
var pname
app.post("/sellproduct",function(req,res){
  var pid=req.body.pname
  var kg=req.body.kg
  var query=`SELECT productname FROM mercust.masterproduct where productid=${pid}`
  database.query(query,function(err,data){
    if(err)
    throw err
    else{
    setpname(data[0].productname,pid,kg)
    }
  })  
})
function setpname(x,pid,kg){
  var pname=x
  var query=`INSERT INTO mercust.sellproducts VALUES ("${pid}","${pname}","${kg}")`
  database.query(query,function(err,data){
    if(err)
    throw err
  })
}
var a=[]
function setvalueforsellproduct(b){
  a=b
}
app.get('/showsellproducts',function(req,res){
  var query=`SELECT * FROM mercust.sellproducts`
  database.query(query,function(err,rows){
      if(err)
      throw err
      else{
        setvalueforsellproduct(rows)
      }
  })
  res.send(a)
})
app.listen(PORT, function(){
  console.log("Server running on localhost:" + PORT);
});