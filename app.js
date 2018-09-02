var express = require("express");
var app     = express();
var path    = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
var alert = require('alert-node');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/css',express.static('css'));
app.use('/res',express.static('res'));
app.use('/',express.static('/'));
app.use(express.static(__dirname + '/'));

var pool  =mysql.createPool({
  connectionLimit :10,
host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html'));
});

app.get('/admin',function(req,res){
  res.sendFile(path.join(__dirname+'/admin.html'));
});

app.post('/submit',function(req,res){
  var username=req.body.username;
  var password=req.body.password;
  res.write('You sent the name "' + req.body.username+'".\n');
  res.write('You sent the email "' + req.body.password+'".\n');

  //var query1 = "INSERT INTO user VALUES ('"+username+"', '"+email+"','"+username+"','"+name+"')";
  var query2 = "select * from user where username = '"+username+"' and password = '"+password+"'";
  console.log(query2);
  //con.connect(function(err) {
pool.query(query2,function(error,results,fields) {
  if(error) throw error;
	//console.log('The solution is: ', results[4].username);
    //console.log('Inserted record');


    /**
     if(results[4].username = username){
      //console.log(results[4].username);
      console.log(results[4].password);
      alert('Login Successfull');
    }
    
    else{
      console.log("not equal");
      console.log(results[4].username);
    }
    */
   
});

})


app.post('/submitaccount',function(req,res){

  var ID=req.body.ID;
  var FirstName=req.body.FirstName;
  var LastName=req.body.LastName;
  var Age=req.body.Age;
  var Address=req.body.Address;
  var CouductNumber=req.body.CouductNumber;
  var EmailID=req.body.EmailID;
  var DoctorSpecialization=req.body.DoctorSpecialization;
  var Qualification=req.body.Qualification;
  var PatientProblem=req.body.PatientProblem;

  var query1 = "insert into account values ('"+ID+"','"+FirstName+"','"+LastName+"',"+Age+",'"+Address+"',"+CouductNumber+",'"+EmailID+"','"+DoctorSpecialization+"','"+Qualification+"','"+PatientProblem+"')";
  //var query2 = "SELECT * FROM USER";
  console.log(query1);
  //con.connect(function(err) {
pool.query(query1,function(error,results,fields) {
  if(error) throw error;
	//console.log('The solution is: ', results[0].name);
    console.log('Inserted record');
});
})


app.listen(3000);