//function 1- greeting
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
const welcomeTypes = ["Good Morning :)", "Good Afternoon :)", "Good Evening :)"];
let welcomeText = "";

if (hour < 12) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else welcomeText = welcomeTypes[2];

greeting.innerHTML = welcomeText;



//function 2- read more function
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//function 3 - match passwords
function check(){
  if (document.getElementById('Password').value ===
    document.getElementById('Repassword').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').style.fontWeight ="700";
    document.getElementById('message').style.textAlign ="center";
    document.getElementById('message').style.fontFamily ="sans-serif";
    document.getElementById('message').style.background ="black";
    document.getElementById('message').innerHTML = 'Matching!';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').style.fontWeight ="700";
    document.getElementById('message').style.textAlign ="center";
    document.getElementById('message').style.fontFamily ="sans-serif";
    document.getElementById('message').style.background ="black";
    document.getElementById('message').innerHTML = 'Not Matching!';
  }
}
