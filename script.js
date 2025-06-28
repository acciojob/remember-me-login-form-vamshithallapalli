 window.onload = function() {
      let savedUsername = localStorage.getItem('username');
      let savedPassword = localStorage.getItem('password');
      if (savedUsername && savedPassword) {
        document.getElementById('existing').style.display = 'inline-block';
      }
    }

    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      let rememberMe = document.getElementById('checkbox').checked;

      alert(`Logged in as ${username}`);

      if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        document.getElementById('existing').style.display = 'inline-block';
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        document.getElementById('existing').style.display = 'none';
      }
    });

    document.getElementById('existing').addEventListener('click', function() {
      let savedUsername = localStorage.getItem('username');
      if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
      }
    });