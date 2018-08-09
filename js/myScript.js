var loginForm = document.forms.form - group;
var lblNavBarDate = document.getElementById('nav-bar-date');


var date = new Date();
var n = date.toDateString();

var time = date.toLocaleTimeString();


console.log('date:', n);

console.log('time:', time);



var email = loginForm[1].elements.exampleInputEmail1.value;
var password = loginForm[1].elements.exampleInputPassword1.value;

console.log('Email : ' + email);
console.log('Password : ' + password);


function getDateTime() {
   