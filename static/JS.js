//second js page (the first is General.js)
//function 4- active nav bar
   var currentPage = window.location.pathname; //gets the path name of the file

   const activePage = document.querySelectorAll('nav a').forEach(
       link=>{
           if(link.href.includes(`${currentPage}`)){
               link.classList.add("active");
           }
       }
   );
console.log(activePage);


//function 5- back to top at our shows page
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});



// function 6- show password function
function myFunction() {
  const x = document.getElementById("Password");
  console.log(x);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


//function 7- alert on caps lock in password field

var input = document.getElementById("Password");
var text = document.getElementById("text");
input.addEventListener("keyup", function(event) {

    if (event.getModifierState("CapsLock")) {
        text.style.display = "block";
    } else {
        text.style.display = "none"
    }

});



//function 8- filter shows

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var Buttons = btnContainer.getElementsByClassName("Buttons");
for (var i = 0; i < Buttons.length; i++) {
  Buttons[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//validation forms functions
//Sign in validation
function validateSignIn(){
    let email = document.forms["signIn"]["email"].value;
    let password = document.forms["signIn"]["Password"].value;

    if (email === ' '){
        alert("Email is not valid")
        return false;
    } else if (password.length < 8){
        alert("Please enter password with minimum 8 chars ")
        return false;
    } else{
       alert("Welcome To Ticket Space")
        return true;
    }
}

//Search tickets validation
function SearchValidation() {
    let DateFrom = document.forms["SearchTicket"]["datefrom"].value;
    let DateUntil = document.forms["SearchTicket"]["dateuntil"].value;
    let minPrice = document.forms["SearchTicket"]["minPrice"].value;
    let maxPrice = document.forms["SearchTicket"]["maxPrice"].value;
    let CurrentDate = new Date();
    let showDate = new Date(DateFrom);
    let untilDate = new Date(DateUntil);

     if (showDate < CurrentDate) {
        alert("From Date isn't valid")
        return false;
    } else if( untilDate < CurrentDate){
       alert("Until Date isn't valid")
        return false;
    } else if(untilDate < showDate) {
         alert("Please enter valid date range")
         return false;
     } else if (minPrice <= 0) {
        alert("Minimum price isn't valid")
        return false;
    } else if (maxPrice <= 0) {
        alert("Maximum price isn't valid")
        return false;
    } else {
        alert("We Process your request")
        return true;
    }

}


//Sell Tickets validation
function SellValidation() {
    let price = document.forms["Sell"]["price"].value;
    let count = document.forms["Sell"]["count"].value;
    let showName = document.forms["Sell"]["showName"].value;
    let date = document.forms["Sell"]["date"].value;
    let CurrentDate = new Date();
    let showDate = new Date(date);

     if(showName === ' ') {
         alert("Please enter valid show name")
         return false;
     } else if(showDate < CurrentDate){
       alert("Please choose future date")
        return false;
     } else if (price <= 0) {
         alert("Price isn't valid")
        return false;
    } else if(count <= 0){
        alert ("Count isn't valid")
        return false;
    } else {
       alert("Your Ticket added to sale")
    }
    return true;
}


//Sign Up validation
function validateSignUp(){
    let FirstName = document.forms["signUp"]["FirstName"].value;
    let lastName = document.forms["signUp"]["lastName"].value;
    let Email = document.forms["signUp"]["Email"].value;
    let Birthdate = document.forms["signUp"]["Birthdate"].value;
    let Phone = document.forms["signUp"]["Phone"].value;
    let Password = document.forms["signUp"]["Password"].value;
    let Repassword = document.forms["signUp"]["Repassword"].value;
    let CurrentDate = new Date();
    let dob = new Date(Birthdate);
    let age = CurrentDate - dob;
    age = Math.floor(age/1000/60/60/24/365)

    if (FirstName.length < 2) {
         alert("First name too short")
        return false;
    } else if (lastName.length < 2) {
         alert("Last name too short")
        return false;
    } else if (Email === ' '){
        alert("Email is not valid")
        return false;
    } else if(age < 18) {
        alert("The registration is from 18 years old")
        return false;
    }  else if(Phone.length < 10) {
        alert("Please ensure that you type your phone number correct")
        return false;
    }else if (Password.length < 8){
        alert("Please enter password with minimum 8 chars ")
        return false;
    } else if(Password !== '' && Repassword!=='' && Password !== Repassword) {
        alert("Password and Repassword fields must be the same")
        return false;
    } else {
        alert("Successful Registration")
    }
    return true;
}


