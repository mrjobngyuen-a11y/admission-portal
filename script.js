const users = {

"offer@university.edu":{

password:"123456"

}

};

function login(){

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

if(users[email]&&users[email].password===password){

window.location.href="portal.html";

}

else{

document.getElementById("error").innerHTML="Invalid email or password.";

}

}
