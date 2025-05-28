function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (username && password) {
    window.location.href = "/dashboard";
  } else {
    alert("Please enter username and password.");
  }
}

function toggleForm() {
  alert("Sign Up not implemented. Redirecting to Dashboard for now.");
  window.location.href = "/dashboard";
}
