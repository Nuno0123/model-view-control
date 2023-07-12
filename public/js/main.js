const loginBtn = document.querySelector('.login')
const signupBtn = document.querySelector('.signup')


if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        document.location.replace('/login');
    })
}

if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        document.location.replace('/signup');
    })
}    