// Switch between login and signup forms
document.getElementById('show-signup').addEventListener('click' ,function(event){
    event.preventDefault();
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
});
document.getElementById('show-login').addEventListener('click' ,function(event){
    event.preventDefault();
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
});

//t0 check whether the password and confirm password is match or not 
const signupForm = document.getElementById('signup-form');
const passwordInput=document.getElementById('signup-password');
const confirmInput=document.getElementById('confirm-password');
const passwordError=document.getElementById('password-error');

signupForm.addEventListener('submit',function(event){

    passwordError.classList.remove('visible');

    if(passwordInput.value !== confirmInput.value){
        event.preventDefault();
        passwordError.textContent = "Passwords do not match";
        passwordError.classList.add('visible');
    }
});



