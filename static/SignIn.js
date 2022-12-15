// function validateForm(){
//     let email = document.forms["signIn"]["email"].value;
//     let password = document.forms["signIn"]["Password"].value;
//
//     if (email == ""){
//         alert("Email is not valid")
//         return false;
//     }
//     if ( password.length < 8){
//         alert("Please enter password with minimum 8 chars ")
//         return false;
//     }
//     alert("Success")
//     return true;
// }
//

//
// //Class User
// class User {
//     constructor(FirstName , LastName, Email, Password) {
//         this.FirstName = FirstName;
//         this.LastName = LastName;
//         this.Email = Email;
//         this.Password = Password;
//     }
//
// }
//
//
// const UserList = [];
//
// const user1 = new User('Hadar', 'Sitbon', 'hadar43219@gmail.com', '11111111!');
// const user2 = new User('Hila', 'Sitbon', 'hila@walla.com', '22222222?');
// const user3 = new User('Yossi', 'Sitbon', 'yossi@hotmail.com', '123456789');
//
// UserList.push(user1)
// UserList.push(user2)
// UserList.push(user3)
//
// console.log(UserList);
//
// //// validation !
// //sign in validation
//
// const SignInForm = document.querySelector('#SignIn');
// const Email = document.querySelector('#email');
// const Password = document.querySelector('#Password');
// const msg = document.querySelector('.msg');
//
//
// //SignIn Validation
// // let SignInForm = document.querySelector('#signin');
// SignInForm.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (Email.value === '' || Email.value == null || Password.value === '' || Password.value == null) {
//         msg.innerHTML = 'Please enter all fields';
//         setTimeout(() => msg.remove(), 2000)
//
//     }
//       else {
//         let user = 0;
//         for (let i = 0; i < UserList.length; i++) {
//             if (UserList[i].Email === Email.value && UserList[i].Password === Password.value) {
//                 alert('You are now signed In');
//                 window.location.href = 'HomePage.html';
//                 user = 1;
//             }
//         }
//          if (user === 0) {
//                 alert('User doest exists');
//             }
//
// }})
//
