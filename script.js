//your JS code here. If required.

window.onload = function(){
	let savedusername = localStorage.getItem("username");
	let savedpassword = localStorage.getItem("password");

	if(savedusername && savedpassword){
		document.getElementById('existing').style.display = 'inline-block';
	}
}

document.getElementById("submit").addEventListener('click', function(){
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	let rememberMe = document.getElementById("checkbox").checked;

	alert(`Logged in as ${username}`);

	if(rememberMe){
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
		document.getElementById('existing').style.display = 'inline-block';
	}
	else{
		localStorage.removeItem('username');
        localStorage.removeItem('password');
        document.getElementById('existing').style.display = 'none';
	}
	
})

document.getElementById('existing').addEventListener('click', function() {
      let savedUsername = localStorage.getItem('username');
      if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
      }
    });