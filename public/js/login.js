const loginForm = async function (event) {
	event.preventDefault();

	const username = document.querySelector('#username-input-login').value.trim();
	const password = document.querySelector('#password-input-login').value.trim();
	console.log(username);
	console.log(password);
	if (username && password) {
		const response = await fetch('/controllers/users/login', {
			method: 'POST',
			body: JSON.stringify({
				username,
				password,
			}),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			document.location.replace('/reviews');
		} else {
			alert('Failed to login');
		}
	}
};

document.querySelector('#login-form').addEventListener('submit', loginForm);
