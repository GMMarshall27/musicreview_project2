const signupForm = async function (event) {
    event.preventDefault();
  
    const username = document.querySelector("#username-input-signup");
    const password = document.querySelector("#password-input-signup");
    console.log(username);
    console.log(password);
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Issue with Signup");
    }
  };
  
  document.querySelector("#signup-form").addEventListener("submit", signupForm);
