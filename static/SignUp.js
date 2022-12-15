// function validateSignUp(){
//     let FirstName = document.forms["signUp"]["FirstName"].value;
//     let lastName = document.forms["signUp"]["lastName"].value;
//     let Email = document.forms["signUp"]["Email"].value;
//     let Birthdate = document.forms["signUp"]["Birthdate"].value;
//     let Phone = document.forms["signUp"]["Phone"].value;
//     let Password = document.forms["signUp"]["Password"].value;
//     let Repassword = document.forms["signUp"]["Repassword"].value;
//     let currentTime= new Date();
//     let yy = currentTime.getFullYear();
//     let Birthyear = Birthdate.getFullYear()
//
//
//     if (!FirstName.match(/^[a-zA-Z]*$/)) {
//         alert("Invalid first name, please type again in English only")
//         return false;
//     }
//     if (!lastName.match(/^[a-zA-Z]*$/) && !lastName.match(/^[a-zA-Z]+ [a-zA-Z]+$/) && !lastName.match(/^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/)) {
//         alert("Invalid last name, please type again in English only")
//         return false;
//     }
//     if (FirstName.length < 2) {
//          alert("First name too short")
//         return false;
//     }
//     if (FirstName.length > 15) {
//          alert("First name too long")
//         return false;
//     }
//     if (lastName.length < 2) {
//          alert("Last name too short")
//         return false;
//     }
//
//     if (Email == ""){
//         alert("Email is not valid")
//         return false;
//     }
//     if (Password.length < 8){
//         alert("Please enter password with minimum 8 chars ")
//         return false;
//
//     }
//     if(Password != '' && Repassword!= '' && Password != Repassword)
//     {
//         alert("Please ensure that you type your password correct in 2 places.")
//         return false;
//     }
//     if(Phone.length < 10)
//     {
//         alert("Please ensure that you type your phone number correct")
//         return false;
//     }
//
//     if(Birthyear > yy)
//     {
//         alert("You are not allowed to register")
//         return false;
//
//     }
//     return true;
// }
//

// // const SignUpForm = document.querySelector('#signUp');
// const FirstName = document.querySelector('#FirstName');
// const lastName = document.querySelector('#lastName');
// const Email = document.querySelector('#Email');
// const Password = document.querySelector('#Password');
// const Repassword = document.querySelector('#Repassword');
// const msg = document.querySelector('.msg');
//
//
// //SignUp Validation
// const SignUpForm = document.querySelector('#signup')
// SignUpForm.addEventListener('click', (e) => {
//     e.preventDefault();
//     if(Password.value.length<8){
//         msg.innerHTML='Password must be at least 8 characters';
//         setTimeout(() => msg.remove(), 2000)
//         // alert('Password must be at least 8 characters');
//         return false;
//     }
//
//     if(Password.value.length>15) {
//         msg.innerHTML='Password must be less than 15 characters';
//         setTimeout(() => msg.remove(), 2000)
//         // alert('Password must be less than 20 characters');
//         return false;
//     }
//
//     if(Password !== '' && Repassword !== '' && Password !== Repassword){
//         msg.innerHTML='Please check that both passwords are the same';
//         setTimeout(() => msg.remove(), 2000)
//         // alert('Please check that both passwords are the same');
//         return false;
//     }
//
//     else {
//         alert('You are now signed In');
//         window.location.href = 'HomePage.html';
//     }
//
// })


// const SignUpForm = document.querySelector('#signUp');
const FullName = document.querySelector('#FirstName');
let UserName = document.querySelector('#lastName');
let Password = document.querySelector('#Password');
let PasswordRepeat = document.querySelector('#Repassword');
let msg = document.querySelector('.msg');


//SignUp Validation
const SignUpForm = document.querySelector('#signup')
SignUpForm.addEventListener('click', (e) => {
    e.preventDefault();

    if (atLeastOneLetterAndSpace(FullName) === false) {
        msg.innerHTML = 'Please enter full name';
        setTimeout(() => msg.remove(), 3000)
        return false;
    }

    if (Password.value.length < 8) {
        msg.innerHTML = 'Password must be at least 8 characters';
        setTimeout(() => msg.remove(), 3000)
        return false;
    }

    if (Password.value.length > 15) {
        msg.innerHTML = 'Password must be less than 15 characters';
        setTimeout(() => msg.remove(), 3000)
        return false;
    }

    if (Password !== '' && PasswordRepeat !== '' && Password !== PasswordRepeat) {
        msg.innerHTML = 'Please check that both passwords are the same';
        setTimeout(() => msg.remove(), 3000)
        return false;
    } else {
        // alert('You are now signed In');
        window.location.href = 'HomePage.html';
    }

})


//Check full name input validation
function atLeastOneLetterAndSpace(str) {
    return (
        /^[A-Za-z\s]*$/.test(str) &&
        /[A-Za-z]/.test(str) &&
        /\s/.test(str)
    );
}