const users = {

"offer@university.edu":{

password:"123456"

}

};

function login(){

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value.trim();

if(users[email] && users[email].password===password){

window.location.href="portal.html";

}

else{

document.getElementById("error").textContent="Invalid email or password.";

}

}
