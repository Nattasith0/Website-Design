const signInBtn = document.querySelector('.signInBtn-link');
const signUpBtn = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtn.addEventListener('click', () => {
    wrapper.classList.add('active'); 
});

signInBtn.addEventListener('click', () => {
    wrapper.classList.remove('active'); 
});

const loginForm = document.querySelector('.sign-in form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 


    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    if (username === "admin" && password === "1234") { 
        alert("Login successful! Redirecting...");
        window.location.href = "../Home/index.html"; 
    } else {
        alert("Invalid username or password. Please try again.");
    }
});