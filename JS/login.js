function showOverlay(type) {
    const overlay = document.getElementById("overlay");
    const signUpForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
  
    if (type === "signup") {
      signUpForm.style.display = "block";
      loginForm.style.display = "none";
    } else {
      signUpForm.style.display = "none";
      loginForm.style.display = "block";
    }
  
    overlay.style.display = "flex";
  }
  
  function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
  }
  