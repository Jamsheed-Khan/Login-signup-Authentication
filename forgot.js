import {  sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "./config.js";
import { app } from "./config.js";



let sent_email = document.querySelector("#sent_email")
let forgot_email = document.querySelector("#forgot_email")
sent_email.addEventListener('click',()=>{
    sendPasswordResetEmail(auth, forgot_email.value)
  .then(() => {
    forgot_email = ""
    console.log("congratulation reset confirmation email sent successfully")
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });

})