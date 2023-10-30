import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "./config.js";


 
 //create user with email and password


 let registerbtn = document.querySelector("#Register_btn")
 registerbtn.addEventListener('click',function () {
   let remail = document.getElementById("remail")
   let rpassword = document.getElementById("rpassword")

   createUserWithEmailAndPassword(auth, remail.value, rpassword.value)
 .then((userCredential) => {
    
   const user = userCredential.user;
   console.log('user==>',user);
   window.location = "signin.html"
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   console.log("error==>",errorMessage);
 });
 });

