const loginBtn = document.querySelector('.login')
const signupBtn = document.querySelector('.signup')

loginBtn.addEventListener('click', () => {
    document.location,replaced('/login');
})

signupBtn.addEventListener('click', () => {
    document.location.replace('/signup');
})